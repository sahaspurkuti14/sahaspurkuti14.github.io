import React from "react";
import { Spinner } from "react-bootstrap";
import "./button.css";

export default function Button(props) {
  return (
    <div>
      {!props.isSubmitting ? (
        <button className={`${props.className} button`} onClick={() => props.onClick}>
          {props.title || "Submit"}
          <span></span>
          <span></span>
          <span></span>
        </button>
      ) : (
        <button className={`${props.className} disabled-button d-flex align-items-center justify-content-center gap-2`}>
          <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          {props.title || "Submit"}
        </button>
      )}
    </div>
  );
}
