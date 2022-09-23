import React from "react";
import "./Audio.css";

export default function Transcription(props) {
  console.log(props.transcription);
  if (props.transcription) {
    return <p className="Transcription">{props.transcription}</p>;
  } else {
    return null;
  }
}
