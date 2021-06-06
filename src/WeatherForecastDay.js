import React from "react";
import ForecastIcon from "./ForecastIcon"
import "./Forecast.css";

export default function WeatherForecastDay(props){
    function tempMax(){
        let tempMax = Math.round(props.data.temp.max);
        return `${tempMax}`
    }

    function tempMin(){
        let tempMin = Math.round(props.data.temp.min);
        return `${tempMin}`
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        return days[day];

    }

    return (
        <div>
            <div className="ForecastDay">{day()}</div>
            <ForecastIcon forecastCode={props.data.weather[0].icon} alt={props.data.weather[0].description}/>
            <div className="maxMin">
                ↑<span>{tempMax()}°</span><br/>
                ↓<span>{tempMin()}°</span>
            </div>
        </div>
    )
}