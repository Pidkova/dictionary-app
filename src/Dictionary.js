import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    alert(`Wait a moment, please.. We're searching for ${keyword}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"search"}
          autoFocus={true}
          placeholder="Type a word..."
          onChange={handleKeywordChange}
        ></input>
        <input type={"submit"} value="Search"></input>
      </form>
      <Results results={results} />
    </div>
  );
}
