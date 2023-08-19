import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="overview"></div>
      <div className="col updated">
        <h1>
          <strong className="city" id="city-now">
            {props.data.city}
          </strong>
        </h1>
        <ul className="more-info">
          <li>
            Last updated:{" "}
            <span id="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li
            className="temp-description text-capitalize"
            id="temp-description">
            {props.data.description}
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} id="icon" />{" "}
            </div>
            <strong id="temperature">
              {Math.round(props.data.temperature)}
            </strong>
            <span className="units">ºC</span>
          </div>
          <div className="col-sm-12">
            <ul className="more-info">
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span> %
              </li>
              <li>
                Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
