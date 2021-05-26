import React, { useState } from "react";

export default function TempUnits(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius"){
        return(
        <div>
            <span className="temp">{Math.round(props.celsius)}</span>
            <span className="units">
              <span><strong>°C</strong> | <a href="/" onClick={showFahrenheit}>°F</a></span>
            </span>
        </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <div>
            <span className="temp">{Math.round(fahrenheit)}</span>
            <span className="units">
              <span><a href="/" onClick={showCelsius}>°C</a> | <strong>°F</strong></span>
            </span>
        </div>
        );
    }
}