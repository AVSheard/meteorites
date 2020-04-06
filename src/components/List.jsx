/** @format */

import React, { Component } from "react";
import { observer } from "mobx-react";
import axios from "axios";
import { meteoriteData } from "../stores/meteoriteData";

export default observer(
	class List extends Component {
		componentDidMount() {
			axios
				.get("https://data.nasa.gov/resource/gh4g-9sfh.json")
				.then((res) => (meteoriteData.meteorites = res.data));
		}

		render() {
			return <ul></ul>;
		}
	}
);
