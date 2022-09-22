import React from "react";
import Audio from "./Audio";
import Transcription from "./Transcription";

export default function Phonetics(props) {
  console.log(props.phonetic);
  let audio = props.phonetic.audio;
  let transcription = props.phonetic.text;
  return (
    <div className="Phonetics">
      <Audio audio={audio} />
      <Transcription transcription={transcription} />
    </div>
  );
}
