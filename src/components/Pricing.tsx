import React, { useState, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/Fonts/fonts.css";
import "../assets/Styles/Pricing.css";

interface PricingProps {
  styles?: { [key: string]: CSSProperties };
}

const Pricing: React.FC<PricingProps> = ({ styles }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const pricingDetails = [
    {
      id: 1,
      title: "Custom Cabinetry",
      description:
        "Cabinets are the focal point of your kitchen and play a crucial role in functionality and style. Choose from sleek modern designs to classic wood finishes, all crafted to suit your vision.",
      image: require("../assets/images/service1.jpeg"),
    },
    {
      id: 2,
      title: "Countertops and Backsplash",
      description:
        "From quartz to granite and budget-friendly laminates, select materials that balance beauty, durability, and budget to enhance your kitchen's aesthetics.",
      image: require("../assets/images/service2.jpeg"),
    },
    {
      id: 3,
      title: "Appliances and Fixtures",
      description:
        "Upgrade to the latest in kitchen technology with high-efficiency appliances and stylish fixtures that suit your style and budget.",
      image: require("../assets/images/service3.jpeg"),
    },
    {
      id: 4,
      title: "Flooring",
      description:
        "Choose the perfect flooring to tie your kitchen together, from classic hardwoods to modern tiles and luxury vinyl, each offering different benefits and price points.",
      image: require("../assets/images/service4.jpeg"),
    },
    {
      id: 5,
      title: "Lighting",
      description:
        "Set the mood and functionality of your kitchen with lighting options ranging from under-cabinet lights to statement pendant lights.",
      image: require("../assets/images/service5.jpeg"),
    },
    {
      id: 6,
      title: "Layout Changes and Custom Features",
      description:
        "Expand or reconfigure your kitchen space with layout changes or add custom features like built-in wine racks and custom islands to personalize your kitchen.",
      image: require("../assets/images/service6.jpeg"),
    },
  ];

  const selectedItem = pricingDetails.find((item) => item.id === selectedId);

  return (
    <section className="pricing-container">
      <div style={styles?.introduction} className="introduction">
        <h1 style={styles?.introductionh1}>
          What Goes Into Your Kitchen Remodel
        </h1>
        <p style={styles?.introductionP}>
          At Malave Designs, every kitchen remodel is a unique investment.
          Explore the key elements that influence the cost of your dream
          kitchen.
        </p>
      </div>
      <div className="pricing-grid">
        {pricingDetails.map((item) => (
          <motion.div
          layoutId={`card-${item.id}`}
            key={item.id}
            className="pricing-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedId(item.id)}
          >
            <img src={item.image} alt={item.title} className="pricing-image" />
            <div className="pricing-content">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
  {selectedId && (
    <motion.div
      layoutId={`card-${selectedId}`}
      className="pricing-card-expanded"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }} // Smooth shrinking effect
      transition={{
        layout: { type: "spring", stiffness: 400, damping: 20 },
        opacity: { duration: 0.3 }, // Smoother opacity change
        scale: { duration: 0.3 }, // Smoother scaling animation
      }}
      style={{ zIndex: 2 }}
    >
      <div
        className={`pricing-content-expanded ${
          selectedItem?.id === 4 || selectedItem?.id === 5
            ? "selectedCard"
            : ""
        }`}
      >
        <img src={selectedItem?.image} alt="Selected Image" />
        <h3>{selectedItem?.title}</h3>
        <p>{selectedItem?.description}</p>
        <motion.button
          onClick={() => setSelectedId(null)}
          className="mb-2 btn btn-lg rounded-3 btn-primary fw-bold close-button"
          transition={{
            layout: { type: "spring", stiffness: 400, damping: 20 }, // Fast button transition
            scale: { duration: 0.2 }, // Fast button scaling
          }}
          whileHover={{ scale: 1.1 }} // Slight hover effect
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
    
  );
};

export default Pricing;
