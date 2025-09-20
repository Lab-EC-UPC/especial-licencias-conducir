import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Wheel } from "./components/Logopapeletas";
import items from "./utils/wheel";
import {IoIosInformationCircle} from "react-icons/io";

export const ComoLasFallas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 2;
      setItemsPerPage(newItemsPerPage);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
  };

  return (
    <div className="mx-auto container w-full h-full px-4 mt-[86px] mb-[50px]">
      <div className="flex flex-col items-center text-center h-full">
        <h1 className="text-3xl xl:text-5xl mb-6 md:mb-8 font-semibold font-bitcount">
          Fallas en el examen de manejo, papeletas y accidentes de tránsito
        </h1>

        <p className="w-full md:max-w-2/3 font-medium text-base sm:text-lg md:text-xl">
          Descubre la correlación entre algunas fallas del examen teórico de conducir con las
          papeletas e infracciones más frecuentes en todo el país durante el mismo periodo.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 w-full md:max-w-2/3 italic text-primary mt-4 mb-8 md:mb-12">
          <IoIosInformationCircle size={16} />
          <p className="font-medium text-xs md:text-base">
            Haz clic en cada elemento circular para saber cuántas infracciones se
            han cometido a nivel nacional
          </p>
        </div>

        <div className="relative w-full max-w-6xl">
          {/* Btn izquierda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Btn derecha */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/*swipe */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 ${
                    itemsPerPage === 1 ? "w-full" : "w-1/2"
                  } px-2 sm:px-4 flex justify-center`}
                >
                  <Wheel {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.ceil(items.length / itemsPerPage),
          }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                Math.floor(currentIndex / itemsPerPage) === i
                  ? "bg-[#ED548C]"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i * itemsPerPage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
