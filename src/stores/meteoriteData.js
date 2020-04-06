/** @format */

import { decorate, observable } from "mobx";

export class MeteoriteData {
	constructor() {
		this.meteorites = [];
	}
}

decorate(MeteoriteData, {
	meteorites: observable,
});

export const meteoriteData = new MeteoriteData();
