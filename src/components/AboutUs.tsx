import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../assets/Fonts/fonts.css';
import '../assets/Styles/AboutUs.css';
import AboutUs1 from '../assets/images/AboutUs1.webp';
import AboutUs2 from '../assets/images/AboutUs2.webp';
import AboutUs3 from '../assets/images/AboutUs3.jpg';
import AboutUs4 from '../assets/images/AboutUs4.webp';
import AboutUs5 from '../assets/images/AboutUs5.jpg';
import AboutUs6 from '../assets/images/AboutUs6.jpg';
import { Link } from "react-router-dom";


// Define the props type including onClose function
interface AboutUsProps {
  onClose: () => void;
}

const AboutUs: React.FC = () => {   {/* <AboutUsProps> = ({ onClose }) => { */}
  return (
    <CSSTransition in={true} timeout={500} classNames="AboutUs-modal" appear unmountOnExit>
      <div className="AboutUs-modal show">
        {/* <button
          className="AboutUsButton"
         onClick={onClose}  Use the onClose prop to close the modal
          style={{
            position: "absolute",
            top: '10px',
            right: '10px',
            height: '30px',
            width: '60px',
            fontFamily: 'FontOne, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            border: 'none',
            backgroundColor: 'white',
            zIndex: 1001,
          }}
        >
          Close
        </button> */}
        <div className="introduction">
          <h1>About Us</h1>
          <p>
            At Malave Designs, we are dedicated to transforming your vision into
            reality, creating the kitchen of your dreams with exceptional
            craftsmanship and attention to detail. Our commitment to quality
            means sourcing the finest materials that suit your budget, ensuring
            a premium feel in every kitchen we craft. We pride ourselves on
            timely and efficient service, making the remodeling process as
            convenient as possible for you. Leveraging the latest in modern
            technology, we bring innovative solutions to your kitchen space,
            keeping it stylish and up-to-date. Whether you desire a rustic
            charm, a sleek modern look, or a unique foreign-inspired design, our
            team has the expertise to deliver a wide array of styles that
            reflect your personal taste. Your perfect kitchen starts here!
          </p>
        </div>
        <div className="infoCards">
          <div className="card" id="materialSection">
            <img src={AboutUs1} alt="Premium Materials" />
            <div className="card-content">
              <h3>Premium Materials for Lasting Beauty</h3>
              <p>
                We source only the finest materials, ensuring your kitchen not
                only looks luxurious but withstands the test of time. Explore a
                variety of textures and finishes to perfectly match your style.
              </p>
            </div>
          </div>
          <div className="card" id="customization">
            <img src={AboutUs2} alt="Customization" />
            <div className="card-content">
              <h3>Tailored to Your Taste</h3>
              <p>
                Every kitchen we design is as unique as our clients. Customize
                every aspect, from cabinet colors to drawer handles, to create a
                space that's uniquely yours.
              </p>
            </div>
          </div>
          <div className="card" id="functionalDesign">
            <img src={AboutUs3} alt="Functional Design" />
            <div className="card-content">
              <h3>Smart Spaces, Smarter Design</h3>
              <p>
                We think about the small things – from the placement of
                appliances to maximize workflow, to adjustable lighting for
                every mood. Experience the blend of aesthetics and
                functionality.
              </p>
            </div>
          </div>
          <div className="card" id="sustainability">
            <img src={AboutUs4} alt="Sustainability" />
            <div className="card-content">
              <h3>Eco-Friendly Choices</h3>
              <p>
                Building a sustainable kitchen is more than a trend. Choose from
                eco-friendly materials and energy-efficient appliances to reduce
                your environmental footprint while keeping style and efficiency
                intact.
              </p>
            </div>
          </div>
          <div className="card" id="technologyIntegration">
            <img src={AboutUs5} alt="Technology Integration" />
            <div className="card-content">
              <h3>High-Tech Kitchens</h3>
              <p>
                Embrace the future with integrated smart home technology.
                Control lights, appliances, and even your music with the touch
                of a button or a simple voice command.
              </p>
            </div>
          </div>
          <div className="card" id="attentionToDetail">
            <img src={AboutUs6} alt="Attention to Detail" />
            <div className="card-content">
              <h3>The Art of Precision</h3>
              <p>
                Every inch is planned meticulously—from seamless joints to
                perfect symmetry, our obsession with details ensures a flawless
                finish.
              </p>
            </div>
          </div>
        </div>

      <div className="introduction">
        <p>If you want to learn more please look at our Gallery!</p>
        <Link className="btn btn-primary openGallery" to="/Gallery">
                Open Gallery
              </Link>
          </div>

      </div>
    </CSSTransition>
  );
};

export default AboutUs;
