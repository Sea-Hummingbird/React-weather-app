import React from "react";
import ForecastIcon from "./ForecastIcon"
import "./Forecast.css";

export default function Forecast (props){
    return (
        <div className="forecast">
            <h5 className="weeklyForecast">
            WEEKLY FORECAST
            </h5>
            <div className="col-2">
                <div className="row" className="forecastContainer">
                    <div className="ForecastDay">MON</div>
                    <ForecastIcon forecastCode={props.data.icon} alt={props.data.description}/>
                    <div>
                        ↑<span>30</span><br/>
                        ↓<span>20</span>
                    </div>
                </div>
            </div>
        </div>
    );
}