import React from "react";
import "./Audio.css";

export default function Audio(props) {
  if (props.audio) {
    return (
      <div className="d-inline">
        <a
          href={props.audio}
          target="_blank"
          rel="noopener noreferrer"
          className="listen-link"
        >
          <i className="fa-solid fa-volume-high d-inline me-2"></i>Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
