import React, { useState, CSSProperties } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBarz";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import SignIn from "./components/SignIn";
import BYK from "./components/BYK";

const App: React.FC = () => {
  const styles: { [key: string]: CSSProperties } = {
    introduction: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "50vh",
      padding: "40px 20px",
      fontFamily: '"FontOne", sans-serif',
      backgroundColor: "#f4f4f9",
      color: "#333",
      borderBottom: "2px solid #ddd",
    },
    introductionh1: { // Fixed typo
      wordSpacing: "1rem",
      fontFamily: "FontTwo, sans-serif",
      fontSize: "3.5rem",
      fontWeight: "600",
      textDecoration: "underline #2c3e50",
      textDecorationThickness: "3px",
      textUnderlineOffset: "6px",
      color: "#2c3e50",
    },
    introductionP: {
      fontSize: "1.3rem",
      maxWidth: "800px", 
      lineHeight:"1.6",
      marginTop: "20px",
      color: "#555", 
    }
  };
  

  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const openSignin = () => setShowModal(true);
  const closeSignin = () => setShowModal(false);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      ease: "linear",
      duration: 0.2,
      x: { duration: 1 },
    },
  };

  return (
    <div className="App">
      <NavBar onOpen={openSignin} />
      <SignIn show={showModal} onClose={closeSignin} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <HomePage />
              </motion.div>
            }
          />
          <Route
          path="/AboutUs"
          element={
            <motion.div style={{ ...styles.introduction }} {...pageTransition}>
              <AboutUs styles={styles} />
            </motion.div>
          }
        />
          <Route
            path="/Services"
            element={
              <motion.div style={{ ...styles.introduction }} {...pageTransition}>
                <Services styles={styles} />
              </motion.div>
            }
          />
          <Route
            path="/Pricing"
            element={
              <motion.div  style={{ ...styles.introduction }} {...pageTransition}>
                <Pricing styles={styles} />
              </motion.div>
            }
          />
          <Route
            path="/Gallery"
            element={
              <motion.div  style={{ ...styles.introduction }} {...pageTransition}>
                <Gallery styles={styles} />
              </motion.div>
            }
          />
          <Route
            path="/Build-Your-Kitchen"
            element={
              <motion.div  style={{ ...styles.introduction }} {...pageTransition}>
                <BYK styles={styles} />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
