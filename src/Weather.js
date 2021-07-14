import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const apiKey = "fc05c82742f2f3ebf4f9a474f1172d7d";
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function setCurrentWeather(event) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;
      axios.get(apiURL).then(handleResponse);
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherInfo">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button type="Submit" id="search-button">
            <i className="fa fa-search"></i>
          </button>
          <button
            type="submit"
            id="current-button"
            value="Current"
            onClick={setCurrentWeather}
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
