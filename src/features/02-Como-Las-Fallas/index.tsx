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
        className="flex flex-col items-center w-[631px] cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="relative w-[500px] h-[600px] flex items-center justify-center">
          <img
            src={src}
            alt="Llantita-pixel"
            className="w-full h-full object-contain"
          />

          <div className="absolute text-center max-w-[160px] leading-snug text-[#131A31] text-sm font-medium">
            {showAnswer ? answer : question}
          </div>

          <div
            className="absolute bottom-9 left-1/2 -translate-x-1/2 translate-y-[50%] 
                          bg-[#E91E63] px-4 py-1 flex items-center justify-center 
                          text-white font-bold italic text-[12px] rounded-md shadow-md"
          >
            Cantidad fallida | {count}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto container w-full min-h-screen h-full my-32">
      <div className="flex flex-col items-center text-center h-full px-4">
        <h1 className="text-5xl mb-8 font-bold font-bitcount text-[#131A31]">
          ¿Cómo las fallas en el examen de manejo incrementan las papeletas y
          accidentes de tránsito en el Perú?
        </h1>

        <p className="w-full md:max-w-2/3 font-medium text-xl mb-12">
          Descubre la conexión crítica entre las 5 preguntas más desafiantes del
          examen de conducción de los últimos 4 años y las papeletas más
          frecuentes en todo el país en el mismo periodo.
        </p>

        <div className="flex gap-[75px]">
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

        <p className="text-xl font-medium italic mt-20">
          Haz clic en cada elemento circular para saber cuántas papeletas se
          colocan a nivel nacional
        </p>
      </div>
    </div>
  );
};
