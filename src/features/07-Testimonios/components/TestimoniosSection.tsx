import React, {useState, useRef} from "react";
import TESTIMONIO1 from "@/assets/testimonio-1.png";
import TESTIMONIO2 from "@/assets/testimonio-2.png";
import TESTIMONIO3 from "@/assets/testimonio-3.png";
import TESTIMONIO4 from "@/assets/testimonio-4.png";
import FLECHA from "@/assets/flecha-causas.png";
import {Modal, ModalBody, ModalContent} from "@heroui/modal";

type Testimonio = {
  bgColor?: string;
  avatarUrl: string;
  title: string;
  text: string;
  video?: React.ReactNode;
};

export const TestimoniosSection = () => {
  const [selected, setSelected] = useState<Testimonio | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const testimonios: Testimonio[] = [
    {
      avatarUrl: TESTIMONIO1,
      title: "Ana Paula Diez",
      text: "“Afuerita nomás, antes de entrar a la evaluación, hay un montón de gente que te quiere vender el exámen, que te dice que te va a aprobar. Hay gente que te dice: “yo te ayudo, amiga”.",
      video:
        <iframe
          src="https://www.youtube.com/embed/WZT4nM-OjD4?si=aHHkjpkvWuTncrSP"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: '100%', height: '50vh', display: 'block' }}
        />
    },
    {
      avatarUrl: TESTIMONIO2,
      title: "Anónimo",
      text: "“Tienen un montón de personas dando su examen, y cuando manejaba podía ir máximo a 10 km/h. La cola dentro del circuito era enorme”.",
      video:
        <iframe
          src="https://www.youtube.com/embed/9sTiz8ZpIcc?si=PANqT6zABrAtdCBR"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: '100%', height: '50vh', display: 'block' }}
        />
    },
    {
      avatarUrl: TESTIMONIO3,
      title: "Ariana Vargas",
      text: "“En el reglamento indican que tienes que prender tu luz direccional (para estacionar en diagonal). A mí me desaprobaron por prenderlas. En mi siguiente examen, decidí no hacerlo, y me desaprobaron por no prenderlas”. ",
      video:
        <iframe
          src="https://www.youtube.com/embed/yJfaUfcUyCo?si=-TX5oAEfv9Fit5yq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: '100%', height: '50vh', display: 'block' }}
        />
    },
    {
      avatarUrl: TESTIMONIO4,
      title: "Mario Muñoz",
      text: "“Es un circuito pequeño donde realmente no aprueba el que tenga mejor habilidad conductiva, sino el que el que se han memorizado todos los pequeños detallitos que tiene que hacer y ya está.",
      video:
        <iframe
          src="https://www.youtube.com/embed/uVyO0wB--Hk?si=AsQVZN8Z3v0oHRug"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: '100%', height: '50vh', display: 'block' }}
        />
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const TestimonioCard = ({testimonio}: {testimonio: Testimonio}) => {
    return (
      <div className="flex items-center gap-4 md:gap-6 mx-auto px-4 select-none shrink-0">
        <div className="size-32 md:size-40 shrink-0">
          <img
            src={testimonio.avatarUrl}
            alt={testimonio.title}
            className="object-cover w-full h-full relative z-10 pointer-events-none"
            draggable={false}
          />
        </div>
        <div className="w-[300px] md:w-[450px] text-primary">
          <h3 className="font-bold text-xl md:text-2xl text-[#131A31] mb-0 md:mb-2">
            {testimonio.title}
          </h3>
          <p className="text-md md:text-lg leading-relaxed mb-2">
            {testimonio.text}
          </p>
          <button
            onClick={() => {
              setSelected(testimonio);
              setIsOpen(true);
            }}
            className="underline font-bold text-md md:text-lg hover:text-purple transition-colors cursor-pointer duration-200"
          >
            Ver video
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full mb-[66px]">
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-8 md:mb-12 font-semibold font-bitcount">
        Testimonios
      </h1>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto w-full scrollbar-hide items-center text-left cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <TestimonioCard testimonio={testimonios[0]} />
        <img
          src={FLECHA}
          alt="Flecha"
          className="h-12 md:h-16 w-auto object-contain"
        />
        <TestimonioCard testimonio={testimonios[1]} />
        <TestimonioCard testimonio={testimonios[2]} />
        <TestimonioCard testimonio={testimonios[3]} />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={()=>setIsOpen(!isOpen)}
        hideCloseButton={true}
        size="3xl"
        placement="center"
        scrollBehavior="inside"
        classNames={{
          base: "bg-transparent shadow-none p-0"
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                {selected?.video}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
