import CARD_1 from "@/assets/where-from/card-1.png";
import CARD_2 from "@/assets/where-from/card-2.png";
import CARD_3 from "@/assets/where-from/card-3.png";

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
          <div className="flex gap-2 w-full text-left leading-none mt-4">
            <div className="flex flex-col justify-between">
              <h2 className="font-light text-[#868686]">Lugar de origen</h2>
              <h2 className="font-light text-[#868686]">Destino</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 w-full h-[60vh]">

              <div className="flex flex-col gap-2">
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
                  className="h-[65vh] w-full object-cover"
                  alt="Card 1"
                />
                <h1 className="text-center w-full pl-8 font-medium text-lg">Oxapampa</h1>
              </div>

              <div className="flex flex-col gap-2">
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
                  className="h-[65vh] w-full object-cover"
                  alt="Card 2"
                />
                <h1 className="text-center w-full pl-8 font-medium text-lg">Huacho</h1>
              </div>

              <div className="flex flex-col gap-2">
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
                  className="h-[65vh] w-full object-cover"
                  alt="Card 3"
                />
                <h1 className="text-center w-full pl-8 font-medium text-lg">Ica</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
