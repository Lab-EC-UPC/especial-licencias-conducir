/**
 * PixelSubmitButton Component
 * 
 * Botón de envío con diseño pixelado azul para formularios.
 * Utiliza la imagen button-blue.png como fondo y está diseñado
 * específicamente para acciones de envío de formularios.
 * 
 * Características:
 * - Diseño pixelado con imagen de fondo azul
 * - Texto blanco con sombra para mejor legibilidad
 * - Efectos hover y active con transformaciones CSS
 * - Tipografía Helvetica Neue LT Pro Bold
 * - Estados disabled con opacidad reducida
 * - Responsive con ancho automático
 * 
 * @fileoverview Componente de botón de envío pixelado
 * @author Sistema de Licencias de Conducir
 * @version 1.0.0
 */

import buttonBlue from '../../../assets/buttons/button-blue.png';

/**
 * Props del componente PixelSubmitButton
 * @interface Props
 */
interface Props {
  /** Texto que se muestra en el botón */
  text: string;
  /** Función que se ejecuta al hacer click en el botón */
  onClick: () => void;
  /** Estado deshabilitado del botón (opcional) */
  disabled?: boolean;
}

/**
 * Componente de botón de envío pixelado
 * 
 * Renderiza un botón con diseño pixelado azul optimizado
 * para acciones de envío de formularios. Incluye efectos
 * visuales y tipografía específica para máxima legibilidad.
 * 
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Botón de envío pixelado renderizado
 * 
 * @example
 * ```tsx
 * <PixelSubmitButton 
 *   text="Enviar mi historia"
 *   onClick={handleSubmit}
 *   disabled={false}
 * />
 * ```
 */
export const PixelSubmitButton = ({ text, onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-64 max-w-lg transition-all duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
      `}
      style={{
        // Configuración de la imagen de fondo pixelada azul
        backgroundImage: `url(${buttonBlue})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // Altura mínima para acomodar el contenido
        minHeight: '60px'
      }}
    >
      {/* Contenedor del contenido del botón */}
      <div className="relative z-10 flex items-center justify-center h-full py-4">
        {/* Texto del botón con efectos visuales */}
        <span 
          className="text-white font-bold text-sm md:text-base"
          style={{ 
            fontFamily: 'var(--font-helvetica)',
            fontWeight: 700, // 75 Bold - Helvetica Neue LT Pro Bold
            color: '#FFFFFF',
            // Sombra de texto para mejor legibilidad sobre fondo azul
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          {text}
        </span>
      </div>
    </button>
  );
};
