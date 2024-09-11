import React from 'react';
import "../assets/Fonts/fonts.css";
import "../assets/Styles/Pricing.css";

const Pricing: React.FC = () => {
  const pricingDetails = [
    {
      title: "Custom Cabinetry",
      description: "Cabinets are the focal point of your kitchen and play a crucial role in functionality and style. Choose from sleek modern designs to classic wood finishes, all crafted to suit your vision.",
      image: require('../assets/images/service1.jpeg'),
    },
    {
      title: "Countertops and Backsplash",
      description: "From quartz to granite and budget-friendly laminates, select materials that balance beauty, durability, and budget to enhance your kitchen's aesthetics.",
      image: require('../assets/images/service2.jpeg'),
    },
    {
      title: "Appliances and Fixtures",
      description: "Upgrade to the latest in kitchen technology with high-efficiency appliances and stylish fixtures that suit your style and budget.",
      image: require('../assets/images/service3.jpeg'),
    },
    {
      title: "Flooring",
      description: "Choose the perfect flooring to tie your kitchen together, from classic hardwoods to modern tiles and luxury vinyl, each offering different benefits and price points.",
      image: require('../assets/images/service4.jpeg'),
    },
    {
      title: "Lighting",
      description: "Set the mood and functionality of your kitchen with lighting options ranging from under-cabinet lights to statement pendant lights.",
      image: require('../assets/images/service5.jpeg'),
    },
    {
      title: "Layout Changes and Custom Features",
      description: "Expand or reconfigure your kitchen space with layout changes or add custom features like built-in wine racks and custom islands to personalize your kitchen.",
      image: require('../assets/images/service6.jpeg'),
    },
  ];

  return (
    <div className="pricing-container">
      <div className="introduction">
        <h1>What Goes Into Your Kitchen Remodel</h1>
        <p>
          At Malave Designs, every kitchen remodel is a unique investment. Explore the key elements that influence the cost of your dream kitchen.
        </p>
      </div>
      <div className="pricing-grid">
        {pricingDetails.map((item, index) => (
          <div className="pricing-card" key={index}>
            <img src={item.image} alt={item.title} className="pricing-image" />
            <div className="pricing-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
