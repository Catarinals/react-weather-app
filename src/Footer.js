import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://catarina-portfolio-cls.netlify.app/"
        rel="noreferrer"
        target="_blank">
        Catarina Santos
      </a>{" "}
      is{" "}
      <a
        href="https://github.com/Catarinals/react-weather-app"
        rel="noreferrer"
        target="_blank">
        {" "}
        open-sourced on GitHub
      </a>{" "}
      and
      <a
        href="https://my-react-weather-app-cls.netlify.app"
        rel="noreferrer"
        target="_blank">
        {" "}
        hosted on Netlify
      </a>
    </div>
  );
}
