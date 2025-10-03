import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Aos from "aos";

const slides = [
  {
    image: "https://picsum.photos/id/1015/800/400",
    title: "Gunung Indah",
    description: "Menikmati suasana pegunungan yang sejuk dan asri.",
  },
  {
    image: "https://picsum.photos/id/1025/800/400",
    title: "Pantai Eksotis",
    description: "Pasir putih dan air laut yang jernih menyegarkan mata.",
  },
  {
    image: "https://picsum.photos/id/1040/800/400",
    title: "Hutan Tropis",
    description: "Keindahan alam tropis dengan pepohonan rindang.",
  },
  {
    image: "https://picsum.photos/id/1060/800/400",
    title: "Danau Tenang",
    description: "Suasana damai dengan air danau yang memantulkan langit.",
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
        {/* Slides Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-[280px] md:w-[450px] lg:w-[550px] transition-all duration-500 ease-out ${getPositionClass(
                index
              )}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-72 md:h-80 object-cover"
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
        <div className="flex justify-center gap-0.5">
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
