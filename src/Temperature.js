import React from "react";
import "./App.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <p className="day">
            <img
              src="http://openweathermap.org/img/wn/03n@2x.png"
              className="dayIcon"
              width="100px"
            />
            <br />
            <span className="description">Scattered Clouds</span>
          </p>
        </div>
        <div className="col-6">
          <p className="temp-date-time-MM">
            <span className="temp">16</span>
            <span className="units">
              <span className="active">°C</span>
            </span>
            <br />
            <span>
              Sat, Apr 24 <br />
              9:49 hrs
            </span>
            <br />↑<span>17</span>° ↓<span>15</span>° <br />
          </p>
        </div>
      </div>
    </div>
  );
}
