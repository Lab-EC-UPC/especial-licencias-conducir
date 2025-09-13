import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";
import type { Hexbin, HexbinBin } from "d3-hexbin";
import PASSED_BUTTON from "@/assets/radiografia-nacional-aprobados.png";
import NOT_PASSED_BUTTON from "@/assets/radiografia-nacional-desaprobados.png";

type Region = "masculino" | "femenino";
type ExtendedBin = HexbinBin<[number, number]> & { region: Region };

export const GeneroChart = () => {
  // ===== Configuración =====
  const size = 600;     // tamaño base del SVG (para cálculo de posiciones)
  const hexSize = 10;   // tamaño de cada hexágono
  const totalMasculino = 2_477_026;  // Hombres (80%)
  const totalFemenino = 825_121;    // Mujeres (20%)

  // Proporción de hombres y mujeres
  const totalPopulation = totalMasculino + totalFemenino;
  const masculinoRatio = totalFemenino / totalPopulation;

  // Colores de los HEXÁGONOS
  const colors = useMemo(
    () => ({
      masculino: "#58b7cf", // Azul para hombres (anillo exterior)
      femenino: "#ffaf42",  // Naranja para mujeres (círculo interior)
      stroke: "#0d1321",    // Borde de cada hex
    }),
    []
  );

  // ===== Refs / state =====
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);

  // ¿el mouse está dentro del SVG?
  const [inside, setInside] = useState(false);

  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    region: Region | null;
  }>({ show: false, x: 0, y: 0, region: null });

  const [tipSize, setTipSize] = useState<{ w: number; h: number }>({ w: 180, h: 56 });

  // Re-medir tooltip para clamping
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

    // Anillo exterior para hombres (80%)
    const outerCircleR = size * 0.40;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${size} ${size}`); // sin background -> transparente

    const hexbin: Hexbin<[number, number]> = d3Hexbin<[number, number]>()
      .radius(hexSize)
      .extent([[0, 0], [size, size]]);

    // Malla regular
    const dx = Math.sqrt(3) * hexSize;
    const dy = 1.5 * hexSize;
    const rows = Math.ceil((outerCircleR * 2) / dy);
    const cols = Math.ceil((outerCircleR * 2) / dx);

    const points: [number, number][] = [];
    for (let row = -rows; row <= rows; row++) {
      const y = cy + row * dy;
      const offset = row % 2 !== 0 ? dx / 2 : 0;
      for (let col = -cols; col <= cols; col++) {
        const x = cx + col * dx + offset;
        const dx0 = x - cx, dy0 = y - cy;
        // Puntos dentro del anillo exterior (hombres)
        if (dx0 * dx0 + dy0 * dy0 <= (outerCircleR - hexSize * 0.9) ** 2) {
          points.push([x, y]);
        }
      }
    }

    const binsBase = hexbin(points);
    // Orden del centro hacia afuera
    binsBase.sort((a, b) => {
      const da = (a.x - cx) ** 2 + (a.y - cy) ** 2;
      const db = (b.x - cx) ** 2 + (b.y - cy) ** 2;
      return da - db;
    });

    // Los hombres estarán en el anillo exterior (80%) y las mujeres en el interior (20%)
    const masculinoCount = Math.floor(binsBase.length * masculinoRatio);
    const bins: ExtendedBin[] = binsBase.map((b, i) =>
      Object.assign(b, { region: i < masculinoCount ? "masculino" as const : "femenino" as const })
    );

    svg.selectAll("*").remove();
    const g = svg.append("g");

    // Eventos de entrada/salida del SVG (para alternar labels estáticos/dinámicos)
    svg
      .on("mouseenter", () => {
        setInside(true);
      })
      .on("mouseleave", () => {
        setInside(false);
        setTooltip(t => ({ ...t, show: false, region: null }));
      });

    const onEnter = (event: MouseEvent, d: ExtendedBin) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip({ show: true, x: px, y: py, region: d.region });
    };
    const onMove = (event: MouseEvent, d: ExtendedBin) => {
      const wrap = wrapRef.current; if (!wrap) return;
      const [px, py] = d3.pointer(event, wrap);
      setTooltip(t => ({ ...t, x: px, y: py, region: d.region }));
    };
    const onLeaveHex = () => {
      setTooltip(t => ({ ...t, show: false, region: null }));
    };

    g.selectAll("path")
      .data(bins)
      .join("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("fill", d => (d.region === "masculino" ? colors.femenino : colors.masculino))
      .attr("stroke", colors.stroke)
      .attr("stroke-width", 0.75)
      .attr("shape-rendering", "crispEdges")
      .on("mouseenter", onEnter)
      .on("mousemove", onMove)
      .on("mouseleave", onLeaveHex);

  }, [size, hexSize, masculinoRatio, colors]);

  // ===== Tooltip dinámico (cuando el mouse está dentro) =====
  const nf = new Intl.NumberFormat("fr-FR");
  const isMasculino = tooltip.region === "masculino";
  // const labelValue = isMasculino ? nf.format(totalFemenino) : nf.format(totalMasculino);
  // const labelText  = isMasculino ? "son mujeres" : "son hombres";

  // Medidas actuales del wrapper (por si el SVG se escala por CSS)
  const WRAP_W = wrapRef.current?.clientWidth ?? size;
  const WRAP_H = wrapRef.current?.clientHeight ?? size;
  const OFFSET = 12;

  // clamping dentro del wrapper (label dinámico)
  let left = tooltip.x + OFFSET;
  let top  = tooltip.y + OFFSET;
  const tipW = tipSize.w, tipH = tipSize.h;
  if (left + tipW > WRAP_W) left = WRAP_W - tipW - 2;
  if (left < 0) left = 0;
  if (top + tipH > WRAP_H) top = WRAP_H - tipH - 2;
  if (top < 0) top = 0;

  // ===== Posiciones de labels estáticos (cuando el mouse está fuera) =====
  const cx = size / 2;
  const cy = size / 2;
  const r  = size * 0.45; // Radio para hombres (anillo exterior)

  const sx = WRAP_W / size;
  const sy = WRAP_H / size;

  const marginOutside = 12; // px que saca el label fuera del borde del círculo

  // Hombres: a la izquierda, un poco abajo
  const staticMasculino = {
    left: (cx + r + marginOutside) * sx*1.05,
    top:  (cy + r * 0.1) * sy/2,
    transform: "translate(-100%, -50%)" as const, // anclamos borde derecho al punto
  };

  // Mujeres: a la derecha, un poco arriba
  const staticFemenino = {
    left: (cx + r + marginOutside) * sx/2,
    top:  (cy - r * 0.20) * sy,
    transform: "translate(0, -50%)" as const, // anclamos borde izquierdo al punto
  };

  const formatWithSpaces = (num: number) =>
    nf.format(num).replace(/\u202F/g, " ");

  return (
    <div ref={wrapRef} className="relative overflow-visible">
      <svg
        ref={svgRef}
        width={size}
        height={size}
        className="max-w-full h-auto block bg-transparent hover:cursor-pointer"
        aria-label="Masculino (exterior) y femenino (interior)"
      />

      {/* === Labels estáticos cuando el mouse está fuera del SVG === */}
      {!inside && (
        <>
          <div className="flex justify-center gap-4 items-center text-left">
            <div
              className="md:absolute pointer-events-none"
              style={window.innerWidth >= 768 ? {
                left: staticMasculino.left,
                top: staticMasculino.top,
                transform: staticMasculino.transform
              } : {}}
            >
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
                    {formatWithSpaces(totalMasculino)}
                  </div>
                  <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                    hombres
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:absolute pointer-events-none"
              style={window.innerWidth >= 768 ? {
                left: staticFemenino.left,
                top: staticFemenino.top,
                transform: staticFemenino.transform
              } : {}}
            >
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
                    {formatWithSpaces(totalFemenino)}
                  </div>
                  <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                    mujeres
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="hidden xl:flex text-left">*/}
          {/*  <div*/}
          {/*    className="absolute pointer-events-none"*/}
          {/*    style={{ left: staticMasculino.left, top: staticMasculino.top, transform: staticMasculino.transform }}*/}
          {/*  >*/}
          {/*    <div className="rounded-xl font-medium bg-white text-pink text-left shadow-[0_6px_0_#6db0d1]">*/}
          {/*      <div className="font-bitcount text-lg md:text-2xl px-4 pt-2 whitespace-nowrap">{formatWithSpaces(totalMasculino)}</div>*/}
          {/*      <div className="text-sm md:text-md px-4 pb-2 opacity-90 whitespace-nowrap">hombres</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div*/}
          {/*    className="absolute pointer-events-none"*/}
          {/*    style={{ left: staticFemenino.left, top: staticFemenino.top, transform: staticFemenino.transform }}*/}
          {/*  >*/}
          {/*    <div className="rounded-xl font-medium bg-pink text-white shadow-[0_6px_0_#a94c6d]">*/}
          {/*      <div className="font-bitcount text-lg md:text-2xl px-4 pt-2 whitespace-nowrap">{formatWithSpaces(totalFemenino)}</div>*/}
          {/*      <div className="text-sm md:text-md px-4 pb-2 opacity-90 whitespace-nowrap">mujeres</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
      )}

      {/* === Label dinámico cuando el mouse está dentro y sobre un hex === */}
      {inside && tooltip.show && tooltip.region && (
        <div
          ref={tipRef}
          className="absolute pointer-events-none text-left"
          style={{ left, top, whiteSpace: "nowrap" }}
        >
          {!isMasculino ? (
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
                  {formatWithSpaces(totalMasculino)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  hombres
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
                  {formatWithSpaces(totalFemenino)}
                </div>
                <div className="text-sm md:text-md opacity-90 whitespace-nowrap leading-none">
                  mujeres
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col justify-center mt-8">
        <h2 className="text-lg md:text-xl">
            Género de los evaluados
        </h2>
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

export default GeneroChart;
