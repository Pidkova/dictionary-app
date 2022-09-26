import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="listen-link"
      >
        <i className="fa-solid fa-volume-high d-inline me-2"></i> Listen
      </a>
      <span className="transcription">{props.phonetic.text}</span>
    </div>
  );
}
