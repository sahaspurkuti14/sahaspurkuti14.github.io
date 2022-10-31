import React from "react";
import Button from "../../../ui/Button";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="intro">
        <h2>Hi! I am</h2>
        <h1>Sahas Purkuti</h1>
        <p>
          A Frontend Web Developer with handful experience in developing and
          maintaining responsive websites. Proficient in HTML, CSS, JavaScript,
          React, Next plus modern libraries and frameworks.
        </p>
        <a href="#contact">
         <Button className="mt-20" title="Hire Me"/> 
        </a>
        
      </div>
      <div className="image-container">
        <img
          src="/img/sahas.jpeg"
          alt="sahas"
        />
      </div>
    </div>
  );
}
