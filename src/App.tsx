import './index.css'
import {CallToAction} from "./features/08-CallToAction";
import {TriviaQuizSection} from "@/features/09-TriviaQuiz/TriviaQuizSection.tsx";
import {Header} from "@/features/01-Header";
import {RadiografiaNacional} from "@/features/02-Radiografia-Nacional";
import {DeDondeSonLosEvaluados} from "@/features/03-De-Donde-Son-Los-Evaluados";
import {LesionesMuertesNacionales} from "@/features/05-Lesiones-Muertes-Nacionales";
import {Testimonios} from "@/features/06-Testimonios";
import {CausasRaices} from "@/features/04-Causas-Raices";
import {ProbabilidadAprobarExamen} from "@/features/10-Probabilidad-Aprobar-Examen";
import {FooterSection} from "@/features/11-Footer";

function App() {

  return (
    <>
      <div>
        <h1 className="flex items-center justify-center bg-[#FFCB03] text-4xl font-bold p-5">
          El Comercio
        </h1>
        <div className="flex items-center justify-center gap-5 p-2 uppercase text-sm">
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
        <TriviaQuizSection />
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
