
class Thermostat {
  
  constructor() {
    this.MIN_TEMP = 10;
    this.temp = 20;
  };

  getCurrentTemperature() {
    return this.temp;
  }

  isMinTemp() {
    return this.temp === this.MIN_TEMP;
  }

  up() {
     this.temp += 1;
   }

   down() {
     if (this.MinTemp) {
       return;
      } 
      this.temp -= 1;
    };

    
    }
