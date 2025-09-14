/**
 * PixelYellowButton Component
 * 
 * Botón con diseño pixelado amarillo para la sección CallToAction.
 * Utiliza la imagen button-yellow.png como fondo y muestra texto
 * en dos líneas con tipografía Helvetica Neue LT Pro.
 * 
 * Características:
 * - Diseño pixelado con imagen de fondo
 * - Texto en dos líneas: hashtag principal y texto secundario
 * - Efectos hover y active con transformaciones CSS
 * - Tipografía responsive con clamp()
 * - Estados disabled con opacidad reducida
 * 
 * @fileoverview Componente de botón pixelado amarillo
 * @author Sistema de Licencias de Conducir
 * @version 1.0.0
 */

import buttonYellow from '../../../assets/buttons/button-yellow.png';

/**
 * Props del componente PixelYellowButton
 * @interface Props
 */
interface Props {
  /** Función que se ejecuta al hacer click en el botón */
  onClick: () => void;
  /** Estado deshabilitado del botón (opcional) */
  disabled?: boolean;
}

/**
 * Componente de botón pixelado amarillo
 * 
 * Renderiza un botón con diseño pixelado que utiliza la imagen
 * button-yellow.png como fondo. Incluye dos líneas de texto:
 * la principal con el hashtag y la secundaria con instrucciones.
 * 
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Botón pixelado amarillo renderizado
 * 
 * @example
 * ```tsx
 * <PixelYellowButton 
 *   onClick={() => console.log('Button clicked')}
 *   disabled={false}
 * />
 * ```
 */
export const PixelYellowButton = ({ onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-auto max-w-md transition-all duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
      `}
      style={{
        // Configuración de la imagen de fondo pixelada
        backgroundImage: `url(${buttonYellow})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // Dimensiones mínimas para acomodar el texto de dos líneas
        minHeight: '80px',
        padding: '12px 24px'
      }}
    >
      {/* Contenedor del contenido del botón */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-2">
        
        {/* Texto principal: Hashtag de la campaña */}
        <span 
          className="font-bold text-lg md:text-xl"
          style={{ 
            fontFamily: 'var(--font-helvetica)',
            fontWeight: 500, // 65 Medium - Helvetica Neue LT Pro Medium
            color: '#FFFFFF',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', // Responsive scaling
            lineHeight: '1.2'
          }}
        >
          #MiLicenciaJusta
        </span>
        
        {/* Texto secundario: Instrucciones de interacción */}
        <span 
          className="font-medium text-sm"
          style={{ 
            fontFamily: 'var(--font-helvetica)',
            fontWeight: 400, // 55 Roman - Helvetica Neue LT Pro 55 Roman
            color: '#FFFFFF',
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', // Responsive scaling más pequeño
            lineHeight: '1.2'
          }}
        >
          (Haz click aquí)
        </span>
      </div>
    </button>
  );
};
