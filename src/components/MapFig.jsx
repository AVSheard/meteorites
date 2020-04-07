/** @format */

import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { observer } from "mobx-react";
import { meteoriteData } from "../stores/meteoriteData";

export default observer(
	class MapFig extends Component {
		render() {
			return meteoriteData.meteorites.length > 0 ? (
				<Map center={[0, 0]} zoom={2}>
					{meteoriteData.meteorites.map((meteorite) => {
						let { reclat, reclong } = meteorite;
						const reclatNum = Number(reclat);
						const reclongNum = Number(reclong);
						return (
							<Marker key={meteorite.id} position={[reclatNum, reclongNum]} />
						);
					})}

					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</Map>
			) : (
				<>loading...</>
			);
		}
	}
);
