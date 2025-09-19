// src/features/05-Causas-Raices/components/PixelCard.tsx
import PixelButton from "./PixelButton.tsx";
import { PixelatedAvatar } from "./PixelatedAvatar";

// Interfaz de props actualizada para coincidir con los datos pasados.
interface Props {
  expert: {
    name: string;
    quote: string;
    image: string;
    title: string;
  };
  colorConfig: {
    base: string;
    outline: string;
    light:string;
  };
  onVerMasClick: () => void;
}

const PIXEL_UNIT = 6;

const PixelBorder = ({ color }: { color: string }) => (
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full" style={{
      clipPath: `
        polygon(
    /* Top edge */
    ${PIXEL_UNIT * 5}px 0, ${PIXEL_UNIT * 6}px 0, calc(100% - ${PIXEL_UNIT * 6}px) 0, calc(100% - ${PIXEL_UNIT * 5}px) 0,
    /* Top-right corner */
    calc(100% - ${PIXEL_UNIT * 5}px) ${PIXEL_UNIT}px, calc(100% - ${PIXEL_UNIT * 4}px) ${PIXEL_UNIT}px,
    calc(100% - ${PIXEL_UNIT * 4}px) ${PIXEL_UNIT * 2}px, calc(100% - ${PIXEL_UNIT * 3}px) ${PIXEL_UNIT * 2}px,
    calc(100% - ${PIXEL_UNIT * 3}px) ${PIXEL_UNIT * 3}px, calc(100% - ${PIXEL_UNIT * 2}px) ${PIXEL_UNIT * 3}px,
    calc(100% - ${PIXEL_UNIT * 2}px) ${PIXEL_UNIT * 4}px, calc(100% - ${PIXEL_UNIT}px) ${PIXEL_UNIT * 4}px,
    calc(100% - ${PIXEL_UNIT}px) ${PIXEL_UNIT * 5}px, 100% ${PIXEL_UNIT * 5}px,
    100% ${PIXEL_UNIT * 6}px, 100% calc(100% - ${PIXEL_UNIT * 6}px), 100% calc(100% - ${PIXEL_UNIT * 5}px),
    /* Bottom-right corner */
    calc(100% - ${PIXEL_UNIT}px) calc(100% - ${PIXEL_UNIT * 5}px), calc(100% - ${PIXEL_UNIT}px) calc(100% - ${PIXEL_UNIT * 4}px),
    calc(100% - ${PIXEL_UNIT * 2}px) calc(100% - ${PIXEL_UNIT * 4}px), calc(100% - ${PIXEL_UNIT * 2}px) calc(100% - ${PIXEL_UNIT * 3}px),
    calc(100% - ${PIXEL_UNIT * 3}px) calc(100% - ${PIXEL_UNIT * 3}px), calc(100% - ${PIXEL_UNIT * 3}px) calc(100% - ${PIXEL_UNIT * 2}px),
    calc(100% - ${PIXEL_UNIT * 4}px) calc(100% - ${PIXEL_UNIT * 2}px), calc(100% - ${PIXEL_UNIT * 4}px) calc(100% - ${PIXEL_UNIT}px),
    calc(100% - ${PIXEL_UNIT * 5}px) calc(100% - ${PIXEL_UNIT}px), calc(100% - ${PIXEL_UNIT * 5}px) 100%,
    calc(100% - ${PIXEL_UNIT * 6}px) 100%, ${PIXEL_UNIT * 6}px 100%, ${PIXEL_UNIT * 5}px 100%,
    /* Bottom-left corner */
    ${PIXEL_UNIT * 5}px calc(100% - ${PIXEL_UNIT}px), ${PIXEL_UNIT * 4}px calc(100% - ${PIXEL_UNIT}px),
    ${PIXEL_UNIT * 4}px calc(100% - ${PIXEL_UNIT * 2}px), ${PIXEL_UNIT * 3}px calc(100% - ${PIXEL_UNIT * 2}px),
    ${PIXEL_UNIT * 3}px calc(100% - ${PIXEL_UNIT * 3}px), ${PIXEL_UNIT * 2}px calc(100% - ${PIXEL_UNIT * 3}px),
    ${PIXEL_UNIT * 2}px calc(100% - ${PIXEL_UNIT * 4}px), ${PIXEL_UNIT}px calc(100% - ${PIXEL_UNIT * 4}px),
    ${PIXEL_UNIT}px calc(100% - ${PIXEL_UNIT * 5}px), 0 calc(100% - ${PIXEL_UNIT * 5}px),
    0 calc(100% - ${PIXEL_UNIT * 6}px), 0 ${PIXEL_UNIT * 6}px, 0 ${PIXEL_UNIT * 5}px,
    /* Top-left corner */
    ${PIXEL_UNIT}px ${PIXEL_UNIT * 5}px, ${PIXEL_UNIT}px ${PIXEL_UNIT * 4}px,
    ${PIXEL_UNIT * 2}px ${PIXEL_UNIT * 4}px, ${PIXEL_UNIT * 2}px ${PIXEL_UNIT * 3}px,
    ${PIXEL_UNIT * 3}px ${PIXEL_UNIT * 3}px, ${PIXEL_UNIT * 3}px ${PIXEL_UNIT * 2}px,
    ${PIXEL_UNIT * 4}px ${PIXEL_UNIT * 2}px, ${PIXEL_UNIT * 4}px ${PIXEL_UNIT}px,
    ${PIXEL_UNIT * 5}px ${PIXEL_UNIT}px

      `
    }}>
      <div className="w-full h-full" style={{ backgroundColor: color }}></div>
    </div>
  </div>
);

export const PixelCard = ({ expert, colorConfig, onVerMasClick }: Props) => {
  return (
    // 1. Contenedor principal ahora es relativo y tiene un margen superior
    // para dejar espacio al avatar que se va a superponer.
    <div className="w-full h-full mx-auto relative mt-14">

      {/* 2. El Avatar se posiciona de forma absoluta */}
      {/* - Se saca del flujo normal para que flote sobre la tarjeta. */}
      {/* - '-top-14' lo sube (la mitad de su altura de 28 -> 14 = 3.5rem). */}
      {/* - 'left-1/2 -translate-x-1/2' lo centra horizontalmente. */}
      {/* - 'z-10' asegura que esté por encima de la tarjeta. */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
        <PixelatedAvatar 
          image={expert.image} 
          alt={expert.name} 
          colorConfig={colorConfig}
        />
      </div>


      {/* 3. El contenido de la tarjeta se ajusta */}
      {/* - El 'pt-20' es clave: crea el espacio interno superior para que el */}
      {/* texto no quede oculto detrás del avatar. */}
      <div className="relative pt-2 pb-2 px-2 text-center h-full">
        {/* Borde Exterior */}
        <PixelBorder color={colorConfig.outline} />
        
        {/* Contenedor Interior */}
        <div className="relative p-1 pt-4 h-full" style={{paddingTop: "20px"}}>
          {/* Borde Interior (color base) */}
          <PixelBorder color={colorConfig.base} />
          
          {/* Contenido Real */}
          <div className="relative p-4 flex flex-col h-full justify-between">
            {/* Se elimina el margen superior inline, ahora controlado por el padding del contenedor padre */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold">{expert.name}</h3>
              <p className="mb-4 font-medium text-sm md:text-base">{expert.title}</p>
              <p className="text-base text-center mb-2 h-full" style={{color: "black"}}>{expert.quote}</p>
            </div>
            <div className="flex justify-center">
              <PixelButton
                text="Ver más"
                colorConfig={colorConfig}
                onClick={onVerMasClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
