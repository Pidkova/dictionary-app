import React from "react";

export default function Examples(props) {
  if (props.example) {
    return <p>"{props.example}"</p>;
  } else {
    return null;
  }
}
