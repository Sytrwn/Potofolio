import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div data-aos="fade-right" data-aos-delay="200">
        {" "}
        <h1 className="text-hijauPastel font-freckle text-2xl font-pastelFont px-4 py-4">
          Hello world
        </h1>
      </div>
    </div>
  );
}

export default Home;
