import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
        <div>
      <p className="city">
        {props.data.cityName}
        </p>
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <p className="day">
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            <br />
            <span className="description">{props.data.description}</span><br />
            <div className="information">
              Humidity: <span> {props.data.humidity} </span> %<br />
              Wind: <span> {props.data.wind} </span> mph
            </div>
          </p>
        </div>
        <div className="col-6">
          <p className="temp-date-time-MM">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="units">
              <span className="active">°C</span>
            </span>
            <br />
            <span className="date-time">
               <CurrentDate date={props.data.date} /> 
            </span>
            ↑<span>{Math.round(props.data.tempMax)}</span>° ↓<span>{Math.round(props.data.tempMin)}</span>° <br />
          </p>
        </div>
      </div>
    </div>
  </div>
    );
}
