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
import {useState} from "react";
import {TriviaQuizModal} from "@/features/01-Header/components/TriviaQuizModal.tsx";

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      {isGameOpen ? (
        <TriviaQuizModal
          isOpen={isGameOpen}
          setIsOpen={setIsGameOpen}
        />
      ): (
        <div className="flex flex-col bg-white">
          <Header
            isGameOpen={isGameOpen}
            setIsGameOpen={setIsGameOpen}
          />
          <RadiografiaNacional />
          <DeDondeSonLosEvaluados />
          <LesionesMuertesNacionales />
          <ComoLasFallas />
          <CausasRaices />
          <Testimonios />
          <CallToAction />
          <ProbabilidadAprobarExamen />
          <FooterSection />
        </div>
      )}
    </>
  )
}

export default App;
