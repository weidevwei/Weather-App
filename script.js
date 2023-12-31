const apiKey = "e4616050b63d029e6179e6115564fc2d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
  document.querySelector(".error").style.display = "none";
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    searchBox.value = "";
    document.querySelector(".weather").style.display = "none";
  }

  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "mi/h";

  let weather = data.weather[0].main.toLowerCase();
  console.log(weather);
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".weather-icon").src = `/images/${weather}.png`;
}

searchButton.addEventListener("click", () => {
  console.log("clicked");
  checkWeather(searchBox.value);
});
