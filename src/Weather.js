import React from "react";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Form from "./Form";
import Footer from "./Footer";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div>
          <Temperature defaultCity="Berlin"/>
          <Forecast />
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
