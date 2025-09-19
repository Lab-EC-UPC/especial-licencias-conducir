import {PeruMap} from "@/features/06-Lesiones-Muertes-Nacionales/components/PeruMap.tsx";
import pixel_bottom from "@/assets/pixel-bottom.png";

export const LesionesMuertesNacionales = () => {

  return (
    <div>
      <img
        src={pixel_bottom}
        alt="Pixel Bottom"
        className="w-full"
      />
      <div className="bg-primary">
        <div className="mx-auto container w-full min-h-screen">
          <div className="flex flex-col items-center text-center text-white h-full py-16 px-4">
            <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount">
              Lesiones y muertes a nivel nacional
            </h1>
            <p className="w-full md:max-w-2/3 font-medium text-md md:text-xl">
              En Lima Metropolitana, entre enero y julio de 2025, han fallecido 1.668 personas en 847
              accidentes mortales. La mayoría (93,3%), ocurrieron en zonas urbanas, especialmente en
              las avenidas. Pese a estos indicadores, el examen de conducir en el Perú aún se sigue
              realizando en un circuito cerrado.
            </p>
            <div className="h-[60vh] my-16">
              <PeruMap />
            </div>
            <p className="w-full md:max-w-2/3 font-medium">
              Haz clic en cada departamento para conocer la situación
            </p>
          </div>
        </div>
      </div>
      <img
        src={pixel_bottom}
        alt="Pixel Bottom"
        className="w-full scale-y-[-1] -translate-y-[2px]"
      />
    </div>
  )
}
