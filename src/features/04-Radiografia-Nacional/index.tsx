import {useState} from "react";
import pixel_bottom from "@/assets/pixel-bottom.png";
import {AprobadosIcon} from "@/assets/icons/AprobadosIcon.tsx";
import {GeneroIcon} from "@/assets/icons/GeneroIcon.tsx";
import {EdadIcon} from "@/assets/icons/EdadIcon.tsx";
import {MapaIcon} from "@/assets/icons/MapaIcon.tsx";
import {AprobadosChart} from "@/features/04-Radiografia-Nacional/components/AprobadosChart.tsx";
import {GeneroChart} from "@/features/04-Radiografia-Nacional/components/GeneroChart.tsx";
import {EdadChart} from "@/features/04-Radiografia-Nacional/components/EdadChart.tsx";
import {MapaChart} from "@/features/04-Radiografia-Nacional/components/MapaChart.tsx";
import CHART_INFO from "@/assets/chart-info.png";

type TabKey = "aprobados" | "genero" | "edad" | "mapa";

const INFO: Record<TabKey, { title: string; description: string }> = {
  aprobados: {
    title: "Resultados del examen de conocimientos",
    description:
      "Entre 2020 y 2024, se rindieron más de 3.3 millones de exámenes teóricos para obtener licencias A1. En promedio, dos de cada tres personas aprueban.",
  },
  genero: {
    title: "Composición y rendimiento de los postulantes según género",
    description:
      "Solo uno de cada diez exámenes fue rendido por mujeres. Sin embargo, su tasa de aprobación es de 78.4%. En los hombres es de 66.1%.",
  },
  edad: {
    title: "Tasa de aprobación, por sexo y edad",
    description:
      "La mayor cantidad de personas que rinden el examen tienen entre 28 y 38 años (32.4%). El subgrupo con mayor tasa de aprobación son las mujeres entre 17 y 27 años: 84%.",
  },
  mapa: {
    title: "Tasa de aprobación, por región",
    description:
      "Las regiones del país presentan distintos niveles de aprobación. Pulsa una región para explorar, por separado, la tasa de aprobación de hombres y mujeres.",
  },
};

const TABS: { key: TabKey; Icon: React.FC }[] = [
  { key: "aprobados", Icon: AprobadosIcon },
  { key: "genero", Icon: GeneroIcon },
  { key: "edad", Icon: EdadIcon },
  { key: "mapa", Icon: MapaIcon },
];

export const RadiografiaNacional = () => {
  const [selected, setSelected] = useState<TabKey>("aprobados");
  const { title, description } = INFO[selected];

  return (
    <div>
      <div className="bg-primary">
        <div className="mx-auto container w-full min-h-screen">
          <div className="flex flex-col items-center text-center text-white h-full py-16 pb-24 px-4">
            <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount">
              Radiografía Nacional
            </h1>

            <div className="w-full xl:max-w-3xl font-medium text-md xl:text-xl mx-auto">
              <h2 className="text-lg md:text-xl xl:text-2xl font-semibold">
                {title}
              </h2>
              <p className="text-sm md:text-lg font-light">{description}</p>
            </div>

            <div className="grid xl:flex items-center justify-center py-8 relative w-full min-h-[70vh]">
              <div className="xl:absolute right-0">
                <div className="flex xl:flex-col h-full items-center justify-center relative">
                  <div className="hidden xl:flex absolute right-0 translate-x-full w-2 bg-black top-[6px] bottom-[16px]" />
                  <div className="relative w-full hidden xl:flex justify-center">
                    <div className="relative bg-[#294368] h-2 w-[80%]">
                      <div className="absolute -right-2 top-0 h-2 w-2 bg-black" />
                    </div>
                  </div>

                  <div className="relative h-12 w-2 flex xl:hidden">
                    <div className="absolute h-2 w-2 -bottom-2 bg-black" />
                    <div className="w-full h-full bg-[#294368]" />
                  </div>

                  <div>
                    <div className="bg-[#294368] p-2 xl:p-4 w-full">
                      <div className="flex xl:flex-col items-center gap-4">
                        {TABS.map(({ key, Icon }) => {
                          const active = selected === key;
                          return (
                            <button
                              key={key}
                              onClick={() => setSelected(key)}
                              aria-pressed={active}
                              className={`p-2 transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 ${
                                active ? "text-white" : "text-[#3C5C8B]"
                              }`}
                              title={INFO[key].title}
                            >
                              <Icon />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="h-2 w-full bg-black flex xl:hidden" />
                  </div>

                  <div className="relative w-full hidden xl:flex justify-center">
                    <div className="relative bg-[#294368] h-2 w-[80%]">
                      <div className="absolute -left-2 bottom-0 h-2 w-2 bg-black" />
                      <div className="absolute -right-2 bottom-0 h-2 w-2 bg-black" />
                    </div>
                  </div>
                  <div className="bg-black h-2 w-[80%] hidden xl:flex" />

                  <div className="relative h-12 w-2 flex xl:hidden">
                    <div className="absolute h-2 w-2 -top-2 bg-black" />
                    <div className="w-full h-full bg-[#294368]" />
                    <div className="absolute h-12 w-2 -right-2 bg-black" />
                    <div className="absolute h-2 w-2 -bottom-2 bg-black" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 right-0 translate-x-1/5 hidden xl:flex flex-col items-center w-32 gap-2">
                <p className="text-center text-xs">Haz clic en los íconos para conocer la data</p>
                <img src={CHART_INFO} alt="Información" className="w-16 h-auto" />
              </div>

              <div className="py-4 h-[80vh] md:h-[70vh] xl:h-[75vh] flex flex-col justify-center items-center">
                {selected === "aprobados" && <AprobadosChart />}
                {selected === "genero" && <GeneroChart />}
                {selected === "edad" && <EdadChart />}
                {selected === "mapa" && <MapaChart />}
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
  );
};
