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
            <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 font-bold font-bitcount text-white">
              Lesiones y muertes nacionales
            </h1>
            <p className="w-full md:max-w-2/3 font-medium text-md md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
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
