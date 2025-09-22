import {TriviaQuizGame} from "@/features/01-Header/components/TriviaQuizGame.tsx";
import {useEffect, useRef, useState} from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";
import BGM from "@/assets/audio/game-bgm.wav";
import PINK from "@/assets/buttons/button-pink.png";
// import Button from "@/features/10-Probabilidad-Aprobar-Examen/components/button.tsx";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const TriviaQuizModal = ({
  isOpen,
  setIsOpen,
}: Props) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.3);
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = bgmRef.current;
    if (!el) return;

    el.volume = volume;
    el.muted = isMuted;

    if (isOpen) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const el = bgmRef.current;
    if (!el) return;
    el.muted = isMuted;
    el.volume = volume / 3;

    if (!isMuted && isOpen && el.paused) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [isMuted, isOpen, volume]);

  return (
    <>
      <audio ref={bgmRef} src={BGM} preload="auto" loop aria-hidden="true" />
      <div className="w-full min-h-screen p-3 md:p-4 xl:p-8 bg-primary">
        <div className="flex flex-row justify-between items-center w-full py-4 text-white">
          <div className="flex items-center">
            <button
              className="hover:cursor-pointer text-xl md:text-2xl p-3 md:p-4 bg-[#ac5eaa] rounded-full"
              onClick={()=>setIsMuted(!isMuted)}
            >
              {isMuted ? <IoVolumeMute /> : <IoMdVolumeMute />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="mx-2 w-24 md:w-32 accent-[#ac5eaa] cursor-pointer"
            />
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={()=>setIsOpen(false)}
              className="w-full mx-auto px-4 md:px-8 py-2 md:py-3 font-bitcount rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer whitespace-nowrap"
              style={{
                backgroundImage: `url('${PINK}')`,
                imageRendering: 'pixelated',
                color: "#dbeecb",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              🚪 Salir
            </button>
            {/*<Button*/}
            {/*  text="🚪 Salir"*/}
            {/*  onClick={()=>setIsOpen(false)}*/}
            {/*  variant="pink"*/}
            {/*  className="w-[100px]"*/}
            {/*/>*/}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pb-20 w-full xl:w-1/2">
            <TriviaQuizGame
              setIsOpen={setIsOpen}
              isMuted={isMuted}
              volume={volume}
            />
          </div>
        </div>
      </div>
    </>
  )
}