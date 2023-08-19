import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    //console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="app border p-5 mt-5 rounded shadow">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="search-box">
                <div className="Form">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    id="enter-city"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />{" "}
                  <button
                    type="submit"
                    className="btn btn-light btn-outline-dark">
                    Search
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-light btn-outline-dark"
                    id="current-location">
                    Current
                  </button>
                </div>
              </div>
            </form>
            <Weatherinfo data={weatherData} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
