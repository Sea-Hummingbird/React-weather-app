import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="code">
        <a
          href="https://github.com/Sea-Hummingbird/React-weather-app"
          className="open-source-code"
          target="_blank" 
          rel="noreferrer"
        >
          Open-Source Code
        </a>
          {" "}by Claudia Medel
      </p>
    </div>
  );
}
