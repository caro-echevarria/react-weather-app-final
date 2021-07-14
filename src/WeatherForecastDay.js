import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">{day()}</li>
            <WeatherIcon code="11d" size={36} />
            <li className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {maxTemperature()}
              </span>{" "}
              <span className="WeatherForecast-temp-min">
                {minTemperature()}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
