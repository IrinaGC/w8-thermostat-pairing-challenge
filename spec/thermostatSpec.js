"use strict";

// Thermostat starts at 20 degrees

describe ("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.startTemperature).toEqual(20);
  });

});
