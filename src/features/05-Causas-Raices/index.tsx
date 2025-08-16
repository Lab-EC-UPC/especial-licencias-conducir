import { useState } from 'react';
import { CausaOverlay } from './components/CausaOverlay';
import PixelButton from "@/components/PixelButton.tsx";

interface Expert {
  name: string;
  quote: string;
  fullText: string;
  image: string;
}

const EXPERT_CONTENT: Expert[] = [
  {
    name: "Nombre experto 1",
    quote: "Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    fullText: "Resumen causa en base a la entrevista al experto (Máx 210 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.\n\nEtiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat. leo eget bibendum sodales. auque velit cursus nunc.",
    image: "https://via.placeholder.com/100" // Reemplaza esto con la URL de la foto del primer experto
  },
  {
    name: "Nombre experto 2",
    quote: "Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    fullText: "Resumen causa en base a la entrevista al experto (Máx 210 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.\n\nEtiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat. leo eget bibendum sodales. auque velit cursus nunc.",
    image: "https://via.placeholder.com/100" // Reemplaza esto con la URL de la foto del segundo experto
  },
  {
    name: "Nombre experto 3",
    quote: "Cita causa (máx 20-25 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    fullText: "Resumen causa en base a la entrevista al experto (Máx 210 palabras) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat. leo eget bibendum sodales. auque velit cursus nunc.",
    image: "https://via.placeholder.com/100" // Reemplaza esto con la URL de la foto del tercer experto
  },
];

const COLORS = ['bg-[#58b7cf]', 'bg-[#ffaf42]', 'bg-[#ed548c]'];

export const CausasRaices = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState({ title: '', content: '' });

  const handleOpenOverlay = (expert: Expert) => {
    setOverlayContent({ title: expert.name, content: expert.fullText });
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setOverlayContent({ title: '', content: '' });
  };

  return (
    <>
      <div className="mx-auto container w-full my-32">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl mb-8 font-bold font-bitcount text-[#131A31]">
            Causas Raíces
          </h1>
          <p className="w-full md:max-w-2/3 font-medium text-xl mb-24">
            Bajada de 2 líneas (máx 15-20 palabras) Lorem ips um dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center mx-auto max-w-6xl w-full">
            {EXPERT_CONTENT.map((expert, index) => (
              <div key={index} className="flex flex-col items-center relative w-full max-w-sm">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-lg absolute -top-12 z-10 overflow-hidden">
                  {expert.image ? (
                    <img src={expert.image} alt={`Foto de ${expert.name}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-500 text-center">FOTO DEL EXPERTO</span>
                  )}
                </div>
                <div className={`${COLORS[index % COLORS.length]} p-8 rounded-[30px] shadow-lg flex flex-col items-center w-full pt-16`}>
                  <h3 className="text-xl font-bold text-[#131A31] mb-2 mt-2">{expert.name}</h3>
                  <p className="text-sm text-[#131A31] mb-6">{expert.quote}</p>
                  <PixelButton
                    text="Ver más"
                    variant="sand"
                    onClick={() => handleOpenOverlay(expert)}
                  />
                </div>
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
    </>
  );
};