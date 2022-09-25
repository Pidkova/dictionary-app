import React from "react";
import "./Audio.css";

export default function Audio(props) {
  if (props.audio) {
    return (
      <a
        href={props.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="listen-link"
      >
        Listen
      </a>
    );
  } else {
    return null;
  }
}
