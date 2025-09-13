import {Modal, ModalBody, ModalContent} from "@heroui/modal";
import {TriviaQuizGame} from "@/features/01-Header/components/TriviaQuizGame.tsx";
import {useEffect, useRef, useState} from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";
import BGM from "@/assets/audio/game-bgm.wav";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const TriviaQuizModal = ({
  isOpen,
  setIsOpen,
}: Props) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = bgmRef.current;
    if (!el) return;

    el.volume = 0.05;
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

    if (!isMuted && isOpen && el.paused) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [isMuted, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      size="full"
      scrollBehavior="inside"
      hideCloseButton={true}
      classNames={{
        body: "bg-[#131a31]"
      }}
    >
      <ModalContent>
        {() => (
          <>
            <audio ref={bgmRef} src={BGM} preload="auto" loop aria-hidden="true" />
            <ModalBody>
              <div className="w-full h-full p-2 md:p-4 xl:p-8">
                <div className="flex justify-between items-center w-full py-4 text-white">
                  <button
                    className="hover:cursor-pointer text-2xl p-4 bg-[#ac5eaa] rounded-full"
                    onClick={()=>setIsMuted(!isMuted)}
                  >
                    {isMuted ? <IoVolumeMute /> : <IoMdVolumeMute />}
                  </button>
                  <div>
                    <button
                      onClick={()=>setIsOpen(false)}
                      className="w-full mx-auto px-8 py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer"
                      style={{
                        backgroundColor: "#ac5eaa",
                        color: "#dbeecb",
                        fontFamily: "var(--font-helvetica, sans-serif)"
                      }}
                    >
                      🚪 Salir
                    </button>
                  </div>
                </div>
                <div className="pb-20">
                  <TriviaQuizGame
                    setIsOpen={setIsOpen}
                    isMuted={isMuted}
                  />
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}