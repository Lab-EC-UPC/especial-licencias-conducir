import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Wheel } from "./components/Logopapeletas";
import items from "./utils/wheel";

export const ComoLasFallas = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Detectar el tamaño de pantalla para cambiar la cantidad por página
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? items.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <div className="mx-auto container w-full min-h-screen h-full my-16 sm:my-20 md:my-32 px-4">
      <div className="flex flex-col items-center text-center h-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8 font-bold font-bitcount text-[#131A31]">
          ¿Cómo las fallas en el examen de manejo incrementan las papeletas y
          accidentes de tránsito en el Perú?
        </h1>

        <p className="w-full md:max-w-2/3 font-medium text-base sm:text-lg md:text-xl mb-8 md:mb-12">
          Descubre la conexión crítica entre las 5 preguntas más desafiantes del
          examen de conducción de los últimos 4 años y las papeletas más
          frecuentes en todo el país en el mismo periodo.
        </p>

        <div className="relative group w-full flex justify-center">
          <div
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-white p-2 rounded-full shadow-md cursor-pointer z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </div>

          <div className="flex gap-6 sm:gap-10 md:gap-[75px] lg:gap-[100px] items-center transition-all duration-500">
            {items.slice(index, index + itemsPerPage).map((item, i) => (
              <Wheel key={i} {...item} />
            ))}
          </div>

          <div
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-white p-2 rounded-full shadow-md cursor-pointer z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-medium italic mt-10 md:mt-20">
          Haz clic en cada elemento circular para saber cuántas papeletas se
          colocan a nivel nacional
        </p>
      </div>
    </div>
  );
};
