import { useState, useRef } from "react";
import {peruRegions, type PeruRegion } from "../utils/peruRegions";
import * as React from "react";

export const PeruMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<PeruRegion | undefined>(undefined);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const getCenterOfPath = (pathElement: SVGPathElement) => {
    const bbox = pathElement.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    return { centerX, centerY };
  };

  const handleMouseMove = (
    event: React.MouseEvent<SVGGElement, MouseEvent>,
    region: PeruRegion,
  ) => {
    const mapContainer = event.currentTarget.closest("div");
    if (!mapContainer) return;
    const containerRect = mapContainer.getBoundingClientRect();

    const padding = 10;
    const tooltipEl = tooltipRef.current;
    const tooltipWidth = tooltipEl?.offsetWidth || 288;
    const tooltipHeight = tooltipEl?.offsetHeight || 144;

    let x = event.clientX - containerRect.left + padding;
    let y = event.clientY - containerRect.top;

    if (x + tooltipWidth > containerRect.width) {
      x = event.clientX - containerRect.left - tooltipWidth - padding;
    }

    if (x < 0) {
      x = padding;
    }

    if (y + tooltipHeight > containerRect.height) {
      y = containerRect.height - tooltipHeight - padding;
    }

    setHoveredRegion(region);
    setTooltipPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredRegion(undefined);
  };

  return (
    <div className="flex items-center h-full justify-center relative scrollbar-hidden">
      {hoveredRegion && (
        <div
          ref={tooltipRef}
          onClick={()=>setHoveredRegion(undefined)}
          className="absolute bg-[#DBEECB] text-xs p-2 md:p-4 rounded-[10px] shadow-md"
          style={{
            top: `${tooltipPosition.y}px`,
            left: `${tooltipPosition.x}px`,
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          <div className="flex h-48 md:h-42 w-48 md:w-72 relative">
            <div className="flex flex-col w-full text-left">
              <p className="text-sm font-medium mb-1 text-[#ED548C]">Coste de región {hoveredRegion.name}</p>
              <div className="flex flex-col justify-between w-full h-full bg-white rounded-md p-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-[#ED548C]">
                    <p>Fallecido:</p><p>X</p>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-[#ED548C]">
                    <p>Ileso:</p><p>X</p>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-[#ED548C]">
                    <p>Lesionado:</p><p>X</p>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-[#ED548C]">
                    <p>No se conoce:</p><p>X</p>
                  </div>
                </div>
                <small className="italic font-light text-[10px]">Data obtenida de</small>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <g
                key={index}
                onMouseMove={(event) => handleMouseMove(event, region)}
                onMouseLeave={handleMouseLeave}
              >
                <path
                  className="transition duration-200 ease-in-out relative"
                  fill={region.fill || "#ffe2e2"}
                  d={region.path}
                  stroke="white"
                  strokeWidth="2"
                  ref={(el) => {
                    if (el && !region.center) {
                      const { centerX, centerY } = getCenterOfPath(el);
                      region.center = { centerX, centerY };
                    }
                  }}
                />
              </g>
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
