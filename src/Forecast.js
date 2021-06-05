import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";
import "./Forecast.css";

export default function Forecast (props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    function handleForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return (
        <div className="forecast">
            <h5 className="weeklyForecast">
            WEEKLY FORECAST
            </h5>
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 5) {
                        return(
                        <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                    );

                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );

    } else {
        let latitude = props.data.coordinates.lat;
        let longitude = props.data.coordinates.lon;
        const apiKey = "8354e81509710f8d9f63ec83df3a59ad";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleForecast);

        return null;
    }
    
}