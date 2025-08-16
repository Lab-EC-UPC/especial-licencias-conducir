import hero from "@/assets/hero.png";
import {useState} from "react";
import {TriviaQuizModal} from "@/features/01-Header/components/TriviaQuizModal.tsx";

const CONFIG = {
  heroImage: hero,
  heroContainerWidth: "w-full",
  heroContainerMaxWidth: "w-full",

  overlayWidth: "60%",
  overlayHeight: "54%",
  overlayLeft: "20%",
  overlayTop: "9%",
  overlayAspectRatio: "483 / 230",
  overlayPadding: "p-2 sm:p-4",
  overlayRounded: "rounded-sm",

  gameContainerWidth: "w-full",
  gameContainerMaxWidth: "max-w-[924px]",
  gameContainerHeight: "min-h-[600px]",
};


export const Header = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      <div className={`relative ${CONFIG.heroContainerWidth} ${CONFIG.heroContainerMaxWidth} mx-auto`}>
        <img
          src={CONFIG.heroImage}
          alt="Hero"
          className="w-full h-auto block"
        />
        <div
          className={`flex flex-col ${CONFIG.overlayRounded} absolute bg-[#131a31]`}
          style={{
            top: CONFIG.overlayTop,
            left: CONFIG.overlayLeft,
            width: CONFIG.overlayWidth,
            height: CONFIG.overlayHeight === "auto" ? undefined : CONFIG.overlayHeight,
            aspectRatio: CONFIG.overlayHeight === "auto" ? CONFIG.overlayAspectRatio : undefined,
            color: "#dbeecb",
            padding: "clamp(0.25rem, 1.5vw, 1rem)",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col justify-center gap-12 h-full p-2 md:p-4 xl:p-8">
            <div className="text-center">
              <h2 className="font-bold leading-none font-bitcount text-[#58b7cf] text-lg md:text-3xl xl:text-5xl mb-4">
                🚗 Trivia de Conducir
              </h2>
              <p className="leading-none text-[#ffaf42] text-md md:text-xl xl:text-2xl font-bold">
                ¿Qué tanto sabes sobre manejo seguro?
              </p>
            </div>
            <div className="rounded border bg-[#58b7cf] border-white p-5">
              <h4 className="font-bold font-bitcount text-[#131a31] text-md md:text-lg xl:text-3xl mb-4">
                📋 Reglas
              </h4>
              <ul className="leading-none list-disc text-[#131a31] pl-8 space-y-2 text-md md:text-lg">
                <li>20 preguntas desafiantes</li>
                <li>20 segundos por pregunta</li>
                <li>Una sola oportunidad</li>
              </ul>
            </div>

            <button
              onClick={()=>setIsGameOpen(true)}
              className="bg-[#ed548c] w-full rounded font-bold transition-all hover:opacity-90 leading-none text-[#131a31] hover:cursor-pointer p-4"
            >
              🚀 Comenzar Trivia
            </button>
          </div>
        </div>
      </div>
      <TriviaQuizModal
        isOpen={isGameOpen}
        setIsOpen={setIsGameOpen}
      />
     </>
  );
};
