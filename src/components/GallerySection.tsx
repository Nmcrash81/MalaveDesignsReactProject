import React from "react";
import "../assets/Fonts/fonts.css";
import image1 from "../assets/images/kitchen1.png";
import image2 from "../assets/images/kitchen2.jpeg";
import image3 from "../assets/images/kitchen3.jpeg";
import image4 from "../assets/images/kitchen4.jpeg";
import image5 from "../assets/images/kitchen5.jpeg";
import image6 from "../assets/images/kitchen6.jpeg";

const GallerySection: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <section id="gallery" className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontFamily: "FontOneBold", textDecorationLine: 'underline' }}>
          Our Work
        </h2>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="img-fluid rounded-sm"
                style={{ width: "400px", height: "300px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href=""
            className="btn btn-primary"
            style={{
              fontFamily: "FontOne",
              fontWeight: "bold",
              fontSize: "20px",
              backgroundColor: "black",
              border: "black",
              color: "white",
              padding: "12px 24px",
            }}
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
