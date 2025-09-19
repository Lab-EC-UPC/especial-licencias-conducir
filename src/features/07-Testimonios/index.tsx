import { useState } from 'react';
import {TestimoniosSection} from "@/features/07-Testimonios/components/TestimoniosSection.tsx";
import {CausasRaicesSection} from "@/features/07-Testimonios/components/CausasRaícesSection.tsx";
import Button from "@/features/10-Probabilidad-Aprobar-Examen/components/button.tsx";
import FLECHA from "@/assets/flecha-causas.png";
// import AUTORIDAD1 from "@/assets/autoridad-1.png";
// import AUTORIDAD2 from "@/assets/autoridad-2.png";
// import AUTORIDAD3 from "@/assets/autoridad-3.png";
// import AUTORIDAD4 from "@/assets/autoridad-4.png";

export const Testimonios = () => {
  const [selectedAutoridad, setSelectedAutoridad] = useState<string>("MTC");

  const organizaciones = [
    {
      nombre: 'MTC',
      color: 'bg-[#58b7cf]',
      descripcion:
      <div className="text-justify text-base md:text-lg">
        El MTC ha establecido un régimen de infracciones y sanciones para su aplicación por parte
        de la Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías
        (SUTRAN), tanto a los centros de evaluación como a los postulantes, que van desde la
        inhabilitación, cancelación de la licencia de conducir, paralización de la actividad, entre
        otros, según corresponda. Sin embargo, todavía existen personas que buscan burlar los
        protocolos mediante actos de corrupción.
        <br/><br/>
        Por otro lado, el MTC señaló que la fiscalización de las Escuelas de Conductores
        corresponde a la SUTRAN. Sin embargo, evitó pronunciarse sobre la crítica central: que
        muchas escuelas autorizadas limitan su enseñanza a prácticas rápidas orientadas solo a
        aprobar el examen.
        <br/><br/>
        Respecto a la diversidad lingüística y cultural, el MTC adelantó que prepara una
        modificación al Reglamento Nacional de Licencias para que el balotario de preguntas esté
        disponible en lenguas originarias. Sin embargo, el ministerio no precisó una fecha estimada
        para su puesta en marcha.
      </div>
      // entrevistas: [
      //   {
      //     titulo: "Entrevista 01",
      //     descripcion: "Entrevista 01 dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(20) ",
      //     avatar: AUTORIDAD1,
      //   },
      //   {
      //     titulo: "Entrevista 02",
      //     descripcion: "Entrevista 02 dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(20)",
      //     avatar: AUTORIDAD2,
      //   }
      // ]
    },
    // {
    //   nombre: 'Contraloría',
    //   color: 'bg-[#58b7cf]',
    //   descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat (explicación de la función de la Contraloría).(18)",
    //   entrevistas: [
    //     {
    //       titulo: "Entrevista 01",
    //       descripcion: "dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(22)",
    //       avatar: AUTORIDAD3,
    //     },
    //     {
    //       titulo: "Entrevista 02",
    //       descripcion: "dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.(19)",
    //       avatar: AUTORIDAD4,
    //     }
    //   ]
    // }
  ];

  const selected = organizaciones.find((org) => org.nombre === selectedAutoridad);

  return (
    <div className="mt-[50px]">
      <div className="mx-auto container w-full px-4">
        <div className="flex flex-col items-center text-center py-8 w-full">
          <TestimoniosSection />
          <CausasRaicesSection />

          <div className="mx-auto w-full mt-[86px] flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-6 font-semibold font-bitcount text-[#131A31]">
              ¿Qué dicen las autoridades y organizaciones?
            </h1>

            <div className="relative flex flex-col items-center w-full">
              <div className="w-[90%] md:w-[95%] xl:w-[97%] h-4 bg-[#ffaf42]" />

              <div className="bg-[#ffaf42] h-full flex flex-col items-center justify-center w-full">
                <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
                  {organizaciones.map((org, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 items-center"
                    >
                      <Button
                        text={org.nombre}
                        variant={selectedAutoridad === org.nombre ? "pink" : "blue"}
                        onClick={() => setSelectedAutoridad(org.nombre)}
                      />
                      {selectedAutoridad === org.nombre && (
                        <img
                          src={FLECHA}
                          alt="Flecha"
                          className="h-8 md:h-10 w-auto object-contain rotate-90"
                        />
                      )}
                    </div>
                  ))}
                </div>
                {selected && (
                  <div className="flex flex-col items-center justify-center w-full md:w-2/3 xl:w-1/2 py-8 px-4">
                    <p className="text-center mb-8">
                      {selected.descripcion}
                    </p>
                    {/*<div className="flex flex-col gap-4 w-full">*/}
                    {/*  {selected.entrevistas.map((e, index) => (*/}
                    {/*    <div*/}
                    {/*      key={index}*/}
                    {/*      className="flex gap-4 items-center"*/}
                    {/*    >*/}
                    {/*      <div className="size-32 md:size-40 shrink-0">*/}
                    {/*        <img*/}
                    {/*          src={e.avatar}*/}
                    {/*          alt={e.titulo}*/}
                    {/*          className="object-cover w-full h-full relative z-10 pointer-events-none"*/}
                    {/*          draggable={false}*/}
                    {/*        />*/}
                    {/*      </div>*/}
                    {/*      <div className="text-left">*/}
                    {/*        {e.descripcion}*/}
                    {/*      </div>*/}
                    {/*    </div>*/}
                    {/*  ))}*/}
                    {/*</div>*/}
                  </div>
                )}
              </div>

              <div className="w-[90%] md:w-[95%] xl:w-[97%] h-4 bg-[#ffaf42] z-50" />
              <div style={{backgroundColor: "#ffaf42", filter: "brightness(60%)"}} className="w-[90%] md:w-[95%] xl:w-[97%] h-4"/>
              <div style={{backgroundColor: "#ffaf42", filter: "brightness(60%)"}} className="w-8 z-1 h-4 absolute bottom-4 left-0" />
              <div style={{ backgroundColor: "#ffaf42", filter: "brightness(60%)"}} className="w-8 z-1 h-4 absolute bottom-4 right-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
