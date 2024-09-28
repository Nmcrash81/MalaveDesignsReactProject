/** To navigate through sections I suggest using 
   control F or Command + F and search '/**'. **/

import React from "react";
import { Link } from "react-router-dom";
import "../assets/Fonts/fonts.css";
import image1 from "../assets/images/kitchen1.png";
import image2 from "../assets/images/kitchen2.jpeg";
import image3 from "../assets/images/kitchen3.jpeg";
import image4 from "../assets/images/kitchen4.jpeg";
import image5 from "../assets/images/kitchen5.jpeg";
import image6 from "../assets/images/kitchen6.jpeg";
import "../assets/Styles/HomePage.css";

export const HomePage: React.FC = () => {
  //<{ openGallery: () => void }> = ({ openGallery }) => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <>
      {/** So below is going to be the Hero Section of the homepage consisting
          of a video background displaying a slideshow of kitchen footage. It
          will also have some text on it with a 'View Our Work' button that
          will lead you to the gallery section of the home page. **/}

      <section className="hero-section text-center text-white">
        <video autoPlay loop muted playsInline className="hero-video">
          <source
            src={require("../assets/videos/HeroSectionVideo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Transform Your Kitchen</h1>
          <p>
            High quality, personalized kitchen remodels that fit your style and
            budget.
          </p>
          <a href="#gallery" className="btn btn-primary hero-button">
            View Our Work
          </a>
        </div>
      </section>

      {/** The section below is going to be the Services section which will just 
          be explaining all the different services provided by the company. **/}

      <section id="services" className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 services-title">Our Services</h2>
          <div className="row">
            {[
              {
                title: "Design Consultation",
                description:
                  "Work with our expert designers to create your dream kitchen.",
              },
              {
                title: "Custom Cabinetry",
                description:
                  "High-quality, custom-built cabinets tailored to your space.",
              },
              {
                title: "Complete Remodel",
                description:
                  "End-to-end kitchen remodeling services to transform your space.",
              },
              {
                title: "Kitchen Design Software",
                description:
                  "Thank's to the cutting-edge software from kitchenplanner.net we can help make your kitchen design come to life! From the comfort of your home, visualize your space and make decisions with ease.",
              },
              {
                title: "Painless Remodel Process",
                description:
                  "We make the remodeling process as painless as possible by working efficiently to complete your project on time, without compromising quality.",
              },
              {
                title: "Kitchen Flooring",
                description:
                  "Looking for a complete kitchen transformation? We offer kitchen flooring services that perfectly complement your new space.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="col-md-4"
                style={{ paddingTop: "50px" }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link className="btn btn-primary see-more-button" to="/Gallery">
            Get a Quote!
          </Link>
        </div>
      </section>
      {/** This is going to be my Gallery section which will just be
          displaying a set of images of different kitchens done by the
          company with a 'see more' button that will take you to the 
          gallery page of the website. **/}

      <section id="gallery" className="gallery-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 gallery-title">Our Work</h2>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="img-fluid rounded-sm gallery-image"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link className="btn btn-primary see-more-button" to="/Gallery">
              Open Gallery
            </Link>
          </div>
        </div>
      </section>

      {/** The section below is going to be my Footer section which just 
          a very basic layout displaying different columns of text**/}

      <footer className="bg-light text-center text-lg-start py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Malave Designs</h5>
              <ul className="list-unstyled mb-0">
                {["Home", "About Us", "Services", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a href="#" className="text-dark">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                  (platform, index) => (
                    <li key={index}>
                      <a href="#" className="text-dark">
                        {platform}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <p className="text-dark">
                Email: malavedesigns@gmail.com
                <br />
                <a href="tel:8133163208" className="contact-button">
                  <button className="btn btn-light">
                    Call: <span className="contact-number">(813)-316-3208</span>
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <p>© 2024 Malave Designs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
