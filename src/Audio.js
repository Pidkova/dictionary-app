import React from "react";

export default function Audio(props) {
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
