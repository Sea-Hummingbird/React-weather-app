import React from "react";

export default function WeatherIcon (props){
    const codeMapping = {
        "01d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/584/original/clear-sky-d.png?1621993708",
        "01n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/585/original/clear-sky-n.png?1621993720",
        "02d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/235/original/few-clouds-d.png?1621556088",
        "02n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/586/original/few-clouds-n.png?1621993730",
        "03d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/590/original/scattered-clouds-d.png?1621993774",
        "03n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/591/original/scattered-clouds-n.png?1621993782",
        "04d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/582/original/broken-clouds-d.png?1621993686",
        "04n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/583/original/broken-clouds-n.png?1621993699",
        "09d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/592/original/shower-rain-d.png?1621993808",
        "09n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/593/original/shower-rain-n.png?1621993819",
        "10d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/588/original/rain-d.png?1621993757",
        "10n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/589/original/rain-n.png?1621993766",
        "11d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/596/original/thunderstorm-d.png?1621993854",
        "11n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/597/original/thunderstorm-n.png?1621993864",
        "13d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/594/original/snow-d.png?1621993831",
        "13n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/595/original/snow-n.png?1621993844",
        "50d": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/587/original/mist.png?1621993747",
        "50n": "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/587/original/mist.png?1621993747"
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