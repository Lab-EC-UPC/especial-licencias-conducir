import './index.css'
import {HeaderSection} from "./features/01-Header/HeaderSection.tsx";
import {MapSection} from "./features/02-Map/MapSection.tsx";
import {CausesSection} from "./features/03-Causes/CausesSection.tsx";
import {HiddenCostSection} from "./features/05-Consequences/HiddenCostSection.tsx";
import {ConsequencesSection} from "./features/05-Consequences/ConsequencesSection.tsx";
import {TestimonialsSection} from "./features/06-Testimonials/TestimonialsSection.tsx";
import {CallToActionSection} from "./features/07-CallToAction/CallToActionSection.tsx";
import {TriviaQuizSection} from "./features/08-TriviaQuiz/TriviaQuizSection.tsx";
import {FooterSection} from "./features/09-Footer/FooterSection.tsx";

function App() {

  return (
    <>
      <div>
        <h1 className="flex items-center justify-center bg-[#FFCB03] text-6xl font-bold p-5">
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
      <HeaderSection />
      <MapSection />
      <CausesSection />
      <HiddenCostSection />
      <ConsequencesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <TriviaQuizSection />
      <FooterSection />
    </>
  )
}

export default App;
