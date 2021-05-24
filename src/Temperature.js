import React, { useState }from "react";
import axios from "axios";
import "./App.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});

  function handleResponse (response) {
    setWeatherData ({
      ready: true,
      city: props.defaultCity,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed, 
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      description: response.data.weather[0].description,
    });
  }

  function search(){
    const apiKey = "8354e81509710f8d9f63ec83df3a59ad";
    let city = props.defaultCity
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready){
    return (
    <div>
      <p className="city">
        {city}
        </p>
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
            <span className="description">{setWeatherData.description}</span><br />
            <div className="information">
              Humidity: <span> {setWeatherData.humidity} </span> %<br />
              Wind: <span> {setWeatherData.wind} </span> mph
            </div>
          </p>
        </div>
        <div className="col-6">
          <p className="temp-date-time-MM">
            <span className="temp">{setWeatherData.temperature}</span>
            <span className="units">
              <span className="active">°C</span>
            </span>
            <br />
            <span className="date-time">
              Sat, Apr 24 <br />
              9:49 hrs
            </span>
            <br />↑<span>{setWeatherData.tempMax}</span>° ↓<span>{setWeatherData.tempMin}</span>° <br />
          </p>
        </div>
      </div>
    </div>
  </div>
  );
  } else {
    search()
    return "Loading...";
  }
  
}
