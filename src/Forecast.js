import React from "react";

export default function Forecast() {
  return (
    <div className="col-sm-12">
      <ul className="more-info">
        <li>
          Humidity: <span id="humidity"></span> __%
        </li>
        <li>
          Wind: <span id="wind"></span> __km/h
        </li>
      </ul>
    </div>
  );
}
