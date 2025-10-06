import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <div id="home" className="lg:py-10">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about" className=" -mt-16 md:-mt-16 lg:-py-20 lg:-mt-24">
        <About />
      </div>

      {/* Collections Section */}
      <div
        id="collections"
        className="min-h-screen lg:mt-6 md:-mt-64 flex items-center justify-center"
      >
        <Carousel />
      </div>

      {/* Contact Section */}
      <div id="contact" className="lg:-mt-8 -mt-20">
        <Contact />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
