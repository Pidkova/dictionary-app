import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f9170000100000154c5e095003648a28df337d95da0df5d`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
        <form onSubmit={handleSubmit} className="section Word-search">
          <h1 className="mt-2">What word do you want to look up?</h1>
          <div className="mt-2">
            <input
              type={"text"}
              autoFocus={true}
              onChange={handleKeywordChange}
              className="form-control input-focus-color-dark "
            />
          </div>
        </form>
        <div>
          <Results results={results} />
        </div>
        <div className="Photos">
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
  }
}
