import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
