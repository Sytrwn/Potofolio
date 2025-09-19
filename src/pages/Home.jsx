import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import About from "../components/About";

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
      <div>
        {" "}
        <Hero />
      </div>
      <br />
      <br />

      <div>
        {" "}
        <About />{" "}
      </div>
    </div>
  );
}

export default Home;
