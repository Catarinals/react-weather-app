import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import "./Footer.css";
import axios from "axios";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="app border p-5 mt-5 rounded shadow">
            <div className="search-box">
              <form id="search-form">
                <Form />
              </form>
            </div>

            <div className="overview"></div>
            <div className="col updated">
              <h1>
                <strong className="city" id="city-now">
                  {weatherData.city}
                </strong>
              </h1>
              <ul className="more-info">
                <li>
                  Last updated: <span id="date"></span>
                </li>
                <li className="temp-description" id="temp-description">
                  {weatherData.description}
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="d-flex weather-temperature">
                  <img src="" alt="" className="float-left" id="icon" />
                  <strong id="temperature">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units">ºC</span>
                </div>
                <div className="col-sm-12">
                  <ul className="more-info">
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span> %
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    const apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
