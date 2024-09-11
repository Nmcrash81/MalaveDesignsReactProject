import NavBar from "./components/NavBarz";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20, scale: 0.95 }, 
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
  transition: { type: "spring", stiffness: 60}, 
  };
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <motion.div {...pageTransition}> <HomePage /> </motion.div>} />
          <Route path="/AboutUs" element={<motion.div {...pageTransition}> <AboutUs /> </motion.div>} />
          <Route path="/Services" element={<motion.div {...pageTransition}> <Services /> </motion.div>} />
          <Route path="/Pricing" element={<motion.div {...pageTransition}> <Pricing /> </motion.div>}/>
          <Route path="/Gallery" element={<motion.div {...pageTransition}> <Gallery /> </motion.div>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
