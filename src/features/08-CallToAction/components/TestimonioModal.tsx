
import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalContent } from "@heroui/modal";
import { PixelTextField } from './PixelTextField';
import { PixelSubmitButton } from './PixelSubmitButton';

const SHEETS_URL = import.meta.env.VITE_SHEETS_WEBAPP_URL as string;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nombre: string;
  ciudad: string;
  experiencia: string;
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

const colorConfig = {
  outline: "#D99A2D",
  base: "#F9B233", 
  light: "#FFFFFF"
};

export const TestimonioModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    ciudad: '',
    experiencia: ''
  });

  const [checkboxChecked, setCheckboxChecked] = useState(false);

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitOk, setSubmitOk] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const style = document.createElement('style');
      style.id = 'testimonio-modal-scrollbar';
      style.textContent = `
        .testimonio-modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .testimonio-modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .testimonio-modal-content::-webkit-scrollbar-thumb {
          background-color: #D99A2D;
          border-radius: 3px;
        }
        .testimonio-modal-content::-webkit-scrollbar-thumb:hover {
          background-color: #F9B233;
        }
      `;
      document.head.appendChild(style);
    } else {
      const existingStyle = document.getElementById('testimonio-modal-scrollbar');
      if (existingStyle) {
        existingStyle.remove();
      }
    }

    return () => {
      const existingStyle = document.getElementById('testimonio-modal-scrollbar');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    if (!formData.experiencia.trim()) {
      setSubmitError("Por favor, ingresa tu experiencia.");
      // alert('Por favor, ingresa tu experiencia');
      return;
    }

    if (!checkboxChecked) {
        setSubmitError("Debes autorizar el uso anónimo del testimonio para continuar.");
        // alert('Debes autorizar el uso anónimo del testimonio para continuar.');
        return;
    }

    if (!SHEETS_URL) {
        throw new Error('Falta configurar la URL');
        // alert('Falta configurar la URL del Web App (VITE_SHEETS_WEBAPP_URL).');
        // return;
    }
    setSubmitting(true);
    try {
         const nombre = formData.nombre.trim();
         const ciudad = formData.ciudad.trim();
         const experiencia = formData.experiencia.trim();
         const params = new URLSearchParams();
         params.append('nombre', nombre);
         params.append('ciudad', ciudad);
         params.append('experiencia', experiencia);
         params.append('consent', checkboxChecked ? '1' : '0');
         params.append('userAgent', navigator.userAgent);
         params.append('page', window.location.href);

         const res = await fetch(SHEETS_URL, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
             },
             body: params.toString(),
         });
         let ok = false;
         try {
             const data = await res.json();
             ok = !!data?.ok;
         } catch {
             ok = res.ok;
         }
         if (!ok) {
             throw new Error('No se pudo guardar tu testimonio. Inténtalo nuevamente.');
         }
         setSubmitOk(true);
         setFormData({ nombre: '', ciudad: '', experiencia: '' });
         setCheckboxChecked(false);
         alert('¡Gracias por compartir tu experiencia!');
         onClose();
    } catch {
         // console.error(err);
         // setSubmitError(err?.message || 'Error desconocido al enviar el formulario.');
         setSubmitError('Ocurrió un error desconocido al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
         // alert('Ocurrió un error al enviar. Por favor, inténtalo de nuevo.');
    } finally {
         setSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setSubmitError(null);
      setSubmitOk(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      hideCloseButton={true}
      size="2xl"
      placement="center"
      classNames={{
        base: "bg-transparent shadow-none p-0"
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <div
                onClick={onClose}
              >
                {/* Contenedor del formulario */}
                <div
                  className="w-full max-w-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Estructura exacta igual a PixelCard */}
                  <div className="relative pt-2 pb-2 px-2">
                    {/* Borde Exterior */}
                    <PixelBorder color={colorConfig.outline} />

                    {/* Contenedor Interior */}
                    <div className="relative p-1 pt-3 sm:p-2 sm:pt-4" style={{paddingTop: "16px"}}>
                      {/* Borde Interior (color base) */}
                      <PixelBorder color={colorConfig.base} />
                      
                      {/* Contenido Real */}
                      <form
                        onSubmit={handleSubmit}
                        className="relative p-3 sm:p-4 pt-8 pb-10 overflow-y-auto w-full h-full max-h-[85vh] sm:max-h-[80vh] text-white testimonio-modal-content"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#D99A2D transparent',
                        }}
                      >
                        {/* Botón de cierre */}
                        <button
                          type="button"
                          onClick={onClose}
                          className="absolute top-4 right-4 text-xl font-bold p-2 leading-none z-10 opacity-70 hover:opacity-100 hover:cursor-pointer"
                          style={{ color: colorConfig.outline }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>

                        {/* Título Principal */}
                        <h1 
                          className="text-left mb-2"
                          style={{ 
                            color: "black",
                            fontFamily: 'var(--font-helvetica)',
                            fontWeight: 700, // 75 Bold
                            fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
                            lineHeight: '1.2'
                          }}
                        >
                          Tu voz también cuenta
                        </h1>

                        {/* Descripción */}
                        <p 
                          className="text-left mb-3"
                          style={{ 
                            color: "#000000",
                            fontFamily: 'var(--font-helvetica)',
                            fontWeight: 400, // 55 Roman
                            fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
                            lineHeight: '1.5'
                          }}
                        >
                          Queremos escuchar tu experiencia real para visibilizar los desafíos y promover mejoras en el sistema de emisión de licencias del Perú. Denuncia irregularidades en el siguiente formulario o comparte alguna experiencia que hayas tenido en redes usando el hashtag{' '}
                          <span className="font-semibold text-blue-600">#licenciaResponsable</span>
                        </p>

                        {/* Campos del formulario */}
                        <div className="space-y-2">
                          {/* Campo Nombre */}
                          <PixelTextField
                            label="Nombre"
                            placeholder="Ingresa tu nombre (Opcional)"
                            value={formData.nombre}
                            onChange={(value) => handleInputChange('nombre', value)}
                            required={false}
                          />

                          {/* Campo Ciudad */}
                          <PixelTextField
                            label="Ciudad, región y centro de evaluación:"
                            placeholder="Ingresa tu ciudad, región y centro de evaluación (Opcional)"
                            value={formData.ciudad}
                            onChange={(value) => handleInputChange('ciudad', value)}
                            required={false}
                          />

                          {/* Campo Experiencia */}
                          <PixelTextField
                            label="Cuéntanos tu experiencia:"
                            placeholder="Ingresa tu experiencia aquí"
                            value={formData.experiencia}
                            onChange={(value) => handleInputChange('experiencia', value)}
                            multiline={true}
                            rows={3}
                            required={true}
                          />
                        </div>

                        {/* Disclaimer con Checkbox */}
                        <div className="flex items-start gap-3 mt-3 mb-4 py-2">
                          {/* Checkbox */}
                          <button
                            type="button"
                            onClick={() => setCheckboxChecked(!checkboxChecked)}
                            className="w-5 h-5 flex items-center justify-center rounded border-2 transition-colors duration-200 flex-shrink-0 mt-0.5 hover:cursor-pointer"
                            style={{
                              backgroundColor: '#58B7CF',
                              borderColor: '#58B7CF'
                            }}
                          >
                            {checkboxChecked && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                          
                          {/* Texto del disclaimer */}
                          <p 
                            className="text-left"
                            style={{ 
                              color: "black",
                              fontFamily: 'var(--font-helvetica)',
                              fontWeight: 300, // 45 Light
                              fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                              lineHeight: '1.4'
                            }}
                          >
                            Autorizo el uso de mi testimonio con fines periodísticos, manteniendo mi anonimato. Los datos como el celular y el correo no serán publicados.
                          </p>
                        </div>
                        {submitError && (
                            <p className="mt-2 text-sm" style={{ color: '#b00020' }}>
                                {submitError}
                            </p>
                        )}
                        {submitOk && (
                            <p className="mt-2 text-sm" style={{ color: 'green' }}>
                                ¡Enviado correctamente!
                            </p>
                        )}

                        {/* Botón de envío */}
                        <div className="flex justify-start mt-2">
                            <div className={submitting ? 'pointer-events-none opacity-70' : ''}>
                                <PixelSubmitButton
                                    text={submitting ? 'Enviando...' : 'Enviar mi historia'}
                                    // onClick={handleSubmit}
                                    disabled={submitting}
                                />
                            </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
