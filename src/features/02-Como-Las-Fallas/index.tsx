import { useState } from "react";
import grafico_fallas from "@/assets/grafico_fallas.png";

export const ComoLasFallas = () => {
  type WheelProps = {
    src: string;
    question: string;
    answer: string;
    count: string;
  };

  const Wheel = ({ src, question, answer, count }: WheelProps) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
      <div
        className="flex flex-col items-center w-full max-w-[631px] cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div
          className="
            relative flex items-center justify-center 
            w-[300px] h-[360px]
            sm:w-[380px] sm:h-[460px]
            md:w-[450px] md:h-[540px]
            lg:w-[500px] lg:h-[600px]
          "
        >
          <img
            src={src}
            alt="Llantita-pixel"
            className="w-full h-full object-contain"
          />

          <div
            className="
              absolute text-center leading-snug text-[#131A31] text-xs sm:text-sm md:text-base font-medium 
              max-w-[120px] sm:max-w-[140px] md:max-w-[160px]
            "
          >
            {showAnswer ? answer : question}
          </div>

          <div
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 translate-y-[50%] 
                        bg-[#E91E63] px-2 sm:px-3 md:px-4 py-1 flex items-center justify-center 
                        text-white font-bold italic text-[10px] sm:text-[11px] md:text-[12px] rounded-md shadow-md"
          >
            Cantidad fallida | {count}
          </div>
        </div>
      </div>
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

        <div className="flex flex-col md:flex-row gap-10 md:gap-[75px] items-center">
          <Wheel
            src={grafico_fallas}
            question="Al cambiar de dirección, un conductor debe:"
            answer="Muchos no usan la luz direccional, lo que genera sanciones."
            count="39,875"
          />
          <Wheel
            src={grafico_fallas}
            question="El servicio de transporte terrestre, por el elemento transportado, se clasifica en:"
            answer="El error común es confundir carga con pasajeros, generando papeletas."
            count="238,867"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl font-medium italic mt-10 md:mt-20">
          Haz clic en cada elemento circular para saber cuántas papeletas se
          colocan a nivel nacional
        </p>
      </div>
    </div>
  );
};
