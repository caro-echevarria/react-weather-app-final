import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
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
