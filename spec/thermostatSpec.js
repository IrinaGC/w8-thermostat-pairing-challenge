"use strict";


describe ("Thermostat", () => {
  let thermostat;
  
  beforeEach(() => {
    thermostat = new Thermostat();
  });
  
  // Thermostat starts at 20 degrees
  it("starts at 20 degrees", () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // You can increase the temperature with an up function
  it("increase temperature with 1", () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // You can decrease the temperature with a down function
  it("decrease temperature with 1", () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('error below 10 degrees', () => {
    for (let i=0; i<10; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });


})

// expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
