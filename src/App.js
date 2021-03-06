import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Mexico City" />
      <footer>
        <small>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/carolina-genoveva-echevarría-aguilar"
            target="_blank"
            rel="noreferrer"
          >
            Carolina Echevarria <i className="fab fa-linkedin"></i>
          </a>
          <br />
          <a
            href="https://github.com/caro-echevarria/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced <i className="fab fa-github"></i>
          </a>{" "}
          and{" "}
          <a
            href="https://competent-brown-05cd48.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted at Netlify{" "}
            <span
              className="iconify"
              data-icon="simple-icons:netlify"
              data-inline="false"
            ></span>
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
