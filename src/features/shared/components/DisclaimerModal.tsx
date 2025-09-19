import {Modal, ModalBody, ModalContent} from "@heroui/modal";
import Button from "@/features/10-Probabilidad-Aprobar-Examen/components/button.tsx";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  bgColor?: string;
  buttonColor?: "pink" | "blue" | "sand";
  title: string;
  content: React.ReactNode;
}

export const DisclaimerModal = ({
  isOpen,
  setIsOpen,
  bgColor = "#DAE9CA",
  buttonColor = "pink",
  title,
  content,
}: Props) => {

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="center"
      // scrollBehavior="inside"
      size="4xl"
      isDismissable={false}
      hideCloseButton={true}
      classNames={{
        base: "bg-transparent shadow-none p-0"
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <div className="relative flex flex-col items-center w-full">
                <div className="w-[90%] md:w-[95%] xl:w-[97%] h-4" style={{backgroundColor: bgColor}} />

                <div
                  className="h-full flex flex-col gap-4 items-center justify-center w-full py-4 px-8"
                  style={{backgroundColor: bgColor}}
                >
                  <div className="flex w-full items-center justify-between">
                    <h1 className="font-bitcount font-semibold text-center w-full text-2xl">{title}</h1>
                    <button
                      onClick={()=>setIsOpen(false)}
                      className="text-xl font-bold p-2 leading-none z-10 opacity-70 hover:opacity-100 hover:cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full h-[50vh] overflow-y-auto custom-scroll scroll-green px-2">
                    {content}
                  </div>
                  <Button
                    onClick={()=>setIsOpen(false)}
                    text="Cerrar"
                    variant={buttonColor}
                  />
                </div>

                <div className="w-[90%] md:w-[95%] xl:w-[97%] h-4 z-50" style={{ backgroundColor: bgColor }} />
                <div style={{backgroundColor: bgColor, filter: "brightness(60%)"}} className="w-[90%] md:w-[95%] xl:w-[97%] h-4"/>
                <div style={{backgroundColor: bgColor, filter: "brightness(60%)"}} className="w-8 z-1 h-4 absolute bottom-4 left-0" />
                <div style={{ backgroundColor: bgColor, filter: "brightness(60%)"}} className="w-8 z-1 h-4 absolute bottom-4 right-0" />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
