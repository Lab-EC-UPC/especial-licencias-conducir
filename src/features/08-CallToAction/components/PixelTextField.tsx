

import textFieldIcon from '../../../assets/icons/text-field-icon.png';
interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  required?: boolean;
  rows?: number;
}


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
              required={required}
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
              required={required}
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full h-full border-none outline-none bg-transparent"
              style={{ 
                fontFamily: 'var(--font-helvetica)',
                fontWeight: 400,
                color: '#868686',
                fontSize: '16px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
