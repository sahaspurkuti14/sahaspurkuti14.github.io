import React from "react";
import Button from "../../../ui/Button";
import "./about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="intro">
        <h2>Hi! I am</h2>
        <h1>Sahas Purkuti</h1>
        <p>
          A <span className="text-pprimary">Software Enginner </span>with more
          than 2 years of experience in{" "}
          <span className="text-pprimary">Frontend Development</span> and
          passionate about creating visually appealing and user-friendly
          websites. Proficiency in {" "}
          <span className="text-pprimary">JavaScript, React, Next and React Native </span>
          and other modern frontend frameworks and libraries, responsive design,
          and cross-browser compatibility.
        </p>
        <a href="#contact">
          <Button className="mt-20" title="Hire Me" />
        </a>
      </div>
      <div className="image-container">
        <div className="img-box">
          <img
            className="brand-img"
            loading="lazy"
            src="/img/sahas.jpeg"
            alt="sahas"
          />
        </div>
      </div>
    </div>
  );
}
