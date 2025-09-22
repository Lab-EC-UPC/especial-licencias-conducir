import hero from "@/assets/hero.png";
import heroWebp from "@/assets/hero.webp";
import mobileHeroImage from "@/assets/mobileHeroImage.png";
import mobileHeroImageWebp from "@/assets/mobileHeroImage.webp";
import {useState} from "react";
import {DisclaimerModal} from "@/features/shared/components/DisclaimerModal.tsx";
import {IoIosInformationCircle} from "react-icons/io";
import {DisclaimerInfo} from "@/features/01-Header/components/DisclaimerInfo.tsx";
import Button from "@/features/10-Probabilidad-Aprobar-Examen/components/button.tsx";
import HEADER_TOP from "@/assets/header-top.png";
import HEADER_BOTTOM from "@/assets/header-bottom.png";
import TITLE from "@/assets/header-title.png";

const CONFIG = {
  // Imágenes para diferentes dispositivos
  heroImage: hero,
  heroWebp: heroWebp,
  mobileHeroImage: mobileHeroImage,
  mobileHeroImageWebp: mobileHeroImageWebp,

  heroContainerWidth: "w-full",
  heroContainerMaxWidth: "w-full",

  // Configuración para WEB - Overlay más grande para desktop
  webOverlay: {
    width: "63%",        // Puedes cambiar este valor
    height: "54%",       // Puedes cambiar este valor
    left: "19%",         // Puedes cambiar este valor
    top: "9%",           // Puedes cambiar este valor
    padding: "clamp(0.5rem, 2vw, 2rem)",
  },

  // Configuración para MÓVIL - Overlay más pequeño para móviles
  mobileOverlay: {
    width: "70%",        // Puedes cambiar este valor - más pequeño que web
    height: "66%",      // Altura automática para móviles
    left: "15%",       // Puedes cambiar este valor - centrado
    top: "13%",          // Puedes cambiar este valor - dentro de la pantalla
    padding: "clamp(0.125rem, 1.5vw, 0.75rem)",
  },

  overlayRounded: "rounded-sm",
  gameContainerWidth: "w-full",
  gameContainerMaxWidth: "max-w-[924px]",
  gameContainerHeight: "min-h-[600px]",
};

export const Header = (
  {
    setIsGameOpen,
  }: {
    isGameOpen: boolean;
    setIsGameOpen: (isOpen: boolean) => void;
  }
) => {
  const [disclaimerModal, setDisclaimerModal] = useState<boolean>(false);

  return (
    <>
      <div className={`relative ${CONFIG.heroContainerWidth} ${CONFIG.heroContainerMaxWidth} mx-auto`}>
        {/* Imágenes para WEB (pantallas grandes) con soporte WebP */}
        <picture className="hidden md:block">
          {/*<source srcSet={CONFIG.heroWebp} type="image/webp" />*/}
          <img
            src={CONFIG.heroImage}
            alt="Hero Desktop"
            className="w-full h-full"
          />
        </picture>

        {/* Imágenes para MÓVIL/TABLET con soporte WebP */}
        <picture className="block md:hidden">
          {/*<source srcSet={CONFIG.mobileHeroImageWebp} type="image/webp" />*/}
          <img
            src={CONFIG.mobileHeroImage}
            alt="Hero Mobile"
            className="w-full h-full"
          />
        </picture>

        {/* Overlay para WEB - Tamaño configurable para desktop */}
        <div
          className={`hidden md:flex flex-col ${CONFIG.overlayRounded} absolute bg-gradient-to-b from-[#131A31] to-[#1B2859]`}
          style={{
            top: CONFIG.webOverlay.top,
            left: CONFIG.webOverlay.left,
            width: CONFIG.webOverlay.width,
            height: CONFIG.webOverlay.height,
            color: "#dbeecb",
            // padding: CONFIG.webOverlay.padding,
            overflow: "hidden",
            minHeight: "fit-content",
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <img
              src={HEADER_TOP}
              alt="Header Top"
              className="w-full h-auto"
            />
            <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 p-2 lg:p-4 xl:p-6 2xl:p-8 text-center">
              <div className="flex justify-center">
                <img
                  src={TITLE}
                  alt="Title"
                  className="w-1/2 h-auto animate-[fadeInLeft_1s_ease-out_forwards]"
                />
              </div>
              <div className="flex justify-center w-full">
                <p className="font-bold font-bitcount text-skyblue text-base md:text-lg xl:text-xl 2xl:text-2xl w-full 2xl:max-w-2/3 animate-[fadeInRight_1s_ease-out_forwards]">
                  Cómo el actual examen de manejo en Perú falla en preparar conductores capacitados
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  text="🚀 Comenzar Trivia"
                  onClick={()=>setIsGameOpen(true)}
                  variant="pink"
                />
              </div>
            </div>
            <img
              src={HEADER_BOTTOM}
              alt="Header Bottom"
              className="w-full h-auto"
            />
          </div>

          <button
            onClick={()=>setDisclaimerModal(true)}
            className="absolute bg-purple text-green hover:translate-y-[10%] duration-200 right-6 top-6 w-min mx-auto p-3 rounded-full transition-all hover:opacity-90 hover:cursor-pointer"
          >
            <IoIosInformationCircle size={20} />
          </button>
        </div>

        {/* Overlay para MÓVIL - Tamaño configurable más pequeño */}
        <div
          className={`flex md:hidden flex-col ${CONFIG.overlayRounded} absolute bg-[#162141]`}
          style={{
            top: CONFIG.mobileOverlay.top,
            left: CONFIG.mobileOverlay.left,
            width: CONFIG.mobileOverlay.width,
            height: CONFIG.mobileOverlay.height,
            color: "#dbeecb",
            // padding: CONFIG.mobileOverlay.padding,
            overflow: "hidden",
            minHeight: "fit-content",
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <img
              src={HEADER_TOP}
              alt="Header Top"
              className="w-full h-auto"
            />
            <div className="flex flex-col justify-center gap-2 sm:gap-4 h-full p-1 sm:p-2 text-center">
              <div className="flex justify-center">
                <img
                  src={TITLE}
                  alt="Title"
                  className="w-full px-2 sm:w-3/4 h-auto animate-[fadeInLeft_1s_ease-out_forwards]"
                />
              </div>
              <div className="flex justify-center w-full">
                <p className="font-semibold font-bitcount text-skyblue text-sm w-full mb-2 animate-[fadeInRight_1s_ease-out_forwards]">
                  Cómo el actual examen de manejo en Perú falla en preparar conductores capacitados
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  text="🚀 Comenzar Trivia"
                  onClick={()=>setIsGameOpen(true)}
                  variant="pink"
                />
              </div>
            </div>
            <img
              src={HEADER_BOTTOM}
              alt="Header Bottom"
              className="w-full h-auto"
            />
          </div>

          <button
            onClick={()=>setDisclaimerModal(true)}
            className="absolute bg-purple text-green hover:translate-y-[10%] duration-200 right-4 top-4 w-min mx-auto p-3 rounded-full transition-all hover:opacity-90 hover:cursor-pointer"
          >
            <IoIosInformationCircle size={16} />
          </button>
        </div>
      </div>
      <DisclaimerModal
        isOpen={disclaimerModal}
        setIsOpen={setDisclaimerModal}
        title="Metodología"
        content={<DisclaimerInfo />}
      />
    </>
  );
};