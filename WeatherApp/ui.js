class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${Math.round(weather.main.temp)}°C (${Math.round((weather.main.temp * 9) / 5 + 32)} F)`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`;
    this.wind.textContent = `wind: ${weather.wind.speed} m/s`;
    this.dewpoint.textContent = `DewPoint: ${Math.round(weather.main.temp)}°C`;
  }
}
