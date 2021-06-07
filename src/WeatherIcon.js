import React from "react";

export default function WeatherIcon (props){
    const codeMapping = {
        "01d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/300/original/clear-sky-d.png?1623075559",
        "01n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/302/original/clear-sky-n.png?1623075580",
        "02d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/303/original/few-clouds-d.png?1623075590",
        "02n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/305/original/few-clouds-n.png?1623075619",
        "03d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/311/original/scattered-clouds-d.png?1623075676",
        "03n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/313/original/scattered-clouds-n.png?1623075695",
        "04d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/297/original/broken-clouds-d.png?1623075517",
        "04n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/299/original/broken-clouds-n.png?1623075547",
        "09d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/314/original/shower-rain-d.png?1623075705",
        "09n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/316/original/shower-rain-n.png?1623075738",
        "10d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/308/original/rain-d.png?1623075646",
        "10n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/310/original/rain-n.png?1623075668",
        "11d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/320/original/thunderstorm-d.png?1623075784",
        "11n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/322/original/thunderstorm-n.png?1623075813",
        "13d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/317/original/snow-d.png?1623075749",
        "13n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/319/original/snow-n.png?1623075771",
        "50d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/307/original/mist.png?1623075637",
        "50n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/010/307/original/mist.png?1623075637"
    }
    return(
        <div>
            <img
              src= {codeMapping[props.code]}
              className= {props.alt}
              width="100px"
              alt="Weather Icon"
            />
        </div>
    );

}