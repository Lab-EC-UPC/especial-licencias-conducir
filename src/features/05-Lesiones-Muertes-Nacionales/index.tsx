import {PeruMap} from "@/features/05-Lesiones-Muertes-Nacionales/components/PeruMap.tsx";

export const LesionesMuertesNacionales = () => {

  return (
    <div>
      <div className="mx-auto container w-full min-h-screen">
        <div className="flex flex-col items-center text-center h-full">
          <h1 className="text-5xl mb-4 font-bold font-bitcount text-[#131A31]">Lesiones y muertes nacionales</h1>
          <p className="w-full md:max-w-2/3 font-medium">
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
  )
}
