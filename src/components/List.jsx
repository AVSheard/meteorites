/** @format */

import React, { Component } from "react";
import { observer } from "mobx-react";
import axios from "axios";
import { meteoriteData } from "../stores/meteoriteData";

// fall: "Fell"
// geolocation: Object { latitude: "50.775", longitude: "6.08333" }
// id: "1"
// mass: "21"
// name: "Aachen"
// nametype: "Valid"
// recclass: "L5"
// reclat: "50.775000"
// reclong: "6.083330"
// year: "1880-01-01T00:00:00.000"

export default observer(
	class List extends Component {
		componentDidMount() {
			axios
				.get("https://data.nasa.gov/resource/gh4g-9sfh.json")
				.then((res) => (meteoriteData.meteorites = res.data));
		}

		render() {
			return (
				<ul>
					{meteoriteData.meteorites.length > 0 ? (
						meteoriteData.meteorites.map((meteorite) => (
							<li key={meteorite.id}>
								{meteorite.name}: latitude {meteorite.reclat} longlitude{" "}
								{meteorite.reclong}
							</li>
						))
					) : (
						<>loading...</>
					)}
				</ul>
			);
		}
	}
);
