import React, {useState, useRef} from "react";
import CORRUPCION from "@/assets/corrupcion.png";
import EVALUACIONES from "@/assets/evaluaciones.png";
import BARRERAS from "@/assets/barreras.png";
import FLECHA from "@/assets/flecha-causas.png";
import {Modal, ModalBody, ModalContent} from "@heroui/modal";

type CausaRaiz = {
  bgColor: string;
  bgColor2: string;
  avatarUrl: string;
  title: string;
  text: string;
  modalTitle: string;
  modalText: React.ReactNode;
};

export const CausasRaicesSection = () => {
  const [selectedCausa, setSelectedCausa] = useState<CausaRaiz | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const causas: CausaRaiz[] = [
    {
      bgColor: "#9FEDFF",
      bgColor2: "#58B7CF",
      avatarUrl: CORRUPCION,
      title: "Causa Raíz: Corrupción",
      text: "¿Hasta cuándo en nuestro país se van a seguir vendiendo las licencias de conducir? en muchos casos, se compra la licencia fácilmente",
      modalTitle: "Causa Raíz 1: Corrupción",
      modalText:
        <div>
          El problema que más preocupa a los especialistas, como <strong>Luis Quispe Candia</strong>, es la corrupción sistematizada que ha convertido al examen de manejo en un trámite simbólico y fácilmente burlable.
          <br/><br/>
          Por ejemplo, Quispe denuncia que existen mafias y tramitadores que operan en las inmediaciones de centros como los del Callao o Comas, donde se promociona la obtención de licencias sin examen práctico a cambio de sobornos que pueden superar los mil soles. La falsificación de huellas dactilares y la participación de funcionarios públicos corruptos agrava la situación. Esta cultura de impunidad, tal como concluyen los especialistas, no solo afecta la calidad del examen, sino que pone vidas en riesgo al permitir que personas sin preparación estén al volante.
        </div>
    },
    {
      bgColor: "#FFD7E7",
      bgColor2: "#AA3D69",
      avatarUrl: EVALUACIONES,
      title: "Causa Raíz: Evaluaciones ineficaces",
      text: "El circuito del touring de Lima apenas permite alcanzar de 5 a 15 km por hora cuando en la vida real se circula a 80 o 90 km/h.",
      modalTitle: "Causa Raíz 2: Evaluaciones ineficaces",
      modalText:
        <div>
          La raíz de la deficiencia en la formación de conductores está en la pobre infraestructura de los centros de evaluación, que no reflejan la realidad del tránsito peruano. El circuito del Touring en Lima, según los especialistas entrevistados como <strong>Elvis Santi</strong>, apenas permite alcanzar velocidades mínimas de 5 a 15 km/h, cuando en la vida real se circula a 80 o 90 km/h. Esto genera que los aspirantes salgan con licencias sin haber experimentado las condiciones reales de la vía.
          <br/><br/>
          Por ejemplo, Quispe denuncia que existen mafias y tramitadores que operan en las inmediaciones de centros como los del Callao o Comas, donde se promociona la obtención de licencias sin examen práctico a cambio de sobornos que pueden superar los mil soles. La falsificación de huellas dactilares y la participación de funcionarios públicos corruptos agrava la situación. Esta cultura de impunidad, tal como concluyen los especialistas, no solo afecta la calidad del examen, sino que pone vidas en riesgo al permitir que personas sin preparación estén al volante.
        </div>
    },
    {
      bgColor: "#DAE9CA",
      bgColor2: "#98AA83",
      avatarUrl: BARRERAS,
      title: "Causa Raíz: Barreras Lingüísticas",
      text: "No podemos evaluar igual a alguien que conduce en la selva...",
      modalTitle: "Causa Raíz 3: Barreras Lingüísticas",
      modalText:
        <div>
          Una de las raíces menos visibles de la desigualdad en el sistema de licencias son las barreras lingüísticas y culturales. La evaluación para obtener un brevete en el Perú está diseñada bajo un modelo uniforme, urbano y centralista, que no considera la diversidad de contextos del país.
        </div>
    }
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

  const CausaCard = ({causa}: {causa: CausaRaiz}) => {
    return (
      <div className="flex items-center gap-4 md:gap-6 mx-auto px-4 select-none shrink-0">
        <div className="size-32 md:size-40 shrink-0">
          <img
            src={causa.avatarUrl}
            alt={causa.title}
            className="object-cover w-full h-full relative z-10 pointer-events-none"
            draggable={false}
          />
        </div>
        <div className="w-[300px] md:w-[450px] text-primary">
          <h3 className="font-bold text-xl md:text-2xl text-[#131A31] mb-0 md:mb-2">
            {causa.title}
          </h3>
          <p className="text-md md:text-lg leading-relaxed mb-2">
            "{causa.text}"
          </p>
          <button
            onClick={() => {
              setSelectedCausa(causa);
              setIsOpen(true);
            }}
            className="underline font-bold text-md md:text-lg hover:text-purple transition-colors cursor-pointer duration-200"
          >
            Ver más
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-8 md:mb-12 font-semibold font-bitcount">
        Las causas raíces
      </h1>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto w-full scrollbar-hide items-center text-left cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <CausaCard causa={causas[0]} />
        <img
          src={FLECHA}
          alt="Flecha"
          className="h-12 md:h-16 w-auto object-contain"
        />
        <CausaCard causa={causas[1]} />
        <CausaCard causa={causas[2]} />
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
                <div className="relative flex flex-col items-center">
                  <div className="h-5 w-[3%] bottom-4 left-0 absolute" style={{backgroundColor: selectedCausa?.bgColor2}} />
                  <div className="h-5 w-[3%] bottom-4 right-0 absolute" style={{backgroundColor: selectedCausa?.bgColor2}} />
                  <div
                    className="py-6 pb-8 px-8 min-h-[35vh]"
                    style={{
                      backgroundColor: selectedCausa?.bgColor,
                    }}
                  >
                    <div>
                      <h1 className="font-bold font-bitcount text-2xl text-center mb-4">{selectedCausa?.modalTitle}</h1>
                      <div className="text-sm md:text-lg">{selectedCausa?.modalText}</div>
                    </div>
                    <button
                      onClick={()=>setIsOpen(false)}
                      className="absolute top-4 right-4 text-xl font-bold p-2 leading-none z-10 opacity-70 hover:opacity-100 hover:cursor-pointer"
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
                  <div className="h-5 w-[95%] bottom-0" style={{backgroundColor: selectedCausa?.bgColor2}} />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
