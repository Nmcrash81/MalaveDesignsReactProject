import React from "react";
import "../assets/Fonts/fonts.css";
import "../assets/Styles/NavBarz.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface SignInProps {
  onOpen: () => void;
}

const NavBar: React.FC<SignInProps> = ({ onOpen }) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Malave Designs
        </Link>
        <div className="navbar-divider"></div>

        {/* Collapsible nav for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

         {/* Links */}
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
              <Link className="nav-link" to="/Pricing">
                Pricing
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
              <Link className="nav-link" to="/Build-Your-Kitchen">
                Build Your Kitchen
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                About
              </Link>
            </motion.li>
          </ul>
        </div>

        {/* Right-side buttons */}
        <div className="d-flex align-items-center">
          <button onClick={onOpen} className="btn btn-outline-primary mx-2">
            Sign In
          </button>
          <a href="tel:8133163208" className="btn btn-outline-secondary mx-2">
            Call <span>(813)-316-3208</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
