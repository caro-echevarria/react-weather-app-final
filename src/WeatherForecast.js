import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Tue</li>
            <WeatherIcon code="11d" size={25} />
            <li className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">19°</span>{" "}
              <span className="WeatherForecast-temp-min">10°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
