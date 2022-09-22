import React from "react";

export default function Transcription(props) {
  console.log(props.transcription);
  if (props.transcription) {
    return <p>{props.transcription}</p>;
  } else {
    return null;
  }
}
