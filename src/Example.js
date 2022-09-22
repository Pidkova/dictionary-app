import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <span>
        <strong>Example:</strong>
        <em>{props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
