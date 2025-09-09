// --- CONSTANTES DE DISEÑO ---
const PIXEL_UNIT = 6;
const pixelClipPath = `polygon(
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
)`;

// --- PROPS DEL COMPONENTE ---
// Se añade 'light' a la configuración de colores.
interface CausaOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  colorConfig?: {
    base: string;
    outline: string;
    light: string;
  };
}

// --- COMPONENTE DEL OVERLAY ---
export const CausaOverlay = ({
  isOpen,
  onClose,
  title,
  content,
  // Se añaden colores por defecto que incluyen la nueva propiedad 'light'.
  colorConfig = {
    outline: "#131A31",
    base: "#4A90E2",
    light: "#E9F1FA",
  },
}: CausaOverlayProps) => {

  if (!isOpen) {
    return null;
  }

  return (
    // Fondo semitransparente general
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      {/* 1. BORDE EXTERIOR (oscuro) */}
      <div
        className="w-full max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colorConfig.outline,
          clipPath: pixelClipPath,
          padding: `3px`
        }}
      >
        {/* 2. BORDE INTERIOR (color principal) */}
        <div
          className="relative w-full h-full"
          style={{
            clipPath: pixelClipPath,
            backgroundColor: colorConfig.base,
            padding: `3px`
          }}
        >
          {/* 3. FONDO DEL CONTENIDO (claro) */}
          <div 
            className="relative p-4 pt-8 pb-10 overflow-y-auto w-full h-full max-h-[80vh]"
            style={{
              clipPath: pixelClipPath,
              backgroundColor: colorConfig.light,
            }}
          >
            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl font-bold p-2 leading-none z-10 opacity-70 hover:opacity-100 hover:cursor-pointer"
              style={{ color: colorConfig.outline }}
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
            
            {/* Contenido textual con colores dinámicos */}
            <h2 className="text-2xl font-bold mb-4 font-bitcount text-center" style={{  color: "black"  }}>{title}</h2>
            <div className="overflow-y-auto" style={{ color: "black" }}>
              <p className="text-sm font-medium whitespace-pre-wrap">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};