import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
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
              Feels like: <span>{props.data.feelsLike}</span>
            </strong>
          </h7>
          <ul>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <span className="conditions">
              <li>
                Humidity:
                <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind:
                <span>{Math.round(props.data.wind)}</span> km/h
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
