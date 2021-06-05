import React from "react";

export default function ForecastIcon (props){
    const codeMapping = {
        "01d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/044/original/clear-sky-f.png?1622678268",
        "01n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/044/original/clear-sky-f.png?1622678268",
        "02d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/045/original/few-clouds-f.png?1622678278",
        "02n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/045/original/few-clouds-f.png?1622678278",
        "03d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/048/original/scattered-clouds-f.png?1622678311",
        "03n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/048/original/scattered-clouds-f.png?1622678311",
        "04d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/043/original/broken-clouds-f.png?1622678255",
        "04n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/043/original/broken-clouds-f.png?1622678255",
        "09d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/042/original/shower-rain-f.png?1622678071",
        "09n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/042/original/shower-rain-f.png?1622678071",
        "10d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/047/original/rain-f.png?1622678297",
        "10n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/047/original/rain-f.png?1622678297",
        "11d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/050/original/thunderstorm-f.png?1622678335",
        "11n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/050/original/thunderstorm-f.png?1622678335",
        "13d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/049/original/snow-f.png?1622678325",
        "13n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/049/original/snow-f.png?1622678325",
        "50d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/046/original/mist-f.png?1622678288",
        "50n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/046/original/mist-f.png?1622678288"
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