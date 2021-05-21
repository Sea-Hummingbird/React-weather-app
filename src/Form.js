import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="row search">
        <div className="col-11">
          <form>
              <input
                type="text"
                className="change-city"
                placeholder="Another City?"
              />
              <button type="submit">
                🔍
              </button>
          </form>
        </div>
        <div className="col-1">
          <form>
            <button type="submit">
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
