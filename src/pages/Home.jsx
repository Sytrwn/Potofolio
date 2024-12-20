import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <Hero />
      </div>
    </div>
  );
}

export default Home;
