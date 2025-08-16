import pixel_bottom from "@/assets/pixel-bottom.png";
import {useState} from "react";
import {AprobadosIcon} from "@/assets/icons/AprobadosIcon.tsx";
import {GeneroIcon} from "@/assets/icons/GeneroIcon.tsx";
import {EdadIcon} from "@/assets/icons/EdadIcon.tsx";
import {MapaIcon} from "@/assets/icons/MapaIcon.tsx";
import {AprobadosChart} from "@/features/04-Radiografia-Nacional/components/AprobadosChart.tsx";
import {GeneroChart} from "@/features/04-Radiografia-Nacional/components/GeneroChart.tsx";
import {EdadChart} from "@/features/04-Radiografia-Nacional/components/EdadChart.tsx";
import {MapaChart} from "@/features/04-Radiografia-Nacional/components/MapaChart.tsx";

export const RadiografiaNacional = () => {
  const [selected, setSelected] = useState<string>("aprobados");

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
            <h1 className="text-5xl mb-4 font-bold font-bitcount">Radiografía Nacional</h1>
            <p className="w-full md:max-w-2/3 font-medium text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex items-center justify-center py-8 relative w-full min-h-[70vh]">
              <div>
                {selected === "aprobados" && <AprobadosChart />}
                {selected === "genero" && <GeneroChart />}
                {selected === "edad" && <EdadChart />}
                {selected === "mapa" && <MapaChart />}
              </div>
              <div className="absolute right-0">
                <div className="flex flex-col items-center relative">
                  <div className="absolute right-0 translate-x-full w-2 bg-black top-[6px] bottom-[16px]" />

                  <div className="relative w-full flex justify-center">
                    <div className="relative bg-[#294368] h-2 w-[80%]">
                      <div className="absolute -right-2 top-0 h-2 w-2 bg-black" />
                    </div>
                  </div>
                  <div className="bg-[#294368] p-4">
                    <div className="flex flex-col items-center gap-4">
                      <button
                        onClick={() => setSelected("aprobados")}
                        className={`p-2 hover:cursor-pointer ${selected === "aprobados" ? "text-white" : "text-[#3C5C8B]"}`}
                      >
                        <AprobadosIcon />
                      </button>
                      <button
                        onClick={() => setSelected("genero")}
                        className={`p-2 hover:cursor-pointer ${selected === "genero" ? "text-white" : "text-[#3C5C8B]"}`}
                      >
                        <GeneroIcon />
                      </button>
                      <button
                        onClick={() => setSelected("edad")}
                        className={`p-2 hover:cursor-pointer ${selected === "edad" ? "text-white" : "text-[#3C5C8B]"}`}
                      >
                        <EdadIcon />
                      </button>
                      <button
                        onClick={() => setSelected("mapa")}
                        className={`p-2 hover:cursor-pointer ${selected === "mapa" ? "text-white" : "text-[#3C5C8B]"}`}
                      >
                        <MapaIcon />
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full flex justify-center">
                    <div className="relative bg-[#294368] h-2 w-[80%]">
                      <div className="absolute -left-2 bottom-0 h-2 w-2 bg-black" />
                      <div className="absolute -right-2 bottom-0 h-2 w-2 bg-black" />
                    </div>
                  </div>
                  <div className="bg-black h-2 w-[80%]" />
                </div>
              </div>
            </div>
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
