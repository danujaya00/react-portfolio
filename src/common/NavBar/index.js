import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bulma/css/bulma.min.css";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand ml-4">
        <a className="navbar-item" href="./index.html">
          {/* <img
            src="../../../public/navbar/logo.png"
            width="100%"
            height="100%"
          /> */}
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu pl-1">
        <div
          className="navbar-start"
          style={{ backgroundColor: "#363636", border: "none" }}
        >
          <a className="navbar-item navtext" href="/index.html">
            Home
          </a>
          <a className="navbar-item navtext" href="/about.html">
            About me
          </a>
          <a className="navbar-item navtext" href="/contact.html">
            Contact me
          </a>
          <a className="navbar-item navtext" href="/gallery.html">
            Gallery
          </a>
          <a className="navbar-item navtext">
            Download CV<FontAwesomeIcon icon="fa-regular fa-arrow-down-to-line" />
            
          </a>
        </div>
      </div>
    </nav>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;

export default NavBar;
