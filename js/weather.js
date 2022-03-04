const API_KEY = "408b3884306f1c73960cfba9bd209cfd";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;  
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError );