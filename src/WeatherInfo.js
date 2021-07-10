import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <div className="Overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="alt" id="celsius-link" className="Active">
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

        <div className="col-5">
          <ul>
            <span className="Conditions">
              <li>
                {" "}
                <strong>{props.data.description}</strong>
              </li>
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
