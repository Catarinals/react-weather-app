import React from "react";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import "./Footer.css";
import Forecast from "./Forecast";

export default function App() {
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
              <strong id="city-now"></strong>
            </h1>
            <ul className="more-info">
              <li>
                Last updated: <span id="date"></span>
              </li>
              <li className="temp-description" id="temp-description"></li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <strong id="temperature"></strong>
                <span className="units">ºC</span>
              </div>
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
