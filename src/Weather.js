import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";
import Footer from "./Footer";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      wind: response.data.wind.speed,
      city: response.data.name,
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
                  Last updated:{" "}
                  <span id="date">
                    <FormattedDate date={weatherData.date} />
                  </span>
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
                    alt="Clear sky"
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
                      Wind:{" "}
                      <span id="wind">{Math.round(weatherData.wind)}</span> km/h
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
    const apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric `;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
