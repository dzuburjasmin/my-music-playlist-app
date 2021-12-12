import React from "react";
import "bootstrap/js/src/collapse.js";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          MyMusic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          expand
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#one" className="nav-link">
                Song library
              </a>
            </li>
            <li className="nav-item">
              <a href="#two" className="nav-link">
                Favourites
              </a>
            </li>
            <li className="nav-item">
              <a href="#three" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
