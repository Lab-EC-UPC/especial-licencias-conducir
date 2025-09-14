import {ChevronLeft, ChevronRight, Play} from "lucide-react";
import {useState} from "react";

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

export const TestimoniosSection = () => {
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
      avatarUrl: "corrupcion.png",
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

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount">
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
    </div>
  )
}