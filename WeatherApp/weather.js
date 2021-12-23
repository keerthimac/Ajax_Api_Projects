class Weather {
  constructor(city) {
    this.apiKey = 'cd0cf9b03026ffe5a64011663185950b';
    this.city = city;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=cd0cf9b03026ffe5a64011663185950b&units=metric`);
    const responseData = await response.json();
    return responseData;
  }

  //Change weather Location
  changeLocation(city) {
    this.city = city;
  }
}
