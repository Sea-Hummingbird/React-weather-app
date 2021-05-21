import React from "react";
import "./App.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <p className="day">
            <img
              src= "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/235/original/few-clouds-d.png?1621556088"
              className="dayIcon"
              width="100px"
              alt="Weather Icon"
            />
            <br />
            <span className="description">Scattered Clouds</span><br />
            <div className="information">
              Humidity: <span> 72 </span> %<br />
              Wind: <span> 5 </span> mph
            </div>
          </p>
        </div>
        <div className="col-6">
          <p className="temp-date-time-MM">
            <span className="temp">16</span>
            <span className="units">
              <span className="active">°C</span>
            </span>
            <br />
            <span className="date-time">
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
