import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  let synonyms = props.meaning.synonyms;

  return (
    <div className="section Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index} className="ms-2 mb-2">
            <p>{definition.definition}</p>
            <div className="example">
              <Example example={definition.example} />
            </div>
            <hr />
          </div>
        );
      })}
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
