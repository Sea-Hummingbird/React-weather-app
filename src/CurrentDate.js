import React from "react";
import "./App.css";

export default function CurrentDate(props){
    let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Nov",
        "Dec"
    ];
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let hours = props.date.getHours();
    if (hours < 10){
        hours = `0${hours}`
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    return (
        <div>
            {day}, {month} {date}<br />
            {hours}:{minutes} hrs
        </div> 
    );
}