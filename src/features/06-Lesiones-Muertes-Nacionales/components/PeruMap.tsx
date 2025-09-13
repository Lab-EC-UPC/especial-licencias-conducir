import {useState, useRef, useEffect} from "react";
import {peruRegions, type PeruRegion } from "../utils/peruRegions";
import {Popover, PopoverContent, PopoverTrigger} from "@heroui/popover";
import TWENTYONE from "@/assets/buttons-map/2021.png";
import TWENTYTWO from "@/assets/buttons-map/2022.png";
import TWENTYTHREE from "@/assets/buttons-map/2023.png";
import TWENTYFOUR from "@/assets/buttons-map/2024.png";
import SELECTED from "@/assets/buttons-map/selected.png";
import { motion } from "framer-motion";

export const PeruMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<PeruRegion | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("2021");
  const [selectedCity, setSelectedCity] = useState<string>("Lima");
  const years: { [key: string]: string } = {
    "2021": "#58b7cf",
    "2022": "#FFAF42",
    "2023": "#ED548C",
    "2024": "#AC5EAA",
  }

  const btnYears: { [key: string]: string } = {
    "2021": TWENTYONE,
    "2022": TWENTYTWO,
    "2023": TWENTYTHREE,
    "2024": TWENTYFOUR,
  };

  const svgRef = useRef<SVGSVGElement | null>(null);

  const toggleSelect = (region: PeruRegion) => {
    setSelectedRegion((prev) =>
      prev?.name === region.name ? null : region
    );
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const svg = svgRef.current;
      if (svg && !svg.contains(e.target as Node)) {
        setSelectedRegion(null);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  return (
    <div className="flex items-center h-full justify-center relative scrollbar-hidden">
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
            const isSelected = selectedRegion?.name === region.name;
            const fillColor = isSelected ? region.fill : "#DBEECB";

            return (
              <Popover
                key={index}
                triggerScaleOnOpen={false}
                classNames={{content: "bg-transparent p-0 shadow-none border-none"}}
                onClose={() => {
                  if (selectedRegion?.name === region.name) setSelectedRegion(null);
                }}
              >
                <PopoverTrigger>
                  <g onClick={() => toggleSelect(region)} style={{ cursor: "pointer" }}>
                    <path
                      className="transition ease-in-out relative hover:cursor-pointer hover:opacity-80 duration-200"
                      fill={fillColor}
                      d={region.path}
                      stroke="#131A31"
                      strokeWidth="2"
                    />
                  </g>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="relative flex flex-col items-center">
                    <div className="w-[95%] h-2" style={{ backgroundColor: years[selectedYear] }} />
                    <div
                      className="relative px-6 py-2 text-black"
                      style={{backgroundColor: years[selectedYear]}}
                    >
                      {region.name !== "Lima" && <h1 className="text-lg md:text-xl mb-2">{region.name}</h1>}
                      {region.name === "Lima" && (
                        <div
                          className="grid grid-cols-2 w-1/2 py-[12px] relative font-bitcount font-semibold text-lg"
                        >
                          <motion.img
                            src={SELECTED}
                            alt="selector"
                            className="absolute top-0 translate-y-[10%] left-0 h-auto w-1/2 object-cover pointer-events-none"
                            animate={{
                              x: selectedCity === "Lima" ? "0%" : "100%",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          />
                          <button
                            onClick={() => setSelectedCity("Lima")}
                            className={`relative z-10 hover:cursor-pointer ${selectedCity === "Lima" ? "text-black" : `text-[${years[selectedYear]}]`}`}
                          >
                            Lima
                          </button>
                          <button
                            onClick={() => setSelectedCity("Callao")}
                            className={`relative z-10 hover:cursor-pointer ${selectedCity === "Lima" ? "text-black" : `text-[${years[selectedYear]}]`}`}
                          >
                            Callao
                          </button>
                        </div>
                      )}

                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {["2021", "2022", "2023", "2024"].map((year) => (
                          <button
                            style={{
                              backgroundImage: selectedYear === year ? `url(${SELECTED})` : `url(${btnYears[year]})`,
                              backgroundSize: "100% auto",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center"
                            }}
                            className={`
                            relative hover:cursor-pointer py-2 font-semibold font-bitcount text-2xl rounded
                            ${selectedYear === year ? "text-black" : "text-white"}
                          `}
                            onClick={() => setSelectedYear(year)}
                          >
                            <p className="px-4">
                              {year}
                            </p>
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col items-center relative">
                        <div className="w-[95%] h-2 bg-white"/>
                        <div className="flex flex-col gap-2 px-5 w-full py-2 relative bg-white h-28">
                          {!region.data && <p>No hay datos registrados en la base</p>}
                          {region.data && (
                            <>
                              {region.data.find((d) => d.year === selectedYear) ? (
                                <div className="grid text-sm md:text-md">
                                  <div className="flex w-full justify-between">
                                    <label>Fallecidos:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.fallecido || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>Ilesos:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.ileso || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>Lesionados:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.lesionado || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>No se conoce:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.noSeConoce || 0}</p>
                                  </div>
                                </div>
                              ) : (
                                <p>No hay datos registrados en la base</p>
                              )}
                            </>
                          )}
                        </div>
                        <div className="w-[95%] bg-[#C1E8F2] h-2"/>
                        <div className="w-[10px] bg-[#C1E8F2] h-2 absolute bottom-2 left-0"/>
                        <div className="w-[10px] bg-[#C1E8F2] h-2 absolute bottom-2 right-0"/>
                      </div>
                    </div>
                    <div className="w-[95%] h-2" style={{backgroundColor: years[selectedYear]}}/>
                    <div style={{backgroundColor: `${years[selectedYear]}`, filter: "brightness(60%)"}} className="w-[95%] h-2"/>
                    <div style={{backgroundColor: `${years[selectedYear]}`, filter: "brightness(60%)"}}
                         className="w-[11px] h-2 absolute bottom-2 left-0" />
                    <div style={{ backgroundColor: `${years[selectedYear]}`, filter: "brightness(60%)"}} className="w-[11px] h-2 absolute bottom-2 right-0" />
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
    </div>
  );
};
