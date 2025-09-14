/**
 * PixelTextField Component
 * 
 * Campo de texto con diseño pixelado para formularios.
 * Utiliza la imagen text-field-icon.png como fondo para crear
 * un efecto visual pixelado consistente con el diseño del proyecto.
 * 
 * Características:
 * - Diseño pixelado con imagen de fondo
 * - Soporte para campos de una línea y textarea
 * - Validación visual de campos requeridos
 * - Tipografía Helvetica Neue LT Pro
 * - Placeholder con color gris específico (#868686)
 * - Responsive y accesible
 * 
 * @fileoverview Componente de campo de texto pixelado
 * @author Sistema de Licencias de Conducir
 * @version 1.0.0
 */

import textFieldIcon from '../../../assets/icons/text-field-icon.png';

/**
 * Props del componente PixelTextField
 * @interface Props
 */
interface Props {
  /** Etiqueta del campo de texto */
  label: string;
  /** Texto placeholder que se muestra cuando el campo está vacío */
  placeholder: string;
  /** Valor actual del campo */
  value: string;
  /** Función que se ejecuta cuando el valor cambia */
  onChange: (value: string) => void;
  /** Si el campo es multilinea (textarea) en lugar de input simple */
  multiline?: boolean;
  /** Si el campo es requerido (muestra asterisco rojo) */
  required?: boolean;
  /** Número de filas para campos multilinea (por defecto 4) */
  rows?: number;
}

/**
 * Componente de campo de texto pixelado
 * 
 * Renderiza un campo de entrada de texto con diseño pixelado
 * que puede ser un input simple o un textarea multilinea.
 * Incluye etiqueta, validación visual y placeholder personalizado.
 * 
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Campo de texto pixelado renderizado
 * 
 * @example
 * ```tsx
 * <PixelTextField
 *   label="Nombre"
 *   placeholder="Ingresa tu nombre"
 *   value={name}
 *   onChange={setName}
 *   required={true}
 * />
 * 
 * <PixelTextField
 *   label="Experiencia"
 *   placeholder="Cuéntanos tu experiencia"
 *   value={experience}
 *   onChange={setExperience}
 *   multiline={true}
 *   rows={3}
 *   required={true}
 * />
 * ```
 */
export const PixelTextField = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  multiline = false, 
  required = false,
  rows = 4 
}: Props) => {
  return (
    <div className="w-full mb-4">
      {/* Etiqueta del campo con indicador de campo requerido */}
      <label className="block mb-2 text-black font-medium" 
             style={{ 
               fontFamily: 'var(--font-helvetica)',
               fontWeight: 500 // 65 Medium - Helvetica Neue LT Pro Medium
             }}>
        {label}
        {/* Asterisco rojo para campos requeridos */}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {/* Contenedor del campo de texto con fondo pixelado */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url(${textFieldIcon})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: multiline ? '120px' : '50px'
        }}
      >
        {/* Área de contenido del campo */}
        <div className="relative p-3 h-full">
          {multiline ? (
            /* Textarea para campos multilinea */
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              rows={rows}
              className="w-full h-full resize-none border-none outline-none bg-transparent"
              style={{ 
                fontFamily: 'var(--font-helvetica)',
                fontWeight: 400, // 55 Roman - Helvetica Neue LT Pro Regular
                color: '#868686', // Color gris específico para placeholder
                fontSize: '16px',
                lineHeight: '1.5'
              }}
            />
          ) : (
            /* Input de una línea */
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full h-full border-none outline-none bg-transparent"
              style={{ 
                fontFamily: 'var(--font-helvetica)',
                fontWeight: 400, // 55 Roman - Helvetica Neue LT Pro Regular
                color: '#868686', // Color gris específico para placeholder
                fontSize: '16px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
