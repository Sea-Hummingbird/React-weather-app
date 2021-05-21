import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  const apiKey = "8354e81509710f8d9f63ec83df3a59ad";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=boston&appid=${apiKey}&units=metric`
  return (
    <div className="Body">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {" "}
    <App />{" "}
  </StrictMode>,
  rootElement
);
