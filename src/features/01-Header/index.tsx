import hero from "@/assets/hero.png";
import heroWebp from "@/assets/hero.webp";
import mobileHeroImage from "@/assets/mobileHeroImage.png";
import mobileHeroImageWebp from "@/assets/mobileHeroImage.webp";
import {useState} from "react";
import {TriviaQuizModal} from "@/features/01-Header/components/TriviaQuizModal.tsx";

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
        width: "60%",        // Puedes cambiar este valor
        height: "50%",       // Puedes cambiar este valor
        left: "20%",         // Puedes cambiar este valor
        top: "18%",           // Puedes cambiar este valor
        padding: "clamp(0.5rem, 2vw, 2rem)",
    },

    // Configuración para MÓVIL - Overlay más pequeño para móviles
    mobileOverlay: {
        width: "24%",        // Puedes cambiar este valor - más pequeño que web
        height: "63%",      // Altura automática para móviles
        left: "37%",       // Puedes cambiar este valor - centrado
        top: "16%",          // Puedes cambiar este valor - dentro de la pantalla
        padding: "clamp(0.125rem, 1.5vw, 0.75rem)",
    },

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
                {/* Imágenes para WEB (pantallas grandes) con soporte WebP */}
                <picture className="hidden md:block">
                    <source srcSet={CONFIG.heroWebp} type="image/webp" />
                    <img
                        src={CONFIG.heroImage}
                        alt="Hero Desktop"
                        className="w-full h-auto"
                    />
                </picture>

                {/* Imágenes para MÓVIL/TABLET con soporte WebP */}
                <picture className="block md:hidden">
                    <source srcSet={CONFIG.mobileHeroImageWebp} type="image/webp" />
                    <img
                        src={CONFIG.mobileHeroImage}
                        alt="Hero Mobile"
                        className="w-full h-auto"
                    />
                </picture>

                {/* Overlay para WEB - Tamaño configurable para desktop */}
                <div
                    className={`hidden md:flex flex-col ${CONFIG.overlayRounded} absolute bg-[#131a31]`}
                    style={{
                        top: CONFIG.webOverlay.top,
                        left: CONFIG.webOverlay.left,
                        width: CONFIG.webOverlay.width,
                        height: CONFIG.webOverlay.height,
                        color: "#dbeecb",
                        padding: CONFIG.webOverlay.padding,
                        overflow: "hidden",
                        minHeight: "fit-content",
                    }}
                >
                    <div className="flex flex-col justify-center gap-4 lg:gap-6 xl:gap-8 h-full p-4 lg:p-6 xl:p-8">
                        <div className="text-center">
                            <h2 className="font-bold leading-tight font-bitcount text-[#58b7cf] text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 lg:mb-3">
                                🚗 Trivia de Conducir
                            </h2>
                            <p className="leading-tight text-[#ffaf42] text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold">
                                ¿Qué tanto sabes sobre manejo seguro?
                            </p>
                        </div>

                        <div className="rounded border bg-[#58b7cf] border-white p-3 lg:p-4 xl:p-5">
                            <h4 className="font-bold font-bitcount text-[#131a31] text-sm lg:text-base xl:text-lg 2xl:text-xl mb-2 lg:mb-3">
                                📋 Reglas
                            </h4>
                            <ul className="leading-tight list-disc text-[#131a31] pl-5 lg:pl-6 xl:pl-7 space-y-1 lg:space-y-1.5 text-sm lg:text-base">
                                <li>20 preguntas desafiantes</li>
                                <li>20 segundos por pregunta</li>
                                <li>Una sola oportunidad</li>
                            </ul>
                        </div>

                        <button
                            onClick={()=>setIsGameOpen(true)}
                            className="bg-[#ed548c] w-full rounded font-bold transition-all hover:opacity-90 leading-tight text-[#131a31] hover:cursor-pointer p-3 lg:p-3.5 xl:p-4 text-sm lg:text-base xl:text-lg"
                        >
                            🚀 Comenzar Trivia
                        </button>
                    </div>
                </div>

                {/* Overlay para MÓVIL - Tamaño configurable más pequeño */}
                <div
                    className={`flex md:hidden flex-col ${CONFIG.overlayRounded} absolute bg-[#131a31]`}
                    style={{
                        top: CONFIG.mobileOverlay.top,
                        left: CONFIG.mobileOverlay.left,
                        width: CONFIG.mobileOverlay.width,
                        height: CONFIG.mobileOverlay.height,
                        color: "#dbeecb",
                        padding: CONFIG.mobileOverlay.padding,
                        overflow: "hidden",
                        minHeight: "fit-content",
                    }}
                >
                    <div className="flex flex-col justify-center gap-1 sm:gap-2 h-full p-1 sm:p-2">
                        <div className="text-center">
                            <h2 className="font-bold leading-tight font-bitcount text-[#58b7cf] text-[2.2vw] sm:text-[1.8vw] mb-1">
                                🚗 Trivia de Conducir
                            </h2>
                            <p className="leading-tight text-[#ffaf42] text-[1.8vw] sm:text-[1.5vw] font-bold">
                                ¿Qué tanto sabes sobre manejo seguro?
                            </p>
                        </div>

                        <div className="rounded border bg-[#58b7cf] border-white p-1 sm:p-1.5">
                            <h4 className="font-bold font-bitcount text-[#131a31] text-[1.6vw] sm:text-[1.4vw] mb-1">
                                📋 Reglas
                            </h4>
                            <ul className="leading-tight list-disc text-[#131a31] pl-2 sm:pl-3 space-y-0.5 text-[1.4vw] sm:text-[1.2vw]">
                                <li>20 preguntas desafiantes</li>
                                <li>20 segundos por pregunta</li>
                                <li>Una sola oportunidad</li>
                            </ul>
                        </div>

                        <button
                            onClick={()=>setIsGameOpen(true)}
                            className="bg-[#ed548c] w-full rounded font-bold transition-all hover:opacity-90 leading-tight text-[#131a31] hover:cursor-pointer p-1.5 sm:p-2 text-[1.6vw] sm:text-[1.4vw]"
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