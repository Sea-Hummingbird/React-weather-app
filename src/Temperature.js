import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false });

  function handleResponse (response) {
    setWeatherData ({
      ready: true,
      cityName: props.defaultCity,
      date: new Date(response.data.dt * 1000),
      icon: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/235/original/few-clouds-d.png?1621556088",
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
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready){
    return (
      <div>
        <WeatherInfo data={weatherData}/>
      </div>
  );
  } else {
    search()
    return "Loading...";
  }
  
}
