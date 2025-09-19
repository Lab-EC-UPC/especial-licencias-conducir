import React, { useState } from 'react';
import { CausaOverlay } from './components/CausaOverlay';
import { PixelCard } from './components/PixelCard';

interface Expert {
  name: string;
  quote: string;
  fullText: React.ReactNode;
  image: string;
  title: string;
}

// Interfaz para la configuración de colores
interface ColorConfig {
    base: string;
    outline: string;
    light: string;
}

// CAMBIO: Interfaz para los datos que necesita el overlay
interface OverlayData {
    title: string;
    content: React.ReactNode;
    colors: ColorConfig;
}


const EXPERT_CONTENT: Expert[] = [
  {
    name: "Elvis Santi",
    title: "Especialista en seguridad vial",
    quote: "“¿Cómo es posible que una persona que no ha tenido la experiencia de ir a 80 o 100km/h " +
      "obtenga una licencia de conducir? Es irracional y anormal, por parte del centro de examen, " +
      "otorgar el beneficio de conducir por haber recorrido un circuito a 15km/h. Eso es un daño " +
      "tremendo a la seguridad vial del país”.",
    fullText:
      <div className="text-justify">
        <h1 className="font-bold text-lg md:text-xl">¿Qué opinas de los circuitos establecidos en el país para dar los exámenes de conducir?</h1>
        <p className="text-sm md:text-base">
          En ningún circuito del Perú existe una vía que te permita adelantar o entrenar maniobras de
          adelantamiento, los choferes no saben cómo realizar estas maniobras de manera segura, o
          cómo reaccionar correctamente frente a una intersección compleja. Entonces, el problema
          de nuestra seguridad vial es el estándar del centro de evaluación. Como el estándar es muy
          bajo, todas las escuelas de conductores enseñan a conducir a los postulantes a ese nivel.
        </p>
        <br/>
        <p className="text-sm md:text-base">
          El Touring no ha logrado demostrar capacidad de reducir los siniestros del país. El circuito
          de manejo tiene 300 metros aproximadamente y, en la realidad, la velocidad de circulación
          no pasa los 15km/h. ¿Cómo es posible que una persona que no ha tenido la experiencia de
          ir a 80 o 100km/h obtenga una licencia de conducir? Es irracional y anormal, por parte del
          centro de examen, otorgar el beneficio de conducir por haber recorrido un circuito a 15km/h.
          Eso es un daño tremendo a la seguridad vial del país. Y si empezamos a mirar al interior del
          país, los circuitos están peor.
        </p>
      </div>,
    image: "https://i.ibb.co/Rkc190xy/santi.png",
  },
  {
    name: "Federico Battifora",
    title: "Especialista en seguridad vial",
    quote: "“Los exámenes de manejo hoy no evalúan habilidades como la gestión del estrés o de la\n" +
      "agresividad volante. Tampoco se evalúa la capacidad que tienen las personas para tomar\n" +
      "decisiones en escenarios de alto riesgo. El conductor debe estar emocionalmente apto,\n" +
      "porque es muy fácil perder el equilibrio emocional en una ciudad como Lima”.",
    fullText:
      <div className="text-justify">
        <h1 className="font-bold text-lg md:text-xl">La licencia no es un derecho</h1>
        <p className="text-sm md:text-base mb-4">
          La licencia de conducir es una facultad que le otorga el Estado peruano cuando una
          persona cumple con los requisitos adecuados para ser un conductor, sobre todo en una
          ciudad y en un país con un tránsito tan complejo y peligroso. La vía pública es la estancia
          de todos y requiere, evidentemente, de seguridad extrema, porque son los seres humanos
          los que están arriesgando sus vidas. Entonces, el hecho de que 10.000 no puedan aprobar,
          es de repente porque no lo merecen. La licencia de conducir hay que ganársela en un país
          como el nuestro. No es un derecho.
        </p>

        <h1 className="font-bold text-lg md:text-xl">Brecha cultural</h1>
        <p className="text-sm md:text-base mb-4">
          Hay que regenerar los exámenes con un contenido que se adapte a la diversidad regional,
          cultural, geográfica y vial. Una cosa es el pensamiento urbano, otra cosa es el pensamiento
          rural. Una cosa es vivir en Lima y otra cosa es vivir en la Amazonía. En la sierra hay
          caminos estrechos sin señalética, y la mayoría son trochas. La selva está plagada de
          motos, mototaxis y lluvias intensas sin infraestructura adecuada. Son situaciones y regiones
          totalmente diferentes y el concepto de la comprensión de una norma es completamente
          distinto.
        </p>

        <h1 className="font-bold text-lg md:text-xl">Un examen mal diseñado</h1>
        <p className="text-sm md:text-base mb-4">
          Los aspirantes a la licencia de conducir muchas veces aprenden de memoria las respuestas
          y en los exámenes teóricos las repiten como loros, sin comprender con exactitud el espíritu
          de una norma de tránsito. Entonces, los aprendices no internalizan lo que es la prevención
          para la soberanía vial. Si memorizas las respuestas, las vas a responder bien. ¿Pero has
          entendido el espíritu de lo que es un reglamento? No. ¿Has entendido lo que significa un
          comportamiento sin trasgresión en la vida pública? No. ¿El respeto? No. Al no cumplir las
          normas, estás complicando la fluidez vehicular y generando congestión. Y ahí es cuando los
          estados emocionales se empiezan a alterar. Y cuando un estado emocional se altera, viene
          la agresión del uno con el otro. Es una cadena.
        </p>

        <h1 className="font-bold text-lg md:text-xl">Las escuelas de manejo como parte del problema</h1>
        <p className="text-sm md:text-base mb-4">
          Las escuelas de manejo, están fundamentalmente enfocadas en el reglamento de tránsito.
          Y para conducir no solamente necesitas el reglamento de tránsito. Hay un montón de
          conceptos que se tienen que enseñar a un conductor para que realmente deba conducir, y
          más en un país tan complejo como el nuestro.
        </p>

        <h1 className="font-bold text-lg md:text-xl">¿Solución?</h1>
        <p className="text-sm md:text-base mb-4">
          Los exámenes de manejo hoy no evalúan habilidades como la gestión del estrés o de la
          agresividad volante. Tampoco se evalúa la capacidad que tienen las personas para tomar
          decisiones en escenarios de alto riesgo. El conductor debe estar emocionalmente apto,
          porque es muy fácil perder el equilibrio emocional en una ciudad como Lima. Habría que
          crear un nuevo sistema nacional de licencias de conducir, en el que tiene que estar
          involucrado el aspecto educativo. No solamente hay que medir la aptitud de una persona
          que sepa meter los cambios, frenar y cuadrar. La actitud tiene que ver con la conducción
          responsable.
        </p>
      </div>,
    image: "https://i.ibb.co/rfNbkN36/battifora.png",
  },
  {
    name: "Luis Quispe Candia",
    title: "Presidente de la ONG Luz Ámbar y especialista en seguridad vial",
    quote: "“Con conocer las preguntas y respuestas (del examen de manejo), el postulante no " +
      "interioriza la doctrina del Reglamento Nacional de Tránsito. Hay que buscar que la " +
      "obtención de la licencia de conducir tenga mayor rigor”.",
    fullText:
      <div>
        <h1 className="font-bold text-lg md:text-xl">El examen debe ser más riguroso y la licencia gradual</h1>
        <p className="text-sm md:text-base">
          El examen teórico tiene un balotario con 200 preguntas, publicado con las respuestas. De
          esas 200 preguntas, a los postulantes, en forma aleatoria, se les preguntan 40, y tienen que
          resolver un mínimo de 35, para obtener la nota aprobatoria. De modo que es sumamente
          fácil que los candidatos, con lecturas sucesivas, puedan fácilmente responder a las
          preguntas. No hay necesidad de interiorizar el contenido, el mensaje, la doctrina. En el
          examen de manejo, igual: Hay un circuito preestablecido en los tres centros de evaluación.
          En nuestro país, sigue siendo un examen laxo. Hay que buscar que la obtención de la
          licencia de conducir sea con mayor rigor.
        </p>
        <br/>
        <p className="text-sm md:text-base mb-4">
          Además, la renovación de la licencia debe ser en tiempos más cortos (actualmente es cada
          diez años) y dependiendo del comportamiento del conductor, para que los conductores que
          obtengan la licencia gradualmente sean premiados por mantener su récord de conductor
          limpio. Finalmente, la licencia de conducir no es un derecho, es una gracia del Estado hacia
          los ciudadanos.
        </p>
        <h1 className="font-bold text-lg md:text-xl">Las escuelas de manejo como parte del problema</h1>
        <p className="text-sm md:text-base">
          Las escuelas de manejo, que son los que preparan para la licencia A1, no dan el curso
          teórico y práctico concienzudamente, sino más bien como una práctica rápida, y en pocos
          días pueden obtener la licencia de conducir. Conducir un vehículo es un riesgo con el que
          puede causar lesiones y muerte. Para que el conductor tome conciencia de ello, no es
          suficiente tomar el examen del reglamento. Por eso nosotros consideramos necesario
          incorporar el control de emociones e impulsos. De lo contrario, seguiremos alimentando la
          informalidad y comisión de lesiones o muerte en la vía pública.
        </p>
      </div>,
    image: "https://i.ibb.co/23JB7y6j/quispe.png",
  },
];

const COLOR_CONFIGS: ColorConfig[] = [
  { base: '#58b7cf', outline: '#3E95AC', light: '#e4f8ff' },
  { base: '#ffaf42', outline: '#E09B3A', light: '#ffe7cb' },
  { base: '#ac5eaa', outline: '#8F4D8D', light: '#ffd9fe' }
];

export const CausasRaices = () => {
  // CAMBIO: Se unifica el estado en un solo objeto. Si es `null`, el overlay está cerrado.
  // EXPLICACIÓN: Así guardamos toda la info necesaria (título, contenido Y COLORES) en un solo lugar.
  const [overlayData, setOverlayData] = useState<OverlayData | null>(null);

  // CAMBIO: La función ahora también recibe la configuración de color.
  const handleOpenOverlay = (expert: Expert, colors: ColorConfig) => {
    setOverlayData({
      title: expert.name,
      content: expert.fullText,
      colors: colors, // Se guardan los colores
    });
  };

  const handleCloseOverlay = () => {
    setOverlayData(null); // Simplemente se limpia el estado para cerrar
  };

  return (
    <>
      <div className="mx-auto container w-full my-[86px]">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount">
            ¿Qué dicen los especialistas?
          </h1>
          <p className="w-full md:max-w-2/3 font-medium text-md md:text-xl mb-16 md:mb-24">
            ¿Las autoridades involucradas hacen lo suficiente para garantizar exámenes idóneos?
            ¿Está bien tener un circuito cerrado como prueba de la preparación del conductor? ¿El
            examen es lo suficientemente descentralizado? A continuación, los especialistas explican
            por qué el proceso para obtener una licencia de conducir en Perú continúa siendo
            deficiente.
          </p>

          <div className="grid xl:grid-cols-3 gap-34 md:gap-32 xl:gap-8 justify-center items-start mx-auto max-w-6xl w-full px-4">
            {EXPERT_CONTENT.map((expert, index) => {
              const colors = COLOR_CONFIGS[index % COLOR_CONFIGS.length];
              return (
                <PixelCard
                  key={index}
                  expert={expert}
                  colorConfig={colors}
                  // CAMBIO: Se pasan tanto el experto como sus colores al hacer clic.
                  onVerMasClick={() => handleOpenOverlay(expert, colors)}
                />
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CAMBIO: La renderización ahora depende de `overlayData` */}
      {overlayData && (
        <CausaOverlay
          isOpen={!!overlayData}
          onClose={handleCloseOverlay}
          title={overlayData.title}
          content={overlayData.content}
          // ¡Aquí está la clave! Se pasa la configuración de color al overlay.
          colorConfig={overlayData.colors}
        />
      )}
    </>
  );
};