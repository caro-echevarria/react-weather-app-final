import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <span>{weatherData.date}</span>
            </li>
            <li>
              <span>13:51</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">
                  <a href="alt" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="alt" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h7>
              <strong>
                {" "}
                Feels like: <span>{weatherData.feelsLike}</span>
              </strong>
            </h7>
            <ul>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <span className="conditions">
                <li>
                  Humidity:
                  <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind:
                  <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fc05c82742f2f3ebf4f9a474f1172d7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
