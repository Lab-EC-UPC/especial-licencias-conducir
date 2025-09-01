import React from 'react';

interface Props {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  colorConfig: {
    base: string;
    outline: string;
    light: string;
  };
}
 
const PIXEL_UNIT = 3;

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
    calc(100% - ${PIXEL_UNIT * 3}px) ${PIXEL_UNIT * 3}px,
   
    /* Bottom-right corner */  
    calc(100% - ${PIXEL_UNIT * 3}px) calc(100% - ${PIXEL_UNIT * 3}px), calc(100% - ${PIXEL_UNIT * 3}px) calc(100% - ${PIXEL_UNIT * 2}px),
    calc(100% - ${PIXEL_UNIT * 4}px) calc(100% - ${PIXEL_UNIT * 2}px), calc(100% - ${PIXEL_UNIT * 4}px) calc(100% - ${PIXEL_UNIT}px),
    calc(100% - ${PIXEL_UNIT * 5}px) calc(100% - ${PIXEL_UNIT}px), calc(100% - ${PIXEL_UNIT * 5}px) 100%,
    calc(100% - ${PIXEL_UNIT * 6}px) 100%, ${PIXEL_UNIT * 6}px 100%, ${PIXEL_UNIT * 5}px 100%,
    /* Bottom-left corner */
    ${PIXEL_UNIT * 5}px calc(100% - ${PIXEL_UNIT}px), ${PIXEL_UNIT * 4}px calc(100% - ${PIXEL_UNIT}px),
    ${PIXEL_UNIT * 4}px calc(100% - ${PIXEL_UNIT * 2}px), ${PIXEL_UNIT * 3}px calc(100% - ${PIXEL_UNIT * 2}px),
    ${PIXEL_UNIT * 3}px calc(100% - ${PIXEL_UNIT * 3}px), 
  
 
    /* Top-left corner */
    ${PIXEL_UNIT * 3}px ${PIXEL_UNIT * 3}px, ${PIXEL_UNIT * 3}px ${PIXEL_UNIT * 2}px,
    ${PIXEL_UNIT * 4}px ${PIXEL_UNIT * 2}px, ${PIXEL_UNIT * 4}px ${PIXEL_UNIT}px,
    ${PIXEL_UNIT * 5}px ${PIXEL_UNIT}px
      `
    }}>
      <div className="w-full h-full" style={{ backgroundColor: color }}></div>
    </div>
  </div>
);

const PixelButton = ({
  text = "Ver más",
  onClick,
  colorConfig,
}: Props) => {
  return (
    <div className="pt-1 pb-1 px-1  relative w-[163px] h-[38px] duration-200 hover:translate-y-[10%] hover:cursor-pointer font-bitcount">
      {/* Borde Exterior */}
      <PixelBorder color={colorConfig.outline} />
      
      {/* Contenedor Interior */}
      <div className="relative p-[2px] z-10 w-full h-full">
        {/* Borde Interior (color base) */}
        <PixelBorder color={colorConfig.light} />
        
        {/* Botón Real */}
        <button
          onClick={onClick}
          className="relative z-20 w-full h-full font-bold leading-none flex items-center justify-center text-[#0f1629]"
          style={{ backgroundColor: 'transparent' }}
        >
          <span className={`-translate-y-[1px] inline-block`} style={{color: colorConfig.outline}}>
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PixelButton;
