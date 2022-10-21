import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button className="button" onClick={() => props.onClick}>
      {props.title || "Submit"}
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
