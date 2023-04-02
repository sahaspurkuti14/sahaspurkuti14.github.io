import React, { useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import "./header.css";

function Header() {
  useEffect(() => {
    document.title = "Sahas Purkuti";
  }, []);

  return (
    <header class="header">
      <img className="logo" src="/logo.png" alt="Sahas" />
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <a href="#about" className="active">
          About
        </a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="/files/cv.pdf" download="CV" target="_blank">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <BsDownload />
            Download CV
          </div>
        </a>
      </ul>
    </header>
  );
}

export default Header;
