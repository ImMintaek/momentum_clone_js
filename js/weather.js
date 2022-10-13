const API_KEY = config.apikey;
console.log(config.apikey);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=ja&appid=${API_KEY}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const celsius = Math.trunc(data.main.temp);

    city.innerText = `気温：${celsius}°`;
    weather.innerText = `本日の天気：${data.weather[0].main}＠${data.name}`;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

