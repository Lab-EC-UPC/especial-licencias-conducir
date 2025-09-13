import {useRef, useState} from "react";
import {type PeruRegion, peruRegions} from "@/features/04-Radiografia-Nacional/utils/peruRegions.ts";
import TOOLTIP_BG from "@/assets/mapa-chart-cloud.png";
import {MapDataIcon} from "@/assets/icons/MapDataIcon.tsx";
import {MapDataIconHalf} from "@/assets/icons/MapDataIconHalf.tsx";
import {Heatline} from "@/features/04-Radiografia-Nacional/components/Heatline.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@heroui/popover";

export const MapaChart = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("Lima");

  const getRegionGenderData = (region: PeruRegion, selectedCity: string) => {
    const sub = region.subregions?.find(s => s.city === selectedCity);
    return {
      mujer: sub?.mujer ?? region.mujer ?? 0,
      hombre: sub?.hombre ?? region.hombre ?? 0,
    };
  };

  const getIconsFromValue = (value: number) => {
    const total = Math.max(0, Math.min(10, value * 10));
    const full = Math.floor(total);
    const half = total % 1 >= 0.5 ? 1 : 0;
    return { full, half };
  };

  const renderDotsMen = (value: number, className: string) => {
    const { full, half } = getIconsFromValue(value || 0);
    const count = full + half;
    const totalSlots = 9;
    const blanks = Math.max(0, totalSlots - count);

    return (
      <div className="inline-grid [grid-template-columns:repeat(3,1rem)] gap-[3px]">
        {Array.from({ length: full }).map((_, i) => (
          <MapDataIcon key={`full-${i}`} className={`${className} size-5`} />
        ))}
        {Array.from({ length: half }).map((_, i) => (
          <MapDataIconHalf key={`half-${i}`} className={`${className} size-5`} />
        ))}
        {Array.from({ length: blanks }).map((_, i) => (
          <span key={`ph-${i}`} className="size-5 opacity-0" />
        ))}
      </div>
    );
  };

  const renderDotsWomen = (value: number, className: string) => {
    const { full, half } = getIconsFromValue(value || 0);
    const totalSlots = 9;

    return (
      <div
        className="inline-grid [grid-template-columns:repeat(3,1rem)] gap-[3px]"
        style={{ direction: "rtl" }}
      >
        {Array.from({ length: totalSlots }).map((_, i) => {
          if (i < full) {
            return <MapDataIcon key={`full-${i}`} className={`${className} size-5`} />;
          }
          if (i < full + half) {
            return <MapDataIconHalf key={`half-${i}`} className={`${className} size-5`} />;
          }
          return <span key={`ph-${i}`} className="size-5 opacity-0" />;
        })}
      </div>
    );
  };


  return (
    <div className="flex flex-col items-center h-full justify-center relative scrollbar-hidden py-8 md:py-4">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 563 774"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_433_177)">
          {peruRegions.map((region, index) => {
            return (
              <Popover
                triggerScaleOnOpen={false}
                classNames={{content: "bg-transparent p-0 shadow-none border-none"}}
              >
                <PopoverTrigger>
                  <g key={index}>
                    <path
                      className="transition ease-in-out relative hover:cursor-pointer hover:opacity-80 duration-200"
                      fill={region.fill}
                      d={region.path}
                      stroke="#131A31"
                      strokeWidth="2"
                    />
                  </g>
                </PopoverTrigger>
                <PopoverContent>
                  <div
                    className="w-50 h-40"
                    style={{
                      backgroundImage: `url(${TOOLTIP_BG})`,
                      backgroundSize: "100% auto",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full bg-center rounded-lg pb-2">
                      {/*{region.subregions?.length ? (*/}
                      {/*  <div className="relative grid grid-cols-2 gap-2 hover:cursor-pointer">*/}
                      {/*    <motion.div*/}
                      {/*      className="absolute top-0 left-0 h-6 rounded bg-primary w-[50%] object-cover pointer-events-none"*/}
                      {/*      animate={{*/}
                      {/*        x: selectedCity === "Lima" ? "0%" : "105%",*/}
                      {/*      }}*/}
                      {/*      transition={{ type: "spring", stiffness: 300, damping: 25 }}*/}
                      {/*    />*/}
                      {/*    {region.subregions.map(sr => (*/}
                      {/*      <button*/}
                      {/*        key={sr.city}*/}
                      {/*        className={`hover:cursor-pointer rounded z-50 ${*/}
                      {/*          selectedCity === sr.city*/}
                      {/*            ? "text-white"*/}
                      {/*            : "text-primary border-2 border-primary/50"*/}
                      {/*        }`}*/}
                      {/*        onClick={() => setSelectedCity(sr.city)}*/}
                      {/*      >*/}
                      {/*        <label className="px-1">{sr.city}</label>*/}
                      {/*      </button>*/}
                      {/*    ))}*/}
                      {/*  </div>*/}
                      {/*) : (*/}
                      {/*  <h1 className="text-center text-xs leading-none">{region.name}</h1>*/}
                      {/*)}*/}
                      {region.subregions?.length ? (
                        <div className="grid grid-cols-2 gap-2">
                          {region.subregions.map((sr, index) => (
                            <button
                              key={index}
                              className={`!cursor-pointer rounded px-2 ${
                                selectedCity === sr.city
                                  ? "bg-primary text-white"
                                  : "text-primary border-2 border-primary"
                              }`}
                              onClick={() => setSelectedCity(sr.city)}
                            >
                              {sr.city}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <h1 className="text-center text-xs leading-none">{region.name}</h1>
                      )}
                      {(() => {
                        const { mujer, hombre } = getRegionGenderData(region, selectedCity);
                        return (
                          <div className="flex w-full gap-[2px] items-start justify-center text-center">
                            <div>
                              <h1 className="font-bitcount font-semibold text-2xl leading-none text-left">{mujer}</h1>
                              <div>
                                {renderDotsWomen(mujer, "text-yellow")}
                              </div>
                              <h1 className="text-lg md:text-xl leading-none">M</h1>
                            </div>
                            <div>
                              <h1 className="font-bitcount font-semibold text-2xl leading-none text-right">{hombre}</h1>
                              <div>
                                {renderDotsMen(hombre, "text-skyblue")}
                              </div>
                              <h1 className="text-lg md:text-xl leading-none">H</h1>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            );
          })}
        </g>
        <defs>
          <clipPath id="clip0_433_177">
            <rect width="563" height="774" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <div className="mt-8 md:mt-10 text-center w-full">
        <h4 className="text-lg md:text-xl font-medium text-white mb-4">
          Aprobación según región y género
        </h4>
        <div className="flex flex-col md:flex-row gap-4 w-full items-start">
          <h4 className="text-sm md:text-md text-white whitespace-nowrap font-light leading-none hidden md:flex">
            Grado de aprobación
          </h4>
          <Heatline />
          <h4 className="text-sm md:text-md pt-8 text-white whitespace-nowrap font-light leading-none text-center w-full md:hidden">
            Grado de aprobación
          </h4>
        </div>
      </div>
    </div>
  )
}
