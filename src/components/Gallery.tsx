import React from 'react';
import "../assets/Fonts/fonts.css";
import "../assets/Styles/Gallery.css";
import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';
import service3 from '../assets/images/service3.jpeg';
import service4 from '../assets/images/service4.jpeg';
import service5 from '../assets/images/service5.jpeg';
import service6 from '../assets/images/service6.jpeg';

const galleryItems = [
  {
    image: service1,
    title: "Modern Kitchen Transformation",
    description: "This kitchen was transformed from a cramped, outdated space to a sleek, modern masterpiece with custom cabinetry, new appliances, and a spacious island.",
  },
  {
    image: service2,
    title: "Rustic Kitchen Revival",
    description: "We revived this rustic kitchen by enhancing its natural wood elements and adding state-of-the-art appliances, balancing charm with functionality.",
  },
  {
    image: service3,
    title: "Open Concept Elegance",
    description: "An old, closed-off kitchen was opened up to create an elegant, airy space with a beautiful marble island and high-end finishes.",
  },
  {
    image: service4,
    title: "Contemporary Kitchen Upgrade",
    description: "A complete upgrade with sleek cabinetry, minimalist lighting, and a fresh, neutral color palette brought this kitchen into the 21st century.",
  },
  {
    image: service5,
    title: "Classic to Chic Transformation",
    description: "From classic to chic, this kitchen features elegant white cabinetry, modern hardware, and a stunning backsplash that ties it all together.",
  },
  {
    image: service6,
    title: "Farmhouse Modern Mix",
    description: "This transformation blends farmhouse charm with modern convenience, featuring rustic beams, a farmhouse sink, and cutting-edge appliances.",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <div className="introduction">
        <h1>Our Kitchen Transformations</h1>
        <p>
          At Malave Designs, we take pride in turning outdated spaces into stunning kitchens that reflect your style and needs. Explore some of our favorite transformations below.
        </p>
      </div>
      <div className="gallery-items">
        {galleryItems.map((item, index) => (
          <div key={index} className={`gallery-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
