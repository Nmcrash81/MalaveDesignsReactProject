import React from "react";
import NavBarImage from "../assets/images/NavBarImage.jpeg";
import "../assets/Fonts/fonts.css";
import "../assets/Styles/NavBarz.css";
import { Link } from "react-router-dom";

const NavBar:React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          Malave Designs
        </Link>
        <div className="navbar-divider"></div>
        <div className="d-flex">
          <ul className="navbar-nav me-auto align-items-center">
          <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#build">
                Build Your Kitchen
              </a>
            </li>
            <li>
          <Link className="nav-link" to="/AboutUs">About</Link> {/* onClick={openGallery} */}
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <li className="nav-item" style={{ listStyle: "none" }}>
            <a className="nav-link nav-item-signin" href="#signin">
              Sign In
            </a>
          </li>
          <li className="nav-item" style={{ listStyle: "none" }}>
            <a href="tel:8133163208" style={{ textDecoration: "none" }}>
              <button className="call-button bg-light">
                Call
                <span>(813)-316-3208</span>
              </button>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
