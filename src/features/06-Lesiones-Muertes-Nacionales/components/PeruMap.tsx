import { useState, useRef } from "react";
import {peruRegions, type PeruRegion } from "../utils/peruRegions";
import {Tooltip} from "@heroui/react";

export const PeruMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<PeruRegion | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState<string>("2021");
  const years: { [key: string]: string } = {
    "2021": "#58b7cf",
    "2022": "#FFAF42",
    "2023": "#ED548C",
    "2024": "#AC5EAA",
  }
  // const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  // const tooltipRef = useRef<HTMLDivElement | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  // const getCenterOfPath = (pathElement: SVGPathElement) => {
  //   const bbox = pathElement.getBBox();
  //   const centerX = bbox.x + bbox.width / 2;
  //   const centerY = bbox.y + bbox.height / 2;
  //   return { centerX, centerY };
  // };

  const handleMouseMove = (
    // event: React.MouseEvent<SVGGElement, MouseEvent>,
    region: PeruRegion,
  ) => {
    // const mapContainer = event.currentTarget.closest("div");
    // if (!mapContainer) return;
    // const containerRect = mapContainer.getBoundingClientRect();
    //
    // const padding = 10;
    // const tooltipEl = tooltipRef.current;
    // const tooltipWidth = tooltipEl?.offsetWidth || 288;
    // const tooltipHeight = tooltipEl?.offsetHeight || 144;
    //
    // let x = event.clientX - containerRect.left + padding;
    // let y = event.clientY - containerRect.top;
    //
    // if (x + tooltipWidth > containerRect.width) {
    //   x = event.clientX - containerRect.left - tooltipWidth - padding;
    // }
    //
    // if (x < 0) {
    //   x = padding;
    // }
    //
    // if (y + tooltipHeight > containerRect.height) {
    //   y = containerRect.height - tooltipHeight - padding;
    // }

    setHoveredRegion(region);
    // setTooltipPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredRegion(undefined);
  };

  return (
    <div className="flex items-center h-full justify-center relative scrollbar-hidden">
      {/*{hoveredRegion && (*/}
      {/*  <div*/}
      {/*    ref={tooltipRef}*/}
      {/*    onClick={()=>setHoveredRegion(undefined)}*/}
      {/*    className="absolute bg-[#DBEECB] text-xs p-2 md:p-4 rounded-[10px] shadow-md"*/}
      {/*    style={{*/}
      {/*      top: `${tooltipPosition.y}px`,*/}
      {/*      left: `${tooltipPosition.x}px`,*/}
      {/*      pointerEvents: "none",*/}
      {/*      zIndex: 30,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <div className="flex h-48 md:h-42 w-48 md:w-72 relative">*/}
      {/*      <div className="flex flex-col w-full text-left">*/}
      {/*        <p className="text-sm font-medium mb-1 text-[#ED548C]">Coste de región {hoveredRegion.name}</p>*/}
      {/*        <div className="flex flex-col justify-between w-full h-full bg-white rounded-md p-4">*/}
      {/*          <div>*/}
      {/*            <div className="flex justify-between text-sm font-medium text-[#ED548C]">*/}
      {/*              <p>Fallecido:</p><p>X</p>*/}
      {/*            </div>*/}
      {/*            <div className="flex justify-between text-sm font-medium text-[#ED548C]">*/}
      {/*              <p>Ileso:</p><p>X</p>*/}
      {/*            </div>*/}
      {/*            <div className="flex justify-between text-sm font-medium text-[#ED548C]">*/}
      {/*              <p>Lesionado:</p><p>X</p>*/}
      {/*            </div>*/}
      {/*            <div className="flex justify-between text-sm font-medium text-[#ED548C]">*/}
      {/*              <p>No se conoce:</p><p>X</p>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <small className="italic font-light text-[10px]">Data obtenida de</small>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}

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
            const isHovered = hoveredRegion?.name === region.name;

            return (
              <Tooltip
                classNames={{content: "bg-transparent p-0 shadow-none border-none"}}
                content={
                  <div className="relative flex flex-col items-center">
                    <div className="w-[95%] h-2" style={{ backgroundColor: years[selectedYear] }} />
                    <div
                      className="relative px-6 py-2 text-black"
                      style={{ backgroundColor: years[selectedYear] }}
                    >
                      <h1 className="text-:lg md:text-xl mb-2">Costo de región {region.name}</h1>
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {["2021","2022", "2023", "2024"].map((year) => (
                          <button
                            className={`
                            hover:cursor-pointer py-2 font-bold font-bitcount text-xl relative rounded-xl
                            ${selectedYear === year ? "text-black" : "text-white"}
                          `}
                            style={{ backgroundColor: selectedYear === year  ? "#FFFFFF" : years[year] }}
                            onClick={()=>setSelectedYear(year)}
                          >
                            <p className="px-4">
                              {year}
                            </p>
                            <div className="absolute top-1 w-full px-2 flex justify-center items-center gap-1">
                              <div className="h-[0.5px] w-[50%]" style={{ backgroundColor: selectedYear === year  ? "#C1E8F2" : "#FFFFFF" }} />
                              <div className="h-[0.5px] w-[10%]" style={{ backgroundColor: selectedYear === year  ? "#C1E8F2" : "#FFFFFF" }} />
                              <div className="h-[0.5px] w-[30%]" style={{ backgroundColor: selectedYear === year  ? "#C1E8F2" : "#FFFFFF" }} />
                              <div className="h-[0.5px] w-[10%]" style={{ backgroundColor: selectedYear === year  ? "#C1E8F2" : "#FFFFFF" }} />
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col items-center relative">
                        <div className="w-[95%] h-2 bg-white" />
                        <div className="flex flex-col gap-2 px-5 w-full py-2 relative bg-white h-28">
                          {!region.data && <p>No hay datos registrados en la base</p>}
                          {region.data && (
                            <>
                              {region.data
                                .find((d) => d.year === selectedYear) && (
                                <div className="grid text-sm md:text-md">
                                  <div className="flex w-full justify-between">
                                    <label>Fallecido:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.fallecido || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>Ileso:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.ileso || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>Lesionado:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.lesionado || 0}</p>
                                  </div>
                                  <div className="flex w-full justify-between">
                                    <label>No se conoce:</label>
                                    <p>{region.data.find((d) => d.year === selectedYear)?.noSeConoce || 0}</p>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        <div className="w-[95%] bg-[#C1E8F2] h-2" />
                        <div className="w-[10px] bg-[#C1E8F2] h-2 absolute bottom-2 left-0" />
                        <div className="w-[10px] bg-[#C1E8F2] h-2 absolute bottom-2 right-0" />
                      </div>
                    </div>
                    <div className="w-[95%] h-2" style={{ backgroundColor: years[selectedYear] }} />
                    <div style={{ backgroundColor: `${years[selectedYear]}80`}} className="w-[95%] h-2" />
                    <div style={{ backgroundColor: `${years[selectedYear]}80`}} className="w-[10px] h-2 absolute bottom-2 left-0" />
                    <div style={{ backgroundColor: `${years[selectedYear]}80`}} className="w-[10px] h-2 absolute bottom-2 right-0" />
                  </div>
                }
              >
                <g
                  key={index}
                  // onMouseMove={(event) => handleMouseMove(event, region)}
                  onMouseMove={() => handleMouseMove(region)}
                  onMouseLeave={handleMouseLeave}
                >
                  <path
                    className="transition duration-200 ease-in-out relative"
                    // fill={region.fill || "#ffe2e2"}
                    fill={isHovered ? region.fill : "#DBEECB"}
                    d={region.path}
                    // stroke="white"
                    stroke="#131A31"
                    strokeWidth="2"
                    // ref={(el) => {
                    //   if (el && !region.center) {
                    //     const { centerX, centerY } = getCenterOfPath(el);
                    //     region.center = { centerX, centerY };
                    //   }
                    // }}
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
    </div>
  );
};
