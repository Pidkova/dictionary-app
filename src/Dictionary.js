import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary container">
        <form onSubmit={handleSubmit} className="section">
          <h1 className="mt-2">What word do you want to look up?</h1>
          <div className="row mt-2">
            <div className="col-9">
              <input
                type={"text"}
                autoFocus={true}
                onChange={handleKeywordChange}
                className="form-control input-focus-color-dark "
              />
            </div>
            <div className="col-3">
              <input
                type={"submit"}
                value="Search"
                className=" col btn btn-primary"
              />
            </div>
          </div>
        </form>
        <div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
  }
}
