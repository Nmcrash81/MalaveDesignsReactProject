import React from "react";
import NavBar from "./components/NavBarz";
import Footer from "./components/Footerz";
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';


const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default App;