// @flow

import LatLon from "./latlon";

describe("LatLon", () => {


	it("#constructor works", () => {

		const latlon = new LatLon(0, 0);
		expect(latlon).not.toBeUndefined();
		expect(latlon).toMatchObject({ lat: 0, lon: 0 });

	});

	it("#constructor throws", () => {

		expect(() => new LatLon("foo", 0)).toThrow();
		expect(() => new LatLon("foo", 0)).toThrowError("Invalid LatLon object: (foo, 0)");

		expect(() => new LatLon(-91, 0)).toThrowError("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");
		expect(() => new LatLon(91, 0)).toThrowError("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");
		expect(() => new LatLon(0, 181)).toThrowError("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");
		expect(() => new LatLon(0, -181)).toThrowError("Invalid LatLon value: Latitude must be between -90 and 90 and Longitude must be between -180 and 180");

	});

	it("#toString", () => {

		expect(new LatLon(10, 20).toString()).toEqual("LatLon(10, 20)");

	});


});
