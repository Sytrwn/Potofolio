import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <div id="home" className="py-10">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about" className="py-20">
        <About />
      </div>

      {/* Collections Section */}
      <div
        id="collections"
        className="min-h-screen px-28 flex items-center justify-center"
      >
        <Carousel />
      </div>

      {/* Contact Section */}
      <div id="contact" className="px-28 py-20">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
