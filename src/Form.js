import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <input
        type="search"
        placeholder="Enter a city"
        id="enter-city"
        autoComplete="off"
      />{" "}
      <button type="submit" className="btn btn-light btn-outline-dark">
        Search
      </button>{" "}
      <button
        type="button"
        className="btn btn-light btn-outline-dark"
        id="current-location">
        Current
      </button>
    </div>
  );
}
