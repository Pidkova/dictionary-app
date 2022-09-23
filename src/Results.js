import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Audio.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <div className="section Phonetics">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function(phonetic, index) {
            return (
              <div key={index} className="ms-5 mt-4">
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
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
