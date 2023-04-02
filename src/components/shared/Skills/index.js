import React from "react";
import "./skills.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Skills() {
  const data = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "React Native",
    "Redux",
    "Web Socket",
    "Figma",
    "Git",
  ];
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div
        className="skills section d-flex flex-column align-items-center"
        id="skills"
      >
        <h2>Skills</h2>
        <ul className="row d-flex flex-wrap skills-list">
          {data.map((item, i) => (
            <li className="col-6 col-md-4 col-lg-3 mb-2 pr-2">{item}</li>
          ))}
        </ul>
      </div>
    </AnimationOnScroll>
  );
}
