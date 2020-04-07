/** @format */

import React from "react";
import "./App.css";
import Hearder from "./components/Hearder";
import List from "./components/List";
import MapFig from "./components/MapFig";

function App() {
	return (
		<div className="App">
			<Hearder />
			<MapFig />
			<List />
		</div>
	);
}

export default App;
