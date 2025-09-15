import {Modal, ModalBody, ModalContent} from "@heroui/modal";
import {TriviaQuizGame} from "@/features/01-Header/components/TriviaQuizGame.tsx";
import {useEffect, useRef, useState} from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";
import BGM from "@/assets/audio/game-bgm.wav";
import { IoIosInformationCircle } from "react-icons/io";
import {DisclaimerModal} from "@/features/shared/components/DisclaimerModal.tsx";

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

  const [disclaimerModal, setDisclaimerModal] = useState<boolean>(false);

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
                <div className="flex flex-col gap-2 md:flex-row justify-between items-center w-full py-4 text-white">
                  <div className="flex items-center">
                    <button
                      className="hover:cursor-pointer text-2xl p-4 bg-[#ac5eaa] rounded-full"
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
                      className="mx-4 w-32 accent-[#ac5eaa] cursor-pointer"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={()=>setDisclaimerModal(true)}
                      className="w-full mx-auto p-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer"
                      style={{
                        backgroundColor: "#ac5eaa",
                        color: "#dbeecb",
                        fontFamily: "var(--font-helvetica, sans-serif)"
                      }}
                    >
                      <IoIosInformationCircle size={20} />
                    </button>
                    <button
                      onClick={()=>setIsOpen(false)}
                      className="w-full mx-auto px-8 py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer whitespace-nowrap"
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

              <DisclaimerModal
                isOpen={disclaimerModal}
                setIsOpen={setDisclaimerModal}
                title="Disclaimer"
                content={
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                    <br/><br/>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                    dolor sit amet..", comes from a line in section 1.10.32.
                    <br/><br/>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                    are also reproduced in their exact original form, accompanied by English versions from the
                    1914 translation by H. Rackham.
                  </p>
                }
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}