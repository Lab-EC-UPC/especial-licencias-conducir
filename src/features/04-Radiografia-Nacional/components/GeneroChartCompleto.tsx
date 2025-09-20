import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";
import type { Hexbin, HexbinBin } from "d3-hexbin";
import PASSED_BUTTON from "@/assets/radiografia-nacional-aprobados.png";
import NOT_PASSED_BUTTON from "@/assets/radiografia-nacional-desaprobados.png";

type Region = "masculino" | "femenino";
type Status = "aprobado" | "no-aprobado";
type ExtendedBin = HexbinBin<[number, number]> & { region: Region; status: Status };

export const GeneroChartCompleto = () => {
  // ===== Configuración =====
  const size = 500;
  const hexSize = 9;
  
  // Datos
  const mujeresAprobadas = 274437;
  const mujeresDesaprobadas = 75419;
  const hombresAprobados = 1996031;
  const hombresDesaprobados = 1022017;
  
  const totalMasculino = hombresAprobados + hombresDesaprobados;
  const totalFemenino = mujeresAprobadas * 0.9 + mujeresDesaprobadas * 25;

  // Colores
  const colors = useMemo(
    () => ({
      masculino: {
        aprobado: "#58b7cf",
        "no-aprobado": "#366880",
      },
      femenino: {
        aprobado: "#89643a",
        "no-aprobado": "#ffaf42",
      },
      stroke: "#0d1321",
    }),
    []
  );

  // ===== Refs / state =====
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);

  const [inside, setInside] = useState(false);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    region: Region | null;
    status: Status | null;
  }>({ show: false, x: 0, y: 0, region: null, status: null });

  const [tipSize, setTipSize] = useState<{ w: number; h: number }>({ w: 180, h: 56 });

  // Re-medir tooltip
  useEffect(() => {
    if (tooltip.show && tipRef.current) {
      const { offsetWidth, offsetHeight } = tipRef.current;
      if (offsetWidth && offsetHeight && (offsetWidth !== tipSize.w || offsetHeight !== tipSize.h)) {
        setTipSize({ w: offsetWidth, h: offsetHeight });
      }
    }
  }, [tooltip, tipSize.w, tipSize.h]);

  // ===== Dibujo D3 =====
  useEffect(() => {
    const cx = size / 2;
    const cy = size / 2;

    // Radios ajustados
    const radioInterior = size * 0.08;
    const radioMedio = size * 0.16;
    const radioExteriorInterior = size * 0.35;
    const radioExterior = size * 0.45;

    const svg = d3.select(svgRef.current).attr("viewBox", `0 0 ${size} ${size}`);

    const hexbin: Hexbin<[number, number]> = d3Hexbin<[number, number]>()
      .radius(hexSize)
      .extent([[0, 0], [size, size]]);

    // Malla regular
    const dx = Math.sqrt(3) * hexSize;
    const dy = 1.5 * hexSize;
    const rows = Math.ceil((radioExterior * 2) / dy);
    const cols = Math.ceil((radioExterior * 2) / dx);

    const points: [number, number][] = [];
    for (let row = -rows; row <= rows; row++) {
      const y = cy + row * dy;
      const offset = row % 2 !== 0 ? dx / 2 : 0;
      for (let col = -cols; col <= cols; col++) {
        const x = cx + col * dx + offset;
        const dx0 = x - cx, dy0 = y - cy;
        const distancia = Math.sqrt(dx0 * dx0 + dy0 * dy0);
        
        if (distancia <= radioExterior + hexSize) {
          points.push([x, y]);
        }
      }
    }

    const binsBase = hexbin(points);
    binsBase.sort((a, b) => {
      const da = (a.x - cx) ** 2 + (a.y - cy) ** 2;
      const db = (b.x - cx) ** 2 + (b.y - cy) ** 2;
      return da - db;
    });

    // Asignar región y estado con casting explícito de tipos
    const bins: ExtendedBin[] = [];
    
    binsBase.forEach(bin => {
      const dx0 = bin.x - cx;
      const dy0 = bin.y - cy;
      const distancia = Math.sqrt(dx0 * dx0 + dy0 * dy0);
      
      if (distancia <= radioInterior) {
        // Centro: mujeres aprobadas (color oscuro) - MÁS PEQUEÑO
        bins.push(Object.assign(bin, { 
          region: "femenino" as const, 
          status: "aprobado" as const 
        }));
      } else if (distancia <= radioMedio) {
        // Anillo interior: mujeres no aprobadas (color normal) - MÁS GRUESO
        bins.push(Object.assign(bin, { 
          region: "femenino" as const, 
          status: "no-aprobado" as const 
        }));
      } else if (distancia <= radioExteriorInterior) {
        // Anillo medio: hombres aprobados (color fuerte)
        bins.push(Object.assign(bin, { 
          region: "masculino" as const, 
          status: "aprobado" as const 
        }));
      } else if (distancia <= radioExterior) {
        // Anillo exterior: hombres no aprobados (color suave)
        bins.push(Object.assign(bin, { 
          region: "masculino" as const, 
          status: "no-aprobado" as const 
        }));
      }
    });

    // Ajustar proporciones según los datos reales
    const femeninoBins = bins.filter(b => b.region === "femenino");
    const masculinoBins = bins.filter(b => b.region === "masculino");
    
    // Calcular proporciones exactas
    const proporcionFemeninoAprobado = mujeresAprobadas / totalFemenino ;
    const proporcionMasculinoAprobado = hombresAprobados / totalMasculino;
    
    const femeninoAprobadoCount = Math.floor(femeninoBins.length * proporcionFemeninoAprobado);
    const masculinoAprobadoCount = Math.floor(masculinoBins.length * proporcionMasculinoAprobado);
    
    // Reasignar estados según las proporciones reales
    const binsFinal: ExtendedBin[] = [];
    
    // Procesar mujeres
    femeninoBins.forEach((bin, i) => {
      binsFinal.push(Object.assign(bin, { 
        status: i < femeninoAprobadoCount ? "aprobado" as const : "no-aprobado" as const 
      }));
    });
    
    // Procesar hombres
    masculinoBins.forEach((bin, i) => {
      binsFinal.push(Object.assign(bin, { 
        status: i < masculinoAprobadoCount ? "aprobado" as const : "no-aprobado" as const 
      }));
    });

    svg.selectAll("*").remove();
    const g = svg.append("g");

    // Eventos
    svg
      .on("mouseenter", () => setInside(true))
      .on("mouseleave", () => {
        setInside(false);
        setTooltip(t => ({ ...t, show: false, region: null, status: null }));
      });

    const onEnter = (event: MouseEvent, d: ExtendedBin) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip({ show: true, x: px, y: py, region: d.region, status: d.status });
    };
    
    const onMove = (event: MouseEvent, d: ExtendedBin) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip(t => ({ ...t, x: px, y: py, region: d.region, status: d.status }));
    };
    
    const onLeaveHex = () => {
      setTooltip(t => ({ ...t, show: false, region: null, status: null }));
    };

    // Dibujar hexágonos
    g.selectAll("path")
      .data(binsFinal)
      .join("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("fill", d => colors[d.region][d.status])
      .attr("stroke", colors.stroke)
      .attr("stroke-width", 0.75)
      .attr("shape-rendering", "crispEdges")
      .on("mouseenter", onEnter)
      .on("mousemove", onMove)
      .on("mouseleave", onLeaveHex);

  }, [size, hexSize, colors, mujeresAprobadas, totalFemenino, hombresAprobados, totalMasculino]);

   // ===== Tooltip =====
  const WRAP_W = wrapRef.current?.clientWidth ?? size;
  const WRAP_H = wrapRef.current?.clientHeight ?? size;
  const OFFSET = 12;

  let left = tooltip.x + OFFSET;
  let top = tooltip.y + OFFSET;
  const tipW = tipSize.w, tipH = tipSize.h;
  if (left + tipW > WRAP_W) left = WRAP_W - tipW - 2;
  if (left < 0) left = 0;
  if (top + tipH > WRAP_H) top = WRAP_H - tipH - 2;
  if (top < 0) top = 0;

  // Calcular valores para el tooltip
  const getTooltipValues = () => {
    if (!tooltip.region || !tooltip.status) return { value: 0, text: "" };
    
    if (tooltip.region === "masculino") {
      const value = tooltip.status === "aprobado" ? hombresAprobados : hombresDesaprobados;
      const text = tooltip.status === "aprobado" ? "hombres aprueban" : "hombres desaprueban";
      return { value, text };
    } else {
      const value = tooltip.status === "aprobado" ? mujeresAprobadas : mujeresDesaprobadas;
      const text = tooltip.status === "aprobado" ? "mujeres aprueban" : "mujeres desaprueban";
      return { value, text };
    }
  };

  const tooltipValues = getTooltipValues();
  
  // Función para formatear números con espacios como separadores de miles
  const formatWithSpaces = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div ref={wrapRef} className="relative" style={{ width: size, height: size }}>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        className="max-w-full h-auto block hover:cursor-pointer"
        aria-label="Distribución de género y estado de aprobación"
      />

      {/* Labels estáticos con el mismo estilo que los tooltips dinámicos */}
      <div className="absolute bottom-90 -left-40 pointer-events-none z-10">
        <div
          className="font-medium text-white text-left w-40 md:w-50 h-auto"
          style={{
            backgroundImage: `url(${PASSED_BUTTON})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="flex flex-col px-6 pt-3 pb-5">
            <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
              {formatWithSpaces(mujeresAprobadas)}
            </div>
            <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
              mujeres aprueban
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-70 -left-50 pointer-events-none z-10">
        <div
          className="font-medium text-white text-left w-40 md:w-50 h-auto"
          style={{
            backgroundImage: `url(${PASSED_BUTTON})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="flex flex-col px-6 pt-3 pb-5">
            <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
              {formatWithSpaces(mujeresDesaprobadas)}
            </div>
            <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
              mujeres desaprueban
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-30 -right-45 pointer-events-none z-10">
        <div
          className="font-medium text-white text-left w-40 md:w-50 h-auto"
          style={{
            backgroundImage: `url(${NOT_PASSED_BUTTON})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="flex flex-col px-6 pt-3 pb-5 text-pink">
            <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
              {formatWithSpaces(hombresAprobados)}
            </div>
            <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
              hombres aprueban
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 -right-35 pointer-events-none z-10">
        <div
          className="font-medium text-white text-left w-40 md:w-50 h-auto"
          style={{
            backgroundImage: `url(${NOT_PASSED_BUTTON})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="flex flex-col px-6 pt-3 pb-5 text-pink">
            <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
              {formatWithSpaces(hombresDesaprobados)}
            </div>
            <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
              hombres desaprueban
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip dinámico */}
      {inside && tooltip.show && tooltip.region && tooltip.status && (
        <div
          ref={tipRef}
          className="absolute pointer-events-none text-left z-20"
          style={{ left, top, whiteSpace: "nowrap" }}
        >
          {tooltip.region === "masculino" ? (
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${NOT_PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-6 pt-3 pb-5 text-pink">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(tooltipValues.value)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  {tooltipValues.text}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-6 pt-3 pb-5">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(tooltipValues.value)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  {tooltipValues.text}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Leyenda */}
      <div className="flex flex-col justify-center mt-8">
        <h2 className="text-lg md:text-xl">Género de los evaluados?</h2>
        <div className="flex gap-2 md:gap-4 items-center justify-center font-light text-sm md:text-lg">
          <h3>Género</h3>
          <div className="flex gap-2 items-center">
            <div className="bg-[#58b7cf] size-2 md:size-4" />
            <h3>Masculino</h3>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#ffaf42] size-2 md:size-4" />
            <h3>Femenino</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneroChartCompleto;
