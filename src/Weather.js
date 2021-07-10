import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.feels,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherInfo">
        <form>
          <input type="search" placeholder="Enter a city.." />
          <button type="Submit" id="search-button">
            <i className="fa fa-search"></i>
          </button>
          <button type="submit" id="current-button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "fc05c82742f2f3ebf4f9a474f1172d7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
