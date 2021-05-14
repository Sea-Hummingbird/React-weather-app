import React from "react";
import "./App.css";

export default function Information() {
  return (
    <div className="Information">
      <div className="info">
        <div className="row">
          <div className="col-6">
            <span>
              Humidity: <span> 72 </span> %<br />
            </span>
          </div>
          <div className="col-6">
            <span>
              Wind: <span> 5 </span> mph
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
