import {useRef, useState} from "react";
import {Tooltip} from "@heroui/react";
import {type PeruRegion, peruRegions} from "@/features/04-Radiografia-Nacional/utils/peruRegions.ts";
import TOOLTIP_BG from "@/assets/mapa-chart-cloud.png";
import {MapDataIcon} from "@/assets/icons/MapDataIcon.tsx";
import {MapDataIconHalf} from "@/assets/icons/MapDataIconHalf.tsx";
import {Heatline} from "@/features/04-Radiografia-Nacional/components/Heatline.tsx";

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

  const renderDotsTopLeft = (value: number, className: string) => {
    const { full, half } = getIconsFromValue(value || 0);
    const count = full + half;
    const totalSlots = 9;
    const blanks = Math.max(0, totalSlots - count);

    return (
      <div className="inline-grid [grid-template-columns:repeat(3,1rem)] gap-x-1 gap-y-1">
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
              <Tooltip
                classNames={{content: "bg-transparent p-0 shadow-none border-none"}}
                content={
                  <div
                    className="w-54 h-44 bg-no-repeat bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${TOOLTIP_BG})` }}
                  >
                    {region.subregions?.length ? (
                      <div className="grid grid-cols-2 gap-2 px-4 pt-2">
                        {region.subregions.map(sr => (
                          <button
                            key={sr.city}
                            className={`hover:cursor-pointer ${
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
                      <h1 className="text-center text-xs leading-none pt-2">{region.name}</h1>
                    )}
                    {(() => {
                      const { mujer, hombre } = getRegionGenderData(region, selectedCity);
                      return (
                        <div className="flex w-full gap-4 items-start justify-center text-center mt-1">
                          <div>
                            <h1 className="font-bitcount font-bold text-xl md:text-2xl">{mujer}</h1>
                            {renderDotsTopLeft(mujer, "text-yellow")}
                            <h1 className="text-lg md:text-xl">M</h1>
                          </div>
                          <div>
                            <h1 className="font-bitcount font-bold text-xl md:text-2xl">{hombre}</h1>
                            {renderDotsTopLeft(hombre, "text-skyblue")}
                            <h1 className="text-lg md:text-xl">H</h1>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                }
              >
                <g key={index}>
                  <path
                    className="transition duration-200 ease-in-out relative"
                    fill={region.fill}
                    d={region.path}
                    stroke="#131A31"
                    strokeWidth="2"
                  />
                </g>
              </Tooltip>
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
        <div className="flex gap-4 w-full items-start">
          <h4 className="text-sm md:text-md text-white whitespace-nowrap font-light leading-none">
            Grado de aprobación
          </h4>
          <Heatline />
        </div>
      </div>
    </div>
  )
}
