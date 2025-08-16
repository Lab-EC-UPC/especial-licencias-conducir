import './index.css'
import {CallToAction} from "./features/08-CallToAction";
import {Header} from "@/features/01-Header";
import {DeDondeSonLosEvaluados} from "@/features/03-De-Donde-Son-Los-Evaluados";
import {LesionesMuertesNacionales} from "@/features/06-Lesiones-Muertes-Nacionales";
import {Testimonios} from "@/features/07-Testimonios";
import {ProbabilidadAprobarExamen} from "@/features/10-Probabilidad-Aprobar-Examen";
import {FooterSection} from "@/features/11-Footer";
import {ComoLasFallas} from "@/features/02-Como-Las-Fallas";
import {RadiografiaNacional} from "@/features/04-Radiografia-Nacional";
import {CausasRaices} from "@/features/05-Causas-Raices";

function App() {

  return (
    <>
      <div>
        <h1 className="flex items-center justify-center bg-[#FFCB03] text-4xl font-bold p-5">
          El Comercio
        </h1>
        <div className="flex items-center justify-center gap-5 p-2 uppercase text-sm overflow-x-auto">
          <p>Lo último</p>
          <p>Editorial</p>
          <p>Política</p>
          <p>ECData</p>
          <p>Mundo</p>
          <p>Economía</p>
          <p>DT</p>
          <p>Suscriptores</p>
          <p>Newsletters</p>
          <p>Juegos</p>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <Header />
        <ComoLasFallas />
        <RadiografiaNacional />
        <DeDondeSonLosEvaluados />
        <CausasRaices />
        <LesionesMuertesNacionales />
        <Testimonios />
        <CallToAction />
        <ProbabilidadAprobarExamen />
        <FooterSection />
      </div>
    </>
  )
}

export default App;
