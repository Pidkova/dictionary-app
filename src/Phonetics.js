import React from "react";
import Audio from "./Audio";
import Transcription from "./Transcription";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  let audio = props.phonetic.audio;
  let transcription = props.phonetic.text;
  return (
    <div className="Phonetics row">
      <div className="col audio">
        <Audio audio={audio} />
      </div>
      <div className="col transcription align-content-start">
        <Transcription transcription={transcription} />
      </div>
    </div>
  );
}
