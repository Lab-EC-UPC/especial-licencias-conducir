import {motion} from "framer-motion";
import CARD_1 from "@/assets/where-from/card-1.png";
import CARD_2 from "@/assets/where-from/card-2.png";
import CARD_3 from "@/assets/where-from/card-3.png";
import CAR_1 from "@/assets/where-from/cars/car-1.png";
import CAR_2 from "@/assets/where-from/cars/car-2.png";
import CAR_3 from "@/assets/where-from/cars/car-3.png";
import CAR_4 from "@/assets/where-from/cars/car-4.png";
import CHAR_1 from "@/assets/where-from/characters/1.png";
import CHAR_2 from "@/assets/where-from/characters/2.png";
import CHAR_3 from "@/assets/where-from/characters/3.png";
import CHAR_4 from "@/assets/where-from/characters/4.png";
import CHAR_5 from "@/assets/where-from/characters/5.png";
import CHAR_6 from "@/assets/where-from/characters/6.png";
import {Car} from "@/features/03-De-Donde-Son-Los-Evaluados/components/Car.tsx";
import {IoIosInformationCircle} from "react-icons/io";

export const DeDondeSonLosEvaluados = () => {
  return (
    <div>
      <div className="mx-auto container w-full h-full mt-[60px] mb-[86px]">
        <div className="flex flex-col items-center text-center h-full px-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 md:mb-6 font-semibold font-bitcount">
            ¿De dónde vienen los evaluados?
          </h1>
          <p className="w-full md:max-w-2/3 font-medium text-md md:text-xl">
            Se ha detectado que muchos peruanos optan por viajar a otras provincias para dar el
            examen de conducir. Estas son los establecimientos autorizados en provincias con mayor
            cantidad de evaluados “foráneos”:
          </p>
          <div className="flex items-center justify-center gap-1 w-full md:max-w-2/3 text-primary mt-2">
            <IoIosInformationCircle size={16} />
            <p className="font-medium text-md md:text-base">
              Pulsa sobre los autos de colores para ver la data de cada provincia.
            </p>
          </div>

          <div className="flex gap-2 w-full text-left leading-none mt-8 md:mt-12">
            <div className="hidden mdflex flex-col justify-between">
              <h2 className="font-light text-[#868686]">Lugar de origen</h2>
              <h2 className="font-light text-[#868686]">Destino</h2>
            </div>

            <div className="grid xl:grid-cols-3 gap-20 md:gap-4 w-full min-h-[60vh]">
              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div className="pl-0 md:pl-8 xl:pl-0">
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">80%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-8 md:pr-18 xl:pr-16">
                    <p className="text-[#868686] text-3xl font-bold leading-none">20%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_1}
                  className="h-[50vh] md:h-[65vh] w-full object-cover not-selectable"
                  alt="Card 1"
                />

                <Car
                  src={CAR_1}
                  className="w-12 left-1/2 -translate-x-1/2 top-1/6"
                  custom={0}
                  character={CHAR_1}
                  percentage={6.1}
                  label="de Lima"
                />
                <Car
                  src={CAR_2}
                  className="w-14 left-1/5 -translate-x-1/2 top-1/3"
                  custom={1}
                  character={CHAR_2}
                  percentage={34}
                  label="de Junín"
                />
                <Car
                  src={CAR_3}
                  className="w-14 left-2/3 -translate-x-1/2 top-1/2"
                  custom={2}
                  character={CHAR_3}
                  percentage={35.5}
                  label="sin declarar"
                />

                <div className="pt-2">
                  <label className="md:hidden flex justify-center font-light text-[#868686] text-xs leading-none">Lugar de origen</label>
                  <h1 className="text-center w-full pl-0 md:pl-8 font-medium text-lg">Oxapampa</h1>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div className="text-left pl-4 md:pl-30 xl:pl-4">
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">70%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-2 md:pr-3 xl:pr-10">
                    <p className="text-[#868686] text-3xl font-bold leading-none">20%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_2}
                  className="h-[50vh] md:h-[65vh] w-full object-cover not-selectable"
                  alt="Card 2"
                />

                <Car
                  src={CAR_4}
                  className="w-14 left-1/2 -translate-x-1/2 top-1/6"
                  custom={0}
                  character={CHAR_4}
                  percentage={49}
                  label="de Lima"
                />
                <Car
                  src={CAR_2}
                  className="w-14 left-1/4 -translate-x-1/2 top-1/3"
                  custom={1}
                  character={CHAR_5}
                  percentage={40}
                  label="de ellos son de L. Metropolitana"
                />

                <div className="pt-2">
                  <label className="md:hidden flex justify-center font-light text-[#868686] text-xs leading-none">Lugar de origen</label>
                  <h1 className="text-center w-full pl-0 md:pl-8 font-medium text-lg">Huacho</h1>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div className="text-left  pl-4 md:pl-32 xl:pl-8">
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">80%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-6 md:pr-56 xl:pr-18">
                    <p className="text-[#868686] text-3xl font-bold leading-none">40%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_3}
                  className="h-[50vh] md:h-[65vh] w-full object-cover not-selectable"
                  alt="Card 3"
                />

                <Car
                  src={CAR_1}
                  className="w-12 left-1/3 -translate-x-1/2 top-1/6"
                  custom={0}
                  character={CHAR_6}
                  percentage={50}
                  label="sin declarar"
                />

                <div className="pt-2">
                  <label className="md:hidden flex justify-center font-light text-[#868686] text-xs leading-none">Lugar de origen</label>
                  <h1 className="text-center w-full pl-0 md:pl-8 font-medium text-lg">Ica</h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
