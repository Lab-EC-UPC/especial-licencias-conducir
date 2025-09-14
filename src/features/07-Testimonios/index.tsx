import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import {TestimoniosSection} from "@/features/07-Testimonios/components/TestimoniosSection.tsx";
import {CausasRaicesSection} from "@/features/07-Testimonios/components/CausasRaícesSection.tsx";

// Types
type CausaOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
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

// Main Component
export const Testimonios = () => {
  // States
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState<{ title: string; content: string }>({
    title: '',
    content: ''
  });

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
    // setActiveTab(activeTab === tabId ? null : tabId);
    setActiveTab(tabId);
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
    <div className="mt-[50px] mb-[86px]">
      <div className="mx-auto container w-full px-4">
        <div className="flex flex-col items-center text-center py-8 w-full">
          <div className="mb-[66px]">
            {/*<TestimoniosSection />*/}
          </div>
          <CausasRaicesSection />

          {/* Sección Autoridades */}
          <div className="mx-auto w-full mt-[86px]">
            <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount text-[#131A31]">
              ¿Qué dicen las autoridades y organizaciones?
            </h1>

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
