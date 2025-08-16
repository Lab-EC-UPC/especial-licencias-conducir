import {motion, type Variants} from "framer-motion";

import CARD_1 from "@/assets/where-from/card-1.png";
import CARD_2 from "@/assets/where-from/card-2.png";
import CARD_3 from "@/assets/where-from/card-3.png";
import CAR_1 from "@/assets/where-from/cars/car-1.png";
import CAR_2 from "@/assets/where-from/cars/car-2.png";
import CAR_3 from "@/assets/where-from/cars/car-3.png";
import CAR_4 from "@/assets/where-from/cars/car-4.png";

const carVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  show: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const DeDondeSonLosEvaluados = () => {
  return (
    <div>
      <div className="mx-auto container w-full min-h-screen h-full mt-32">
        <div className="flex flex-col items-center text-center h-full py-20 px-4">
          <h1 className="text-5xl mb-4 font-bold font-bitcount text-[#131A31]">¿De dónde son los evaluados?</h1>
          <p className="w-full md:max-w-2/3 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="flex gap-2 w-full text-left leading-none mt-12">
            <div className="flex flex-col justify-between">
              <h2 className="font-light text-[#868686]">Lugar de origen</h2>
              <h2 className="font-light text-[#868686]">Destino</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 w-full h-[60vh]">
              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div>
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">80%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-16">
                    <p className="text-[#868686] text-3xl font-bold leading-none">20%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_1}
                  className="h-[65vh] w-full object-cover not-selectable"
                  alt="Card 1"
                />

                <motion.img
                  custom={0}
                  variants={carVariants}
                  src={CAR_1}
                  className="not-selectable h-auto w-12 absolute z-50 left-1/2 -translate-x-1/2 top-1/6"
                  alt="Car 1"
                />
                <motion.img
                  custom={1}
                  variants={carVariants}
                  src={CAR_2}
                  className="not-selectable h-auto w-14 absolute z-50 left-1/5 -translate-x-1/2 top-1/3"
                  alt="Car 2"
                />
                <motion.img
                  custom={2}
                  variants={carVariants}
                  src={CAR_3}
                  className="not-selectable h-auto w-14 absolute z-50 left-2/3 -translate-x-1/2 top-1/2"
                  alt="Car 3"
                />

                <h1 className="text-center w-full pl-8 font-medium text-lg">Oxapampa</h1>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div className="text-left pl-4">
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">70%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-10">
                    <p className="text-[#868686] text-3xl font-bold leading-none">20%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_2}
                  className="h-[65vh] w-full object-cover not-selectable"
                  alt="Card 2"
                />

                <motion.img
                  custom={0}
                  variants={carVariants}
                  src={CAR_4}
                  className="not-selectable h-auto w-14 absolute z-50 left-1/2 -translate-x-1/2 top-1/6"
                  alt="Car 4"
                />
                <motion.img
                  custom={1}
                  variants={carVariants}
                  src={CAR_2}
                  className="not-selectable h-auto w-14 absolute z-50 left-1/4 -translate-x-1/2 top-1/3"
                  alt="Car 2"
                />

                <h1 className="text-center w-full pl-8 font-medium text-lg">Huacho</h1>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2 relative"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
              >
                <div className="flex justify-between w-full items-end">
                  <div className="text-left pl-8">
                    <p className="text-[#58B7CF] text-5xl font-black leading-none">80%</p>
                    <p className="text-[#868686] text-lg leading-none">Foráneos</p>
                  </div>
                  <div className="text-left pr-18">
                    <p className="text-[#868686] text-3xl font-bold leading-none">40%</p>
                    <p className="text-[#868686] text-lg leading-none">Residentes</p>
                  </div>
                </div>

                <img
                  src={CARD_3}
                  className="h-[65vh] w-full object-cover not-selectable"
                  alt="Card 3"
                />

                <motion.img
                  custom={0}
                  variants={carVariants}
                  src={CAR_1}
                  className="not-selectable h-auto w-12 absolute z-50 left-1/3 -translate-x-1/2 top-1/6"
                  alt="Car 1"
                />

                <h1 className="text-center w-full pl-8 font-medium text-lg">Ica</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
