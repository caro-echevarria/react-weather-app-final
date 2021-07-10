import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)} </span>
        <a href="/" id="f" className="link" onClick={convertToCelsius}>
          °C
        </a>
        <span className="line"> |</span>
        <a href="/" id="c" className="link" onClick={convertToFahrenheit}>
          °F
        </a>
      </span>
    );
  } else if (unit === "fahrenheit") {
    return (
      <span>
        <span className="temperature">
          {Math.round(props.celsius * 1.8 + 32)}{" "}
        </span>
        <a href="/" id="c" className="link" onClick={convertToCelsius}>
          °C
        </a>
        <span className="line"> |</span>
        <a href="/" id="f" className="link" onClick={convertToFahrenheit}>
          °F
        </a>
      </span>
    );
  }
}
