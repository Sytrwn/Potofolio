import React, { useState, useEffect } from "react";

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
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-freckle tracking-wide text-gray-800 lg:text-4xl">
          {text}
          <span className="animate-blink">|</span>
        </h1>
        <p className="mt-2 text-gray-600 font-freckle">Junior Front-end</p>
      </div>
    </div>
  );
}

export default Hero;
