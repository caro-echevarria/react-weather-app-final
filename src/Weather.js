import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1 id="city">Mexico City</h1>
        <ul>
          <li>
            <span id="date">July 2, 2021</span>
          </li>
          <li>
            <span id="time">13:51</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly cloudy"
              id="icon"
              class="float-left"
            />
            <div className="float-left">
              <strong id="temperature">23</strong>
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
              Feels like: <span id="feels-like">18</span>
            </strong>
          </h7>
          <ul>
            <li id="description">Mostly cloudy</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <span className="conditions">
              <li>
                Humidity:
                <span id="humidity">49</span>%
              </li>
              <li>
                Wind:
                <span id="wind">18</span> km/h
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
