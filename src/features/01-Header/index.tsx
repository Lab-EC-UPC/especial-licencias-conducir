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
                    <div className="flex flex-col justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 h-full p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                        <div className="text-center">
                            <h2 className="font-bold leading-tight font-bitcount text-[#58b7cf] text-[2.5vw] sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl mb-1 sm:mb-2 md:mb-3">
                                🚗 Trivia de Conducir
                            </h2>
                            <p className="leading-tight text-[#ffaf42] text-[2vw] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold">
                                ¿Qué tanto sabes sobre manejo seguro?
                            </p>
                        </div>

                        <div className="rounded border bg-[#58b7cf] border-white p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                            <h4 className="font-bold font-bitcount text-[#131a31] text-[2vw] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl mb-1 sm:mb-2 md:mb-3">
                                📋 Reglas
                            </h4>
                            <ul className="leading-tight list-disc text-[#131a31] pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-7 space-y-0.5 sm:space-y-1 md:space-y-1.5 text-[1.8vw] sm:text-xs md:text-sm lg:text-base">
                                <li>20 preguntas desafiantes</li>
                                <li>20 segundos por pregunta</li>
                                <li>Una sola oportunidad</li>
                            </ul>
                        </div>

                        <button
                            onClick={()=>setIsGameOpen(true)}
                            className="bg-[#ed548c] w-full rounded font-bold transition-all hover:opacity-90 leading-tight text-[#131a31] hover:cursor-pointer p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 text-[2vw] sm:text-xs md:text-sm lg:text-base xl:text-lg"
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