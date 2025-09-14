import { useState } from 'react';
import { TestimonioModal } from './components/TestimonioModal';
import { PixelYellowButton } from './components/PixelYellowButton';

/**
 * CallToAction Component
 * 
 * Componente principal de la sección de llamada a la acción ciudadana.
 * Presenta un formulario modal para recopilar testimonios de usuarios
 * sobre sus experiencias con el sistema de licencias de conducir.
 * 
 * Características:
 * - Diseño responsive para todos los dispositivos
 * - Modal con formulario de testimonios
 * - Botón de acción con diseño pixelado
 * - Integración con sistema de colores del proyecto
 * 
 * @component
 * @returns {JSX.Element} Componente CallToAction renderizado
 * 
 * @example
 * ```tsx
 * <CallToAction />
 * ```
 */
export const CallToAction = () => {
  // Estado para controlar la visibilidad del modal de testimonios
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Maneja la apertura del modal de testimonios
   * @function handleOpenModal
   */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Maneja el cierre del modal de testimonios
   * @function handleCloseModal
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Contenedor principal de la sección CallToAction */}
      <div className="my-[86px]">
        {/* Layout responsive con altura mínima de pantalla */}
        <div className="mx-auto container w-full">
          {/* Contenedor centrado vertical y horizontalmente */}
          <div className="flex flex-col items-center justify-center text-center py-8 px-4 sm:px-6 lg:px-8">
            {/* Wrapper para limitar el ancho máximo del contenido */}
            <div className="max-w-4xl mx-auto">
              
              {/* Título principal con tipografía responsive */}
              <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount text-[#131A31] leading-tight">
                Llamado a la acción ciudadana
              </h1>
              
              {/* Descripción con texto responsive y legibilidad optimizada */}
              <p className="w-full max-w-3xl mb-6 md:mb-8 mx-auto font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
              Cuéntanos tu historia llenando este breve formulario.
              Denuncia irregularidades o comparte tu experiencia en redes con el hashtag #MiLicenciaJusta.
              </p>
              
              {/* Botón de acción principal */}
              <div className="flex justify-center">
                <PixelYellowButton
                  onClick={handleOpenModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del formulario de testimonios */}
      <TestimonioModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}
