import React, { useEffect } from "react";
import "./navbar.css";
import Logo from "./../img/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="logo">
        {
          <div>
            <img src={Logo} alt="Logo"></img>
          </div>
        }
      </div>
      <nav className="navigation mobile-nav">
        <ul>
          <div>
            <a href="/" class="link">
              Home
            </a>
            <a href="Services" class="link">
              Services
            </a>
            <a href="ServiceArea" class="link">
              Service Area
            </a>
            <a href="Order" class="link">
              Order Online
            </a>
            <a href="Contact" class="link">
              Contact Us
            </a>

          </div>
        </ul>

        <select class="pageSelectDropdown">
          <option value="" selected="selected">
            Select
          </option>
          <option value="/">Home</option>
          <option value="/Services">Services</option>
          <option value="/ServiceArea">Service Area</option>
          <option value="/Contact">Contact Us</option>
        </select>
      </nav>
    </header>
  );
};
export default Navbar;
