import { useState } from 'react';
import { ChevronDown, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Types
type CausaOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
};

type Testimonio = {
    nombre: string;
    texto: string;
    avatarUrl: string;
    bgColor: string;
};

type Empresa = {
    nombre: string;
    texto: string;
    avatarUrl: string;
    bgColor: string;
};

type Entrevista = {
    titulo: string;
    descripcion: string;
};

// Components
const CausaOverlay = ({ isOpen, onClose, title, content }: CausaOverlayProps) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[30px] max-w-3xl w-full max-h-[80vh] overflow-auto p-10 relative shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[#868686] hover:text-[#131a31] transition-colors"
              >
                  <X size={28} />
              </button>
              <h2 className="text-2xl font-bold font-bitcount text-[#131a31] mb-6 pr-12">{title}</h2>
              <div className="text-[#131a31] leading-relaxed whitespace-pre-line">
                  {content}
              </div>
          </div>
      </div>
    );
};

const TestimonioCard = ({ testimonio }: { testimonio: Testimonio }) => (
  <div className="flex items-center gap-4 md:gap-6 max-w-lg mx-auto px-4">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${testimonio.bgColor} flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden`}>
          <img
            src={testimonio.avatarUrl}
            alt={testimonio.nombre}
            className="object-cover w-full h-full rounded-full"
            sizes="(max-width: 375px) 48px, (max-width: 820px) 64px, 80px"
            style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}
          />
      </div>
      <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base md:text-lg text-[#131A31] mb-2 font-bitcount">
              {testimonio.nombre}
          </h3>
          <p className="text-[#131A31] text-xs md:text-sm leading-relaxed mb-3">
              "{testimonio.texto}"
          </p>
          <button className="flex items-center gap-2 text-[#131A31] underline font-medium text-xs md:text-sm hover:text-[#ac5eaa] transition-colors">
              <Play size={12} />
              Ver video
          </button>
      </div>
  </div>
);

const EmpresaCard = ({ empresa }: { empresa: Empresa }) => (
  <div className="flex items-center gap-4 md:gap-6 max-w-lg mx-auto px-4">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${empresa.bgColor} flex items-center justify-center shadow-lg flex-shrink-0 relative overflow-hidden`}>
          <div className="absolute inset-2 bg-white rounded-full opacity-20"></div>
          <div className="absolute inset-3 bg-white rounded-full opacity-40"></div>
          <img
            src={empresa.avatarUrl}
            alt={empresa.nombre}
            className="object-cover w-full h-full rounded-full relative z-10"
            sizes="(max-width: 375px) 48px, (max-width: 820px) 64px, 80px"
            style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}
          />
      </div>
      <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base md:text-lg text-[#131A31] mb-2 font-bitcount">
              {empresa.nombre}
          </h3>
          <p className="text-[#131A31] text-xs md:text-sm leading-relaxed mb-3">
              "{empresa.texto}"
          </p>
          <button className="text-[#131A31] underline font-medium text-xs md:text-sm hover:text-[#ac5eaa] transition-colors">
              Ver más
          </button>
      </div>
  </div>
);

// Main Component
export const Testimonios = () => {
    // States
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayContent, setOverlayContent] = useState<{ title: string; content: string }>({
        title: '',
        content: ''
    });
    const [currentTestimonioSlide, setCurrentTestimonioSlide] = useState(0);
    const [currentEmpresaSlide, setCurrentEmpresaSlide] = useState(0);

    // Data
    const testimonios: Testimonio[] = [
        {
            nombre: "Ana Paula Díez",
            texto: "Siento que los circuitos y los evaluadores hacen las cosas confusas a propósito, para que tengamos que repetir más veces el proceso y gastar más dinero",
            avatarUrl: '/anaPaula.png',
            bgColor: "bg-[#58b7cf]"
        },
        {
            nombre: "Anónimo",
            texto: "La falta de transparencia en las condiciones actuales limita nuestras oportunidades",
            avatarUrl: "/anonimo1.png",
            bgColor: "bg-[#ac5eaa]"
        },
        {
            nombre: "María González",
            texto: "El proceso debería ser más claro y accesible para todos los ciudadanos",
            avatarUrl: "/avatars/maria.jpg",
            bgColor: "bg-[#ff6b6b]"
        }
    ];

    const empresas: Empresa[] = [
        {
            nombre: "Escuela Dakar Perú",
            texto: "Siento que los circuitos y los evaluadores hacen las cosas confusas a propósito, para que tengamos que repetir más veces el proceso y gastar más dinero",
            avatarUrl: "dakarPeru.png",
            bgColor: "bg-[#ff69b4]"
        },
        {
            nombre: "Escuela Automovilística",
            texto: "La falta de transparencia en las condiciones actuales limita nuestras oportunidades",
            avatarUrl: "/escuelaJose.png",
            bgColor: "bg-[#ac5eaa]"
        },
        {
            nombre: "Instituto Vial",
            texto: "Necesitamos procesos más transparentes y eficientes",
            avatarUrl: "/avatars/vial.jpg",
            bgColor: "bg-[#4ecdc4]"
        }
    ];

    const organizaciones = [
        {
            id: 'mtc',
            nombre: 'MTC',
            color: 'bg-[#58b7cf]',
            contenido: {
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat (explicación de la función del MTC).(24)",
                entrevistas: [
                    {
                        titulo: "Entrevista 01",
                        descripcion: "ASDASD"
                    },
                    {
                        titulo: "Entrevista 02",
                        descripcion: "dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(20)"
                    }
                ]
            }
        },
        {
            id: 'contraloria',
            nombre: 'Contraloría',
            color: 'bg-[#58b7cf]',
            contenido: {
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat (explicación de la función de la Contraloría).(18)",
                entrevistas: [
                    {
                        titulo: "Entrevista 01",
                        descripcion: "dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(22)"
                    },
                    {
                        titulo: "Entrevista 02",
                        descripcion: "dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(19)"
                    }
                ]
            }
        }
    ];

    // Handlers
    const nextTestimonioSlide = () => {
        setCurrentTestimonioSlide((prev) => (prev + 1) % testimonios.length);
    };

    const prevTestimonioSlide = () => {
        setCurrentTestimonioSlide((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    };

    const nextEmpresaSlide = () => {
        setCurrentEmpresaSlide((prev) => (prev + 1) % empresas.length);
    };

    const prevEmpresaSlide = () => {
        setCurrentEmpresaSlide((prev) => (prev - 1 + empresas.length) % empresas.length);
    };

    const toggleTab = (tabId: string) => {
        setActiveTab(activeTab === tabId ? null : tabId);
    };

    const handleOpenOverlay = (expert: Entrevista) => {
        setOverlayContent({ title: expert.titulo, content: expert.descripcion });
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
        setOverlayContent({ title: '', content: '' });
    };

    // Render
    return (
      <div className="bg-yellow-100 min-h-screen">
          <div className="mx-auto container w-full px-4">
              <div className="flex flex-col items-center text-center py-8">
                  {/* Título Principal */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold font-bitcount text-[#131A31]">
                      Testimonios
                  </h1>

                  {/* Slider de Testimonios */}
                  <div className="w-full mb-12 relative">
                      <div className="flex items-center justify-center">
                          <button
                            onClick={prevTestimonioSlide}
                            className="hidden md:flex absolute left-4 lg:left-8 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-shadow text-[#ac5eaa]"
                          >
                              <ChevronLeft size={24} />
                          </button>

                          <div className="w-full max-w-lg">
                              <TestimonioCard testimonio={testimonios[currentTestimonioSlide]} />
                          </div>

                          <button
                            onClick={nextTestimonioSlide}
                            className="hidden md:flex absolute right-4 lg:right-8 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-shadow text-[#ac5eaa]"
                          >
                              <ChevronRight size={24} />
                          </button>
                      </div>

                      {/* Indicadores móvil */}
                      <div className="flex justify-center mt-6 gap-2 md:hidden">
                          {testimonios.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonioSlide(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentTestimonioSlide ? 'bg-[#ac5eaa]' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                      </div>

                      {/* Botones de navegación móvil */}
                      <div className="flex justify-center gap-4 mt-4 md:hidden">
                          <button
                            onClick={prevTestimonioSlide}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#ac5eaa]"
                          >
                              <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextTestimonioSlide}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#ac5eaa]"
                          >
                              <ChevronRight size={20} />
                          </button>
                      </div>
                  </div>

                  {/* Sección Empresas */}
                  <div className="w-full mb-12">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 font-bold font-bitcount text-[#131A31]">
                          Empresas
                      </h2>

                      <div className="relative">
                          <div className="flex items-center justify-center">
                              <button
                                onClick={prevEmpresaSlide}
                                className="hidden md:flex absolute left-4 lg:left-8 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-shadow text-[#ac5eaa]"
                              >
                                  <ChevronLeft size={24} />
                              </button>

                              <div className="w-full max-w-lg">
                                  <EmpresaCard empresa={empresas[currentEmpresaSlide]} />
                              </div>

                              <button
                                onClick={nextEmpresaSlide}
                                className="hidden md:flex absolute right-4 lg:right-8 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-shadow text-[#ac5eaa]"
                              >
                                  <ChevronRight size={24} />
                              </button>
                          </div>

                          {/* Indicadores móvil */}
                          <div className="flex justify-center mt-6 gap-2 md:hidden">
                              {empresas.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentEmpresaSlide(index)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentEmpresaSlide ? 'bg-[#ac5eaa]' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                          </div>

                          {/* Botones de navegación móvil */}
                          <div className="flex justify-center gap-4 mt-4 md:hidden">
                              <button
                                onClick={prevEmpresaSlide}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#ac5eaa]"
                              >
                                  <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={nextEmpresaSlide}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#ac5eaa]"
                              >
                                  <ChevronRight size={20} />
                              </button>
                          </div>
                      </div>
                  </div>

                  {/* Sección Autoridades */}
                  <div className="max-w-4xl mx-auto w-full">
                      <h2 className="text-xl md:text-2xl font-bold font-bitcount text-[#131A31] text-center mb-8">
                          ¿Qué dicen las autoridades y organizaciones?
                      </h2>

                      <div className="bg-[#ffaf42] rounded-[25px] p-6 md:p-8 mb-8">
                          <div className="flex flex-col sm:flex-row justify-center gap-4">
                              {organizaciones.map((org) => (
                                <button
                                  key={org.id}
                                  onClick={() => toggleTab(org.id)}
                                  className={`px-6 md:px-8 py-3 rounded-[15px] text-white font-bold font-bitcount transition-all duration-300 shadow-lg ${org.color} hover:shadow-xl text-sm md:text-base`}
                                >
                                    {org.nombre}
                                </button>
                              ))}
                          </div>
                      </div>

                      {organizaciones.map((org) => (
                        <div key={org.id}>
                            {activeTab === org.id && (
                              <div className="bg-[#ffaf42] rounded-[25px] p-6 md:p-8 text-[#131A31] animate-in slide-in-from-top duration-300">
                                  <div className="flex items-center justify-center mb-6">
                                      <div className={`px-4 md:px-6 py-3 rounded-[15px] text-white font-bold font-bitcount ${org.color} shadow-md text-sm md:text-base`}>
                                          {org.nombre}
                                      </div>
                                      <ChevronDown className="ml-4 text-[#131A31]" size={24} />
                                  </div>

                                  <div className="text-center mb-8">
                                      <p className="text-sm md:text-base leading-relaxed">
                                          {org.contenido.descripcion}
                                      </p>
                                  </div>

                                  <div className="space-y-4 md:space-y-6">
                                      {org.contenido.entrevistas.map((entrevista, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-4 md:gap-6 cursor-pointer hover:bg-yellow-200 hover:bg-opacity-50 rounded-lg p-2 transition-colors"
                                          onClick={() => handleOpenOverlay(entrevista)}
                                        >
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ffaf42] border-4 border-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                                                            <span className="text-[#ffaf42] font-bold font-bitcount text-xs md:text-sm">
                                                                {index + 1}
                                                            </span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[#131A31] leading-relaxed text-sm md:text-base">
                                                    <span className="font-bold font-bitcount">{entrevista.titulo}</span> {entrevista.descripcion}
                                                </p>
                                            </div>
                                        </div>
                                      ))}
                                  </div>
                              </div>
                            )}
                        </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Overlay */}
          <CausaOverlay
            isOpen={isOverlayOpen}
            onClose={handleCloseOverlay}
            title={overlayContent.title}
            content={overlayContent.content}
          />
      </div>
    );
};

export default Testimonios;
