import React, { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
function About() {
  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const containerRef = useRef(null);

  const target = [85, 90, 40, 80]; // value masing-masing skill

  // fungsi animasi
  const animateProgress = () => {
    setProgress([0, 0, 0, 0]); // reset ke 0
    const interval = setInterval(() => {
      setProgress((prev) => {
        let done = true;
        const next = prev.map((val, i) => {
          if (val < target[i]) {
            done = false;
            return val + 0.7; // naik 1 tiap 20ms
          }
          return val;
        });

        if (done) clearInterval(interval); // stop kalau semua selesai
        return next;
      });
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgress(); // jalankan animasi saat masuk viewport
          } else {
            setProgress([0, 0, 0, 0]); // reset ke 0 saat keluar viewport
          }
        });
      },
      { threshold: 0.5 } // 50% elemen terlihat baru jalan
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // cleanup
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-16"
      data-aos="fade-down"
    >
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-freckle font-bold text-gray-600 mb-8 text-center">
          A Little About Me
        </h2>
        <p className="text-gray-600 font-freckle text-lg leading-relaxed">
          Saya adalah seorang lulusan Teknik Informatika yang antusias di bidang
          Front-end Development dan Data Analyst. <br />
          Saya suka menggabungkan kreativitas dengan logika untuk membuat solusi
          digital yang bermanfaat. Saat ini, saya fokus mendalami berbagai
          bidang IT seperti Front-end, Back-end, Data Analyst serta memiliki
          pengalaman membangun proyek berbasis web dan machine learning. <br />{" "}
          Di luar coding, saya senang membaca tentang tren teknologi terbaru dan
          berbagi pengetahuan dengan orang lain.
        </p>
      </div>

      {/* Progress Bars */}
      <div className="flex font-freckle items-center justify-center py-14">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-600 mb-2">
              Front-End
            </span>
            <progress
              className="progress custom-progress progress-success w-72 h-4"
              value={progress[0]}
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-600 mb-2">
              Ui/Ux
            </span>
            <progress
              className="progress custom-progress progress-success w-72 h-4"
              value={progress[1]}
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-600 mb-2">
              Back-End
            </span>
            <progress
              className="progress custom-progress progress-success w-72 h-4"
              value={progress[2]}
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-600 mb-2">
              Data Analyst
            </span>
            <progress
              className="progress custom-progress progress-success w-72 h-4"
              value={progress[3]}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}

//Buat Collections Beberapa penghargaan lomba, dan contacts
export default About;
