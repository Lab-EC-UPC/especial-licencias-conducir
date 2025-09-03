// --- PROPS DEL COMPONENTE ---
interface Props {
    image: string;
    alt: string;
    colorConfig: {
        outline: string;
    };
}

// --- CONSTANTES DE DISEÑO ---
const PIXEL_UNIT = 6; // en píxeles

// --- COMPONENTE DEL AVATAR PIXELADO ---
export const PixelatedAvatar = ({ image, alt, colorConfig }: Props) => {
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

    return (
        // Se ajustó el tamaño para que sea más proporcional a la tarjeta.
        <div className="relative w-28 h-28">
            {/* Elemento del Borde */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: colorConfig.outline,
                    clipPath: pixelClipPath,
                }}
            />
            {/* Contenedor de la Imagen */}
            <div
                className="absolute"
                style={{
                    top: `${PIXEL_UNIT}px`,
                    left: `${PIXEL_UNIT}px`,
                    right: `${PIXEL_UNIT}px`,
                    bottom: `${PIXEL_UNIT}px`,
                    clipPath: pixelClipPath,
                }}
            >
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};
