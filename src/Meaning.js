import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  let synonyms = props.meaning.synonyms;

  return (
    <div className="section Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>
            <div className="example">
              <Example example={definition.example} />
            </div>
            <hr className="border border-secondary" />
          </div>
        );
      })}
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
