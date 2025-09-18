import { useState } from 'react';
import { TestimonioModal } from './components/TestimonioModal';
import { PixelYellowButton } from './components/PixelYellowButton';


export const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mx-auto container w-full my-[86px]">
        <div className="flex flex-col items-center justify-center text-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount text-[#131A31]">
              Llamado a la acción ciudadana
            </h1>
            <p className="w-full max-w-3xl mx-auto font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
              Cuéntanos tu historia llenando este breve formulario.
              Denuncia irregularidades o comparte tu experiencia en redes con el hashtag #licenciaresponsable.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
              <PixelYellowButton
                onClick={handleOpenModal}
              />
            </div>
          </div>
        </div>
      </div>
      <TestimonioModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}
