import React from "react";
import "../assets/Fonts/fonts.css";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section py-5 bg-light">
      <div
        className="container"
        style={{
          fontFamily: "FontOne, sans-serif",
          fontWeight: "normal",
          fontSize: "27px",
        }}
      >
        <h2 className="text-center mb-5" style={{textDecorationLine: 'underline'}}>Our Services</h2>
        <div className="row">
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Design Consultation</h3>
            <p>Work with our expert designers to create your dream kitchen.</p>
          </div>
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Custom Cabinetry</h3>
            <p>High-quality, custom-built cabinets tailored to your space.</p>
          </div>
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Complete Remodel</h3>
            <p>
              End-to-end kitchen remodeling services to transform your space.
            </p>
          </div>
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Kitchen Design Software</h3>
            <p>
              Use our cutting-edge software to design your kitchen from the
              comfort of your home. Visualize your space and make decisions with
              ease.
            </p>
          </div>
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Painless Remodel Process</h3>
            <p>
              We make the remodeling process as painless as possible by working
              efficiently to complete your project on time, without compromising
              quality.
            </p>
          </div>
          <div className="col-md-4" style={{ paddingTop: "50px" }}>
            <h3>Kitchen Flooring</h3>
            <p>
              Looking for a complete kitchen transformation? We offer kitchen
              flooring services that perfectly complement your new space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
