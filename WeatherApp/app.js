//Init Stroage Object
const stroage = new Storage();

//Get Stored location data
const WeatherLocation = stroage.getLocationData();
// console.log(WeatherLocation);

//Init Weather object
const weather = new Weather(WeatherLocation.city);
//Init UI Object
const ui = new UI();

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', function (e) {
  const city = document.getElementById('city').value;

  //Change Location
  weather.changeLocation(city);

  //Set location in LS
  stroage.setLocationData(city);

  //Get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');
});

////-----------Get Posts------------
function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      console.log(data);
      ui.paint(data);
    })
    .catch((err) => console.log(err));
}
