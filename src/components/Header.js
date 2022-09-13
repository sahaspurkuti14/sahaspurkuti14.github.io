import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [iconClick, setIconClick] = useState(false);
  console.log(iconClick);

  const handleIconClick = () => {
    setIconClick(!iconClick);
  };

  return (
    <div className="header">
      <div className={`topnav ${iconClick && "responsive"}`}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon" onClick={handleIconClick}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
}

export default Header;
