import React, {type ReactNode, useMemo, useState} from "react";
import Button from "@/features/10-Probabilidad-Aprobar-Examen/components/button.tsx";
import FIELD_PX from "@/assets/field.png";
// import CHECKBOX_PX from "@/assets/checkbox.png";
import VECTOR_PX from "@/assets/vector.png";
import {predictProbabilidad} from "@/services/probabilidad.service.ts";
import {PixelProgress} from "@/features/10-Probabilidad-Aprobar-Examen/components/PixelProgress.tsx";
import FORM_BG from "@/assets/form.png";

export const ProbabilidadAprobarExamen = () => {
  const [edad, setEdad] = useState("");
  const [region, setRegion] = useState("");
  const [sexo, setSexo] = useState("");
  // const [yaDiste, setYaDiste] = useState(false);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const isFormValid = useMemo(() => edad && region && sexo, [edad, region, sexo]);

  // function animateValue(start: number, end: number, ms: number, cb: (v:number)=>void) {
  //   let raf: number | null = null;
  //   const t0 = performance.now();
  //   const step = (t: number) => {
  //     const p = Math.min(1, (t - t0) / ms);
  //     const eased = 1 - Math.pow(1 - p, 3); // ease-out-cubic
  //     const v = Math.round(start + (end - start) * eased);
  //     cb(v);
  //     if (p < 1) raf = requestAnimationFrame(step);
  //   };
  //   raf = requestAnimationFrame(step);
  //   return () => raf && cancelAnimationFrame(raf);
  // }

  const mapSexoToApi = (s: string) => (s === "M" ? "Hombre" : s === "F" ? "Mujer" : "Hombre");
  const normalizeRegion = (region: string) =>
    region.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function mensajeToPercent(mensaje: string): number {
    if (mensaje.includes("primer intento")) return 75;
    if (mensaje.includes("segundo intento")) return 50;
    if (mensaje.includes("3 o más intentos")) return 25;
    return 0;
  }

  const onCalcular = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    try {
      setPercent(0);

      const mensaje = await predictProbabilidad({
        edad,
        sexo: mapSexoToApi(sexo),
        region: normalizeRegion(region),
      });
      console.log("Mensaje del modelo:", mensaje);

      const valor = mensajeToPercent(mensaje);
      setPercent(valor);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center p-3 mb-[50px]">
      <div
        className="w-full md:w-3/4 xl:w-1/2 rounded-[28px] bg-[#131A31] text-white p-8 md:p-12 xl:p-16 shadow-xl relative"
        style={{
          backgroundImage: `url(${FORM_BG})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-center text-2xl md:text-3xl font-semibold leading-tight font-bitcount">
          ¿Cuál es tu probabilidad de aprobar
          <br className="hidden md:block" /> el examen de licencia?
        </h1>
        <p className="text-center mt-3 text-sm text-white/80">
          Completa el siguiente simulador para estimar tu resultado con un análisis predictivo con
          datos reales de postulantes peruanos.
        </p>

        <form onSubmit={onCalcular} className="mt-8 space-y-5">
          <PixelField>
            <div className="relative w-full h-full">
              <select
                required
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="w-full h-full bg-transparent outline-none pr-10 pl-4 font-bold text-[#131A31] appearance-none"
              >
                <option value="">Edad</option>
                {["18-24", "25-34", "35-44", "45-54", "55-64", "65+"].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <img src={VECTOR_PX} alt="flecha" className="pointer-events-none absolute right-3 top-6.5 -translate-y-1/2 w-5 h-3" style={{ imageRendering: 'pixelated' }} />
            </div>
          </PixelField>

          <PixelField>
            <div className="relative w-full h-full">
              <select
                required
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full h-full bg-transparent outline-none pr-10 pl-4 font-bold text-[#131A31] appearance-none"
              >
                <option value="">Región</option>
                {["Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao","Cusco","Huancavelica","Huánuco","Ica","Junín","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martín","Tacna","Tumbes","Ucayali"].map((z) => (
                  <option key={z} value={z}>{z}</option>
                ))}
              </select>
              <img src={VECTOR_PX} alt="flecha" className="pointer-events-none absolute right-3 top-6.5 -translate-y-1/2 w-5 h-3" style={{ imageRendering: 'pixelated' }} />
            </div>
          </PixelField>


          <PixelField>
            <div className="relative w-full h-full">
              <select
                required
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                className="w-full h-full bg-transparent outline-none pr-10 pl-4 font-bold text-[#131A31] appearance-none"
              >
                <option value="">Sexo</option>
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
                <option value="X">Prefiero no decirlo</option>
              </select>
              <img src={VECTOR_PX} alt="flecha" className="pointer-events-none absolute right-3 top-6.5 -translate-y-1/2 w-5 h-3" style={{ imageRendering: 'pixelated' }} />
            </div>
          </PixelField>

          <label className="flex items-center gap-3 select-none mt-3">
            {/*<input*/}
            {/*  type="checkbox"*/}
            {/*  className="peer sr-only"*/}
            {/*  checked={yaDiste}*/}
            {/*  onChange={(e) => setYaDiste(e.target.checked)}*/}
            {/*/>*/}
            {/*<span*/}
            {/*  className="inline-flex items-center justify-center h-7 w-7"*/}
            {/*  style={{ backgroundImage: `url('${CHECKBOX_PX}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', imageRendering: 'pixelated' }}*/}
            {/*>*/}
            {/*  {yaDiste && <span className="h-3.5 w-3.5 bg-[#131A31]"></span>}*/}
            {/*</span>*/}
            {/*<span className="text-white/90">*/}
            {/*  ¿Ya diste la prueba antes?*/}
            {/*</span>*/}
            <span className="text-white/90 text-xs md:text-md">
              ¿Rendiste la prueba incluida al inicio del especial? Si no, el modelo considerara una cifra referencial estándar.
            </span>
          </label>

          <div className="pt-2 flex justify-center">
            <Button
              text={loading ? "Calculando…" : "Calcular"}
              variant="blue"
              type="submit"
            />
          </div>
        </form>
        {percent > 0 && (
          <div className="mt-10">
            <p className="font-semibold text-center text-xl mb-1 text-white/90">
              Probabilidad estimada de aprobar
            </p>
            <PixelProgress value={percent} />
          </div>
        )}
      </div>
    </div>
  );
};

function PixelField({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full h-[56px] px-1 py-1 flex items-center"
      style={{
        backgroundImage: `url('${FIELD_PX}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        imageRendering: 'pixelated',
      }}
    >
      <div className="w-full h-full flex items-center">{children}</div>
    </div>
  );
}

// function PixelProgress({ value }: { value: number }) {
//   const pct = Math.max(0, Math.min(100, value));
//   return (
//       <div className="bg-[#ff5290] rounded-[14px] p-2">
//         <div className="relative h-[42px] rounded-[10px] overflow-hidden bg-[#ff8db3]">
//           <div
//               className="h-full bg-[#ffb3c9] transition-[width] duration-500"
//               style={{ width: `${pct}%` }}
//           />
//           <div className="absolute right-2 top-1/2 -translate-y-1/2 font-extrabold bg-[#ffdbe6] text-[#111] px-3 py-1 rounded-md flex items-center gap-2 font-bitcount">
//             <span role="img" aria-label="medal">🏅</span>
//             {pct}%
//           </div>
//         </div>
//       </div>
//   );
// }
