import React, { useState, useEffect } from "react";
import alfinImage from "../assets/fotoporto2.png";

function Hero() {
  const [text, setText] = useState("");
  const phrases = ["Alfin Syatriawan", "Junior Front-end"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      if (!isDeleting) {
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText((prev) => currentPhrase.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, speed]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              {/* Typing Animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-freckle tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-hijauPastel  to-merahPastel bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="inline-block w-1 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-b from-hijauPastel to-merahPastel animate-pulse ml-1"></span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-xl md:text-2xl bg-gradient-to-r from-merahPastel to-hijauPastel bg-clip-text text-transparent font-freckle">
                Mahasiswa Teknik Informatika
              </p>

              {/* Decorative Line */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                <div className="h-1 w-12 bg-gradient-to-r from-biruPastel to-merahPastel rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r  from-biruPastel to-merahPastel rounded-full"></div>
                <div className="h-1 w-4 bg-gradient-to-r  from-biruPastel to-merahPastel rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center  justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative">
                <div className="w-56 h-56 sm:w-64  sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <img
                    className="w-full h-full object-cover"
                    src={alfinImage}
                    alt="Alfin Syatriawan"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-blue-100 transform transition-all duration-500 group-hover:scale-110">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Hero;
