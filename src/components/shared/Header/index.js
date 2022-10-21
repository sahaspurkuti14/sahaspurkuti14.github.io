import React, { useEffect } from "react";

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
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </ul>
    </header>
  );
}

export default Header;
