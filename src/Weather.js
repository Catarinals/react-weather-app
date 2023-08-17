import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    //console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.daily[0].temperature.day,
      humidity: response.data.daily[0].temperature.humidity,
      date: "Wednesday 07:00",
      description: response.data.daily[0].condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      wind: response.data.daily[0].wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
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
                  Last updated: <span id="date">{weatherData.date}</span>
                </li>
                <li
                  className="temp-description text-capitalize"
                  id="temp-description">
                  {weatherData.description}
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt=""
                    className="float-left"
                    id="icon"
                  />
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
    const apiKey = "ea011et20fa37354b09b96e56b43o2f3";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric `;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
