import React from "react";
import Photos from "./Photos";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Phonetics.css";

export default function Results(props) {
  console.log(props.results);
  let photos = props.photos;
  console.log(photos);
  if (props.results) {
    return (
      <div className="results">
        <div className="section Phonetics">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function(phonetic, index) {
            return (
              <div key={index} className="ms-3 mt-4">
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        <div>
          <Photos photos={photos} />
        </div>

        {props.results.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
