import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="starter">
        <h1 className="mt-5">
          dictionary...
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </h1>
      </div>
      <Dictionary defaultKeyword="wine" />
      <div>
        <p className="footer">
          <a href="https://github.com/Pidkova/dictionary-app">Coded with ♥</a>{" "}
          by Tania Pidkova
        </p>
      </div>
    </div>
  );
}

export default App;
