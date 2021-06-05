import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./App.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  const [city, setCity] = useState (props.defaultCity);

  function handleResponse (response) {
    setWeatherData ({
      ready: true,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed, 
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
    });
  }

  function search(){
    const apiKey = "8354e81509710f8d9f63ec83df3a59ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }



  if (weatherData.ready){
    return (
      <div>
           <div>
        <WeatherInfo data={weatherData}/>
        <Forecast data={weatherData}/>
      </div>
          <div className="Form">
      <div className="row search">
        <div>
          <form onSubmit={handleSubmit}> 
              <input
                type="text"
                className="change-city"
                placeholder="Another City?"
                onChange={handleCityChange}
              />
              <button className="searchT" type="submit">
                🔍
              </button>
          </form>
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
