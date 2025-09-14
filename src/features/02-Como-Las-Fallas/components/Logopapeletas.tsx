import { useState } from "react";
import type { WheelProps } from "../utils/wheel";
import grafico_fallas from "@/assets/grafico_fallas.png";
import ansgrafico_fallas from "@/assets/ans_grafico_falla.png";

export const Wheel = ({ question, title, answer, count }: WheelProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => setShowAnswer((prev) => !prev);

  return (
    <div
      className="flex flex-col items-center w-full max-w-[90%] sm:max-w-[380px] md:max-w-[450px] cursor-pointer"
      onClick={handleClick}
      role="button"
      aria-pressed={showAnswer}
    >
      <div
        className="
          relative flex items-center justify-center 
          size-[250px]
          sm:size-[320px]
          md:size-[380px]
          lg:size-[420px]
          xl:size-[480px] 
        select-none"
      >
        <img
          src={grafico_fallas}
          alt="Llantita-pixel"
          className="w-full h-full object-contain"
        />

        {showAnswer && (
          <img
            src={ansgrafico_fallas}
            alt="Llantita-respuesta"
            className="absolute w-full h-full object-contain"
          />
        )}

        <div
          className="
            absolute text-center leading-snug text-[#131A31] text-xs sm:text-sm md:text-base font-medium 
            max-w-[120px] sm:max-w-[140px] md:max-w-[160px]
          "
        >
          {showAnswer ? (
            <div>
              <h2 className="font-bold text-[#FFAF42] text-4xl sm:text-5xl">
                {title}
              </h2>
              <div className="w-full h-[1px] bg-[#FFAF42] my-2"></div>
              <p className="mt-2 text-white text-xs sm:text-sm md:text-base">
                {answer}
              </p>
            </div>
          ) : (
            <p className="mt-2 text-[11px] sm:text-base md:text-lg">
              "{question}"
            </p>
          )}
        </div>

        <div
          className="absolute bottom-1 sm:bottom-2 md:bottom-3 
                     left-1/2 -translate-x-1/2
                     bg-[#E91E63]/90 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1
                     flex items-center justify-center 
                     text-white font-bold italic 
                     text-[12px] md:text-[16px]
                     rounded-md shadow-md whitespace-nowrap"
        >
          Cantidad fallida | {count}
        </div>
      </div>
    </div>
  );
};
