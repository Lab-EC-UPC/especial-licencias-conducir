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
