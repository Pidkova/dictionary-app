import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  let synonyms = props.meaning.synonyms;

  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <Example example={definition.example} />
              <br />
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
