import React from "react";
import Header from "./Header";
import City from "./City";
import Temperature from "./Temperature";
import Information from "./Information";
import Form from "./Form";
import Footer from "./Footer";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <Header />
        <div className="box">
          <City />
          <Temperature />
          <Information />
          <hr />
          <p className="forecast">
            Weekly Forecast <br /> COMING SOON! 🙊
          </p>
        </div>
        <Form />
        <Footer />
      </div>
    </div>
  );
}
