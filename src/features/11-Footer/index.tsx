import { type Credit, credits } from "@/features/11-Footer/data/credits.ts";

export const FooterSection = () => {

  return (
    <div className="bg-primary min-h-screen py-24">
      <div className="mx-auto container w-full">
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-4xl xl:text-5xl mb-6 md:mb-8 font-semibold font-bitcount text-white">
            Créditos
          </h1>
          <div className="space-y-10 md:space-y-16 px-4">
            {credits.map((credit: Credit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4"
              >
                {/*${credit.assetOrientation === "right" ? "flex-row-reverse" : "flex-row"}*/}
                <div className={`flex flex-col items-center mb-8 gap-4`}>
                  {credit.asset && (
                    <img
                      src={credit.asset}
                      alt={credit.group}
                      className="w-10 md:w-12 h-auto mr-2 md:mr-4"
                    />
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold font-bitcount text-yellow">
                    {credit.group}
                  </h2>
                </div>
                <div className="grid gap-5 items-start justify-start">
                  {credit.members.map((member, index) => (
                    <a
                      key={index}
                      href={member.url}
                      target="_blank"
                      className={`flex gap-2 md:gap-5 items-center ${member.url && "hover:cursor-pointer hover:scale-105 duration-200"}`}
                    >
                      {member.photo ? (
                        <div>
                          <img
                            src={member.photo}
                            alt={member.name}
                            className={`w-14 md:w-16 object-cover ${member.photoNotRound ? "h-auto" : "rounded-full h-14 md:h-16"} ${member.objectPosition === "center" ? "object-center" : "object-top"}`}
                          />
                        </div>
                      ): (
                        <div className="w-14 md:w-16 bg-primary" />
                      )}
                      <div className="text-left text-white">
                        <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm md:text-base font-medium">{member.role}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>


          <a target="_blank" href="https://lab-ecdata-upc.netlify.app/" className="mt-16 md:mt-[90px] hover:scale-105 duration-200">
            <img src="https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/logo-ec-upc-png.png"
                 width= "330"
            />
          </a>
          <a target="_blank" href="https://elcomercio.pe/ecdata/" className="mt-16 md:mt-[90px] hover:scale-105 duration-200">
            <img src="https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/logo-unidad-ec-data.png"
                 width="250"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
