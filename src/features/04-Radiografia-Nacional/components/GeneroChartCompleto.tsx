import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";
import type { Hexbin, HexbinBin } from "d3-hexbin";
import PASSED_BUTTON from "@/assets/radiografia-nacional-aprobados.png";
import NOT_PASSED_BUTTON from "@/assets/radiografia-nacional-desaprobados.png";
import {unionPath} from "@/features/04-Radiografia-Nacional/utils/unionPath.ts";

type Region = "masculino" | "femenino";
type Status = "aprobado" | "no-aprobado";
// type ExtendedBin = HexbinBin<[number, number]> & { region: Region; status: Status };

export const GeneroChartCompleto = () => {
  // ===== Configuración =====
  const size = 600;
  const hexSize = 10;
  
  // Datos
  const mujeresAprobadas = 274437;
  const mujeresDesaprobadas = 75419;
  const hombresAprobados = 1996031;
  const hombresDesaprobados = 1022017;
  
  // const totalMasculino = hombresAprobados + hombresDesaprobados;
  // const totalFemenino = mujeresAprobadas * 0.9 + mujeresDesaprobadas * 25;

  // Colores
  const colors = useMemo(
    () => ({
      masculino: {
        aprobado: "#89643a",
        "no-aprobado": "#ffaf42",
      },
      femenino: {
        aprobado: "#58b7cf",
        "no-aprobado": "#366880",
      },
      stroke: "#131A31",
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
    // ===== Parámetros iguales al Simple =====
    const sizeLocal = 600;        // mismo size que el Simple
    const hexSizeLocal = 10;      // misma densidad
    const outerCircleR = sizeLocal * 0.40;

    const cx = sizeLocal / 2;
    const cy = sizeLocal / 2;

    const svg = d3.select(svgRef.current).attr("viewBox", `0 0 ${sizeLocal} ${sizeLocal}`);

    const hexbin: Hexbin<[number, number]> = d3Hexbin<[number, number]>()
      .radius(hexSizeLocal)
      .extent([[0, 0], [sizeLocal, sizeLocal]]);

    // ===== Malla y recorte circular (idéntico al Simple) =====
    const dx = Math.sqrt(3) * hexSizeLocal;
    const dy = 1.5 * hexSizeLocal;
    const rows = Math.ceil((outerCircleR * 2) / dy);
    const cols = Math.ceil((outerCircleR * 2) / dx);

    const points: [number, number][] = [];
    for (let row = -rows; row <= rows; row++) {
      const y = cy + row * dy;
      const offset = row % 2 !== 0 ? dx / 2 : 0;
      for (let col = -cols; col <= cols; col++) {
        const x = cx + col * dx + offset;
        const dx0 = x - cx, dy0 = y - cy;
        if (dx0 * dx0 + dy0 * dy0 <= (outerCircleR - hexSizeLocal * 0.9) ** 2) {
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

    // ===== Asignar región por proporción (idéntico al Simple) =====
    const totalMasculinoLocal = hombresAprobados + hombresDesaprobados;
    const totalFemeninoLocal  = mujeresAprobadas + mujeresDesaprobadas; // usa los reales para el ratio visual
    const totalPopulation = totalMasculinoLocal + totalFemeninoLocal;

    // OJO: en tu Simple usabas femenino/total para decidir la "cuña interior".
    // Para replicar exactamente el Simple, mantenemos ese criterio:
    const masculinoRatio = totalFemeninoLocal / totalPopulation;
    const masculinoCount = Math.floor(binsBase.length * masculinoRatio);

    // Región (solo 2 colores en pantalla)
    type BinSimple = HexbinBin<[number, number]> & { region: Region; status?: Status };
    const binsRegion: BinSimple[] = binsBase.map((b, i) =>
      Object.assign(b, { region: i < masculinoCount ? "masculino" as const : "femenino" as const })
    );

    // ===== Mantener status para tooltips (no afecta el color) =====
    // Calculamos proporciones reales de aprobado/no por región:
    const propFemAprob = mujeresAprobadas / totalFemeninoLocal;
    const propMasAprob = hombresAprobados / totalMasculinoLocal;

    const fem = binsRegion.filter(b => b.region === "femenino");
    const mas = binsRegion.filter(b => b.region === "masculino");

    const femAprobCount = Math.floor(fem.length * propFemAprob);
    const masAprobCount = Math.floor(mas.length * propMasAprob);

    // Asigna status dentro de cada región (pero el fill no lo usaremos para status)
    fem.forEach((b, i) => Object.assign(b, { status: i < femAprobCount ? "aprobado" : "no-aprobado" }));
    mas.forEach((b, i) => Object.assign(b, { status: i < masAprobCount ? "aprobado" : "no-aprobado" }));

    svg.selectAll("*").remove();
    const g = svg.append("g");

    // ===== Eventos (igual que antes) =====
    svg
      .on("mouseenter", () => setInside(true))
      .on("mouseleave", () => {
        setInside(false);
        setTooltip(t => ({ ...t, show: false, region: null, status: null }));
      });

    const onEnter = (event: MouseEvent, d: BinSimple) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip({ show: true, x: px, y: py, region: d.region, status: d.status ?? null });
    };

    const onMove = (event: MouseEvent, d: BinSimple) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip(t => ({ ...t, x: px, y: py, region: d.region, status: d.status ?? null }));
    };

    const onLeave = () => {
      setTooltip(t => ({ ...t, show: false, region: null, status: null }));
    };

    g.selectAll("path.union")
      .data(binsRegion)
      .join("path")
      .attr("class", "union")
      .attr("d", unionPath)
      .attr(
        "transform",
        d => `translate(${d.x},${d.y}) translate(-4.5,-4) scale(${hexSize / 5})`
      )
      .attr("fill", d => d.status ? colors[d.region][d.status] : colors[d.region]["no-aprobado"])
      // .attr("stroke", colors.stroke)
      .on("mouseenter", onEnter)
      .on("mousemove", onMove)
      .on("mouseleave", onLeave);


  }, [
    // deps mínimas necesarias
    mujeresAprobadas, mujeresDesaprobadas, hombresAprobados, hombresDesaprobados,
    colors, svgRef, wrapRef
  ]);

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
      const value = tooltip.status === "aprobado" ?mujeresDesaprobadas:  mujeresAprobadas  ;
      const text = tooltip.status === "aprobado" ? "mujeres desaprueban": "mujeres aprueban" ;
      return { value, text };
    }
  };

  const tooltipValues = getTooltipValues();
  
  // Función para formatear números con espacios como separadores de miles
  const formatWithSpaces = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div ref={wrapRef} className="relative">
      <svg
        ref={svgRef}
        width={size}
        height={size}
        className="max-w-full h-auto block bg-transparent hover:cursor-pointer"
        aria-label="Distribución de género y estado de aprobación"
      />

      {/* Labels estáticos con el mismo estilo que los tooltips dinámicos */}
      {!inside && (
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="md:absolute md:top-20 md:-left-25 pointer-events-none z-10">
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-4 pt-3 pb-5">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(mujeresAprobadas)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  mujeres aprueban
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute md:bottom-50 md:-right-35 pointer-events-none z-10">
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${NOT_PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-4 pt-3 pb-5 text-pink">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(hombresAprobados)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  hombres aprueban
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute md:top-42 md:-left-35 pointer-events-none z-10">
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-4 pt-3 pb-5">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(mujeresDesaprobadas)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  mujeres desaprueban
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute md:bottom-30 md:-right-20 pointer-events-none z-10">
            <div
              className="font-medium text-white text-left w-40 md:w-50 h-auto"
              style={{
                backgroundImage: `url(${NOT_PASSED_BUTTON})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col px-4 pt-3 pb-5 text-pink">
                <div className="font-bitcount text-lg md:text-2xl whitespace-nowrap leading-none">
                  {formatWithSpaces(hombresDesaprobados)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  hombres desaprueban
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <div className="flex flex-col px-4 pt-3 pb-5 text-pink">
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
              <div className="flex flex-col px-4 pt-3 pb-5">
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
        <h2 className="text-lg md:text-xl">Género de los evaluados</h2>
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
