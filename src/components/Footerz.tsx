import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start py-4">
      <div className="container">
        {/* Footer Navigation */}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Malave Designs</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p className="text-dark">
              Email: malavedesigns@gmail.com
              <br />
              <a
                className="bg-light"
                href="tel:8133163208"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="bg-light"
                  style={{
                    backgroundColor: "white",
                    border: "white",
                    color: "black",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Call:{" "}
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    (813)-316-3208
                  </span>
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3">
        <p>© 2024 Malave Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
