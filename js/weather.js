const API_KEY = "408b3884306f1c73960cfba9bd209cfd";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;  
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&&units=metric`;
  

  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:nth-child(2)");
    const weatherIconImg = document.querySelector("#weather img");
    const weatherIcon = data.weather[0].icon;
    const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    city.innerText = data.name;
    weather.innerText = `/ ${data.main.temp} °C`;
    weatherIconImg.setAttribute("src", weatherIconAdrs);
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError );