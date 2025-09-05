const apiKey = "91452814b52332fcabd6110a377c2de9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function fetchWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.dir(data);
  let cityName = document.querySelector("#city");
  let temp = document.querySelector("#temp");
  let humidity = document.querySelector("#humidity");
  let speed = document.querySelector("#speed");
  let weatherIcon = document.querySelector("#weatherIcon");
  let weather = data.weather[0].main;
  console.log(weather);
  if (weather === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weather === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weather === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weather === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weather === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = "images/snow.png";
  }
  cityName.textContent = data.name;
  temp.textContent = Math.round(data.main.temp) + "°C";
  humidity.textContent = Math.round(data.main.humidity) + "%";
  speed.textContent = Math.round(data.wind.speed) + "km/h";
}

let searchBtn = document.querySelector("#searchBtn");
let city = document.querySelector("#inputText");
let info = document.querySelector(".info");

searchBtn.addEventListener("click", function () {
  let cityName = city.value;
  if (city.value === "") {
    alert("Please enter a city name");
    return;
  }

  info.style.display = "block";
  city.value = "";
  fetchWeather(cityName);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
