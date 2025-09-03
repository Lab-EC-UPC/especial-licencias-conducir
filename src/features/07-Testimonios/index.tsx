import { useState } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';

type CausaOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
};

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

export const Testimonios = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayContent, setOverlayContent] = useState<{ title: string; content: string }>({ title: '', content: '' });

    const testimonios = [
        {
            nombre: "Ana Paula Díez",
            texto: "Siento que los circuitos y los evaluadores hacen las cosas confusas a propósito, para que tengamos que repetir más veces el proceso y gastar más dinero",
            avatar: "👩🏻‍💼",
            bgColor: "bg-[#58b7cf]"
        },
        {
            nombre: "Anónimo",
            texto: "La falta de transparencia en las condiciones actuales limita nuestras oportunidades",
            avatar: "👨🏻‍💼",
            bgColor: "bg-[#ac5eaa]"
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

    const toggleTab = (tabId: string) => {
        setActiveTab(activeTab === tabId ? null : tabId);
    };

    type Entrevista = { titulo: string; descripcion: string };
    const handleOpenOverlay = (expert: Entrevista) => {
        setOverlayContent({ title: expert.titulo, content: expert.descripcion });
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
        setOverlayContent({ title: '', content: '' });
    };

    return (
      <div>
          <div className="mx-auto container w-full">
              <div className="flex flex-col items-center text-center py-8 px-4">
                  <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 font-bold font-bitcount text-primary">
                      Testimonios
                  </h1>

                  <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-12">
                      {testimonios.map((testimonio, index) => (
                        <div key={index} className="flex items-center gap-6 max-w-lg">
                            <div className={`w-20 h-20 rounded-full ${testimonio.bgColor} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                                {testimonio.avatar}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-[#131A31] mb-2 font-bitcount">
                                    {testimonio.nombre}
                                </h3>
                                <p className="text-[#131A31] text-sm leading-relaxed mb-3">
                                    "{testimonio.texto}"
                                </p>
                                <button className="flex items-center gap-2 text-[#131A31] underline font-medium text-sm transition-colors">
                                    <Play size={12} />
                                    Ver video
                                </button>
                            </div>
                        </div>
                      ))}
                      <div className="hidden lg:block text-[#ac5eaa] text-4xl">
                          ❯
                      </div>
                  </div>
                  <div className="max-w-4xl mx-auto">
                      <h2 className="text-2xl font-bold font-bitcount text-[#131A31] text-center mb-8">
                          ¿Qué dicen las autoridades y organizaciones?
                      </h2>
                      <div className="bg-[#ffaf42] rounded-[25px] p-8 mb-8">
                          <div className="flex flex-wrap justify-center gap-4">
                              {organizaciones.map((org) => (
                                <button
                                  key={org.id}
                                  onClick={() => toggleTab(org.id)}
                                  className={`px-8 py-3 rounded-[15px] text-white font-bold font-bitcount transition-all duration-300 shadow-lg ${org.color} hover:shadow-xl`}
                                >
                                    {org.nombre}
                                </button>
                              ))}
                          </div>
                      </div>
                      {organizaciones.map((org) => (
                        <div key={org.id}>
                            {activeTab === org.id && (
                              <div className="bg-[#ffaf42] rounded-[25px] p-8 text-[#131A31] animate-in slide-in-from-top duration-300">
                                  <div className="flex items-center justify-center mb-6">
                                      <div className={`px-6 py-3 rounded-[15px] text-white font-bold font-bitcount ${org.color} shadow-md`}>
                                          {org.nombre}
                                      </div>
                                      <ChevronDown className="ml-4 text-[#131A31]" size={24} />
                                  </div>
                                  <div className="text-center mb-8">
                                      <p className="text-base leading-relaxed">
                                          {org.contenido.descripcion}
                                      </p>
                                  </div>
                                  <div className="space-y-6">
                                      {org.contenido.entrevistas.map((entrevista, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-6 cursor-pointer"
                                          onClick={() => handleOpenOverlay(entrevista)}
                                        >
                                            <div className="w-16 h-16 bg-[#ffaf42] border-4 border-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                                            <span className="text-[#ffaf42] font-bold font-bitcount text-sm">
                                                                {index + 1}
                                                            </span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#131A31] leading-relaxed">
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