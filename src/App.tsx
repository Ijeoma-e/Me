import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import Navbar from "./components/Navbar";

import "./assets/css/style.css";
import "./assets/css/slick.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Quotes />
      <About />  
      <Experience />
      <Highlights />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
