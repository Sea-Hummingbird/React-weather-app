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
          <p className="city">New York</p>
          <Temperature />
          <Forecast />
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
