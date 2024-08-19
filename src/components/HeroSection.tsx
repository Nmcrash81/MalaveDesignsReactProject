import React from "react";
import "../assets/Fonts/fonts.css";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section text-center text-white"
      style={{ position: "relative", overflow: "hidden", height: "600px" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src={require("../assets/videos/HeroSectionVideo.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className="container"
        style={{
          fontFamily: "FontOne, sans-serif",
          fontWeight: "bold",
          fontSize: "30px",
          position: "relative",
          zIndex: "1",
          marginTop: "10px",
        }}
      >
        <h1>Transform Your Kitchen</h1>
        <p>
          High-quality, personalized kitchen remodels that fit your style and
          budget.
        </p>
        <a
          href="#gallery"
          className="btn btn-primary"
          style={{
            fontWeight: "bold",
            marginTop: "35%",
            padding: "12px 24px",
            fontSize: "20px",
            backgroundColor: "black",
            border: "black",
          }}
        >
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
