import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Aos from "aos";
import MSIB6 from "../assets/maribelajar.png";
import harapan1 from "../assets/harapan1.png";
import MSIB5 from "../assets/msib5.png";
import PKM from "../assets/PKM.jpg";

const slides = [
  {
    image: MSIB5,
    title: "MSIB 5 Ui/Ux dan Web Development",
    description: "Berhasil Menyelesaikan Collab dengan Tim Mobile",
  },
  {
    image: MSIB6,
    title: "MSIB 6 Microsoft Web dan Mobile",
    description: "Berhasil menyelesaikan Capstone Project ",
  },
  {
    image: PKM,
    title: "PKM-PM",
    description: "Berhasil Masuk tahap pendanaan pada PKM tahun 2024.",
  },
  {
    image: harapan1,
    title: "Juara Harapan 1",
    description:
      "Berhasil menjadi juara Harapan 1 pada lomba MSIB 6 yang diadakan oleh MariBelajar.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getPositionClass = (index) => {
    const diff = (index - current + slides.length) % slides.length;

    if (diff === 0) {
      // Slide tengah (aktif)
      return "translate-x-0 scale-100 opacity-100 z-30";
    } else if (diff === 1 || diff === slides.length - 1) {
      // Slide kiri dan kanan
      const isLeft = diff === slides.length - 1;
      return `${
        isLeft
          ? "-translate-x-[70%] md:-translate-x-[80%]"
          : "translate-x-[70%] md:translate-x-[80%]"
      } scale-75 md:scale-85 opacity-40 z-10`;
    } else {
      // Slide yang tidak terlihat
      return "translate-x-0 scale-50 opacity-0 z-0";
    }
  };

  return (
    <div className="w-full min-h-screen  flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-6xl"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1 className="text-center font-freckle mb-10 text-4xl text-biruPastel">
          Collections
        </h1>
        {/* Slides Container */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden px-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-[280px] md:w-[450px] lg:w-[550px] transition-all duration-500 ease-out ${getPositionClass(
                index
              )}`}
            >
              <div className="relative  rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 rounded-2xl md:h-80 md:rounded-lg object-cover shadow-md"
                />
                {index === current && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-4 md:p-6">
                    <h2 className="text-xl md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base opacity-90">
                      {slide.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
          aria-label="Slide berikutnya"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center  mt-10 gap-0.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-hijauPastel"
                  : "w-2 bg-white hover:bg-hijauPastel"
              }`}
              aria-label={`Ke slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
