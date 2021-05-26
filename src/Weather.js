import React from "react";
import Temperature from "./Temperature";
import Footer from "./Footer";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div>
          <Temperature defaultCity="New York"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
