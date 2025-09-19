import React, { useState, useEffect } from "react";
import "../index.css";
import alfinImage from "../assets/fotoporto.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [text, setText] = useState(""); // State for typing animation
  const phrases = ["Alfin Syatriawan", "Junior Front-end"]; // Phrases to animate
  const [index, setIndex] = useState(0); // Current phrase index
  const [isDeleting, setIsDeleting] = useState(false); // Deleting state
  const [speed, setSpeed] = useState(150); // Typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      if (!isDeleting) {
        // Typing logic
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting logic
        setText((prev) => currentPhrase.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [text, isDeleting, index, speed]);

  return (
    <div className="container flex flex-col lg:flex-row items-center px-52 py-10 mx-auto gap-52 lg:space-y-0 lg:space-x-10 lg:py-16">
      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-freckle tracking-wide text-gray-800 lg:text-4xl">
            {text}
            <span className="animate-blink">|</span>
          </h1>
          <p className="mt-2 text-gray-600 font-freckle">
            Mahasiswa Teknik Informatika
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="flex items-center justify-center w-full h-auto lg:w-[370px]  p-4  "
      >
        <img
          className="object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:h-auto transform hover:scale-110 transition duration-500 ease-in-out "
          src={alfinImage}
          alt="Alfin Syatriawan"
        />
      </div>
    </div>
  );
}

export default Hero;
