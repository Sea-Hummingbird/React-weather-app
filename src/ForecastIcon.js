import React from "react";
import "./Forecast.css";

export default function ForecastIcon (props){
    const codeMapping = {
        "01d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/301/original/clear-sky-f.png?1623075568",
        "01n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/301/original/clear-sky-f.png?1623075568",
        "02d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/304/original/few-clouds-f.png?1623075605",
        "02n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/304/original/few-clouds-f.png?1623075605",
        "03d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/312/original/scattered-clouds-f.png?1623075687",
        "03n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/312/original/scattered-clouds-f.png?1623075687",
        "04d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/298/original/broken-clouds-f.png?1623075531",
        "04n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/298/original/broken-clouds-f.png?1623075531",
        "09d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/315/original/shower-rain-f.png?1623075729",
        "09n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/315/original/shower-rain-f.png?1623075729",
        "10d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/309/original/rain-f.png?1623075655",
        "10n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/309/original/rain-f.png?1623075655",
        "11d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/321/original/thunderstorm-f.png?1623075803",
        "11n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/321/original/thunderstorm-f.png?1623075803",
        "13d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/318/original/snow-f.png?1623075761",
        "13n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/318/original/snow-f.png?1623075761",
        "50d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/306/original/mist-f.png?1623075628",
        "50n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/306/original/mist-f.png?1623075628"
    }
    return(
        <div>
            <img
              src= {codeMapping[props.forecastCode]}
              className= {props.alt}
              width="38px"
              alt="Weather Icon"
            />
        </div>
    );
}