import { useState } from 'react';
import { CausaOverlay } from './components/CausaOverlay';
import { PixelCard } from './components/PixelCard';

interface Expert {
  name: string;
  quote: string;
  fullText: string;
  image: string;
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
    content: string;
    colors: ColorConfig;
}


const EXPERT_CONTENT: Expert[] = [
  {
    name: "Elvis Santi",
    quote: "\"Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\"",
    fullText: "Aquí debería ir el pregunta-respuesta. Por ahora, un placeholder: El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar. También puede escribir una palabra clave para buscar en línea el vídeo que mejor se adapte a su documento. Para otorgar a su documento un aspecto profesional, Word proporciona encabezados, pies de página, páginas de portada y diseños de cuadro de texto que se complementan entre sí. Por ejemplo, puede agregar una portada coincidente, el encabezado y la barra lateral. Haga clic en Insertar y elija los elementos que desee de las distintas galerías. Los temas y estilos también ayudan a mantener su documento coordinado. Cuando haga clic en Diseño y seleccione un tema nuevo, cambiarán las imágenes, gráficos y gráficos SmartArt para que coincidan con el nuevo tema. Al aplicar los estilos, los títulos cambian para coincidir con el nuevo tema. Ahorre tiempo en Word con nuevos botones que se muestran donde se necesiten. Para cambiar la forma en que se ajusta una imagen en el documento, haga clic y aparecerá un botón de opciones de diseño junto a la imagen. Cuando trabaje en una tabla, haga clic donde desee agregar una fila o columna y, a continuación, haga clic en el signo más. La lectura es más fácil, también, en la nueva vista de lectura. Puede contraer partes del documento y centrarse en el texto que desee. Si necesita detener la lectura antes de llegar al final, Word le recordará dónde dejó la lectura, incluso en otros dispositivos.",
    image: "https://i.ibb.co/VWjTQ7M1/elvis-Santi.jpg",
  },
  {
    name: "Federico Battifora",
    quote: "\"Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\"",
    fullText: "Aquí debería ir el pregunta-respuesta. Por ahora, un placeholder: El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar. También puede escribir una palabra clave para buscar en línea el vídeo que mejor se adapte a su documento. Para otorgar a su documento un aspecto profesional, Word proporciona encabezados, pies de página, páginas de portada y diseños de cuadro de texto que se complementan entre sí. Por ejemplo, puede agregar una portada coincidente, el encabezado y la barra lateral. Haga clic en Insertar y elija los elementos que desee de las distintas galerías. Los temas y estilos también ayudan a mantener su documento coordinado. Cuando haga clic en Diseño y seleccione un tema nuevo, cambiarán las imágenes, gráficos y gráficos SmartArt para que coincidan con el nuevo tema. Al aplicar los estilos, los títulos cambian para coincidir con el nuevo tema. Ahorre tiempo en Word con nuevos botones que se muestran donde se necesiten. Para cambiar la forma en que se ajusta una imagen en el documento, haga clic y aparecerá un botón de opciones de diseño junto a la imagen. Cuando trabaje en una tabla, haga clic donde desee agregar una fila o columna y, a continuación, haga clic en el signo más. La lectura es más fácil, también, en la nueva vista de lectura. Puede contraer partes del documento y centrarse en el texto que desee. Si necesita detener la lectura antes de llegar al final, Word le recordará dónde dejó la lectura, incluso en otros dispositivos.",
    image: "https://i.ibb.co/FqV98m51/federico-Battifora.jpg",
  },
  {
    name: "Luis Quispe",
    quote: "\"Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\"",
    fullText: "Aquí debería ir el pregunta-respuesta. Por ahora, un placeholder: El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar. También puede escribir una palabra clave para buscar en línea el vídeo que mejor se adapte a su documento. Para otorgar a su documento un aspecto profesional, Word proporciona encabezados, pies de página, páginas de portada y diseños de cuadro de texto que se complementan entre sí. Por ejemplo, puede agregar una portada coincidente, el encabezado y la barra lateral. Haga clic en Insertar y elija los elementos que desee de las distintas galerías. Los temas y estilos también ayudan a mantener su documento coordinado. Cuando haga clic en Diseño y seleccione un tema nuevo, cambiarán las imágenes, gráficos y gráficos SmartArt para que coincidan con el nuevo tema. Al aplicar los estilos, los títulos cambian para coincidir con el nuevo tema. Ahorre tiempo en Word con nuevos botones que se muestran donde se necesiten. Para cambiar la forma en que se ajusta una imagen en el documento, haga clic y aparecerá un botón de opciones de diseño junto a la imagen. Cuando trabaje en una tabla, haga clic donde desee agregar una fila o columna y, a continuación, haga clic en el signo más. La lectura es más fácil, también, en la nueva vista de lectura. Puede contraer partes del documento y centrarse en el texto que desee. Si necesita detener la lectura antes de llegar al final, Word le recordará dónde dejó la lectura, incluso en otros dispositivos.",
    image: "https://i.ibb.co/cXJndfs5/luis-Quispe.jpg",
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
      <div className="mx-auto container w-full my-32">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 font-bold font-bitcount text-primary">
            Causas Raíces
          </h1>
          <p className="w-full md:max-w-2/3 font-medium text-md md:text-xl mb-16 md:mb-24">
            Bajada de 5 líneas Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo
          </p>

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-center items-start mx-auto max-w-6xl w-full px-4">
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