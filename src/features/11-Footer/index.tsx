import { type Credit, credits } from "@/features/11-Footer/data/credits.ts";

export const FooterSection = () => {

  return (
    <div className="bg-primary min-h-screen py-24">
      <div className="mx-auto container w-full">
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-4xl xl:text-5xl mb-6 md:mb-8 font-semibold font-bitcount text-white">
            Créditos
          </h1>
          <div className="space-y-16">
            {credits.map((credit: Credit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4"
              >
                {/*${credit.assetOrientation === "right" ? "flex-row-reverse" : "flex-row"}*/}
                <div className={`flex flex-col items-center mb-8 gap-4`}>
                  <img
                    src={credit.asset}
                    alt={credit.group}
                    className="w-10 md:w-12 h-auto mr-2 md:mr-4"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold font-bitcount text-yellow">
                    {credit.group}
                  </h2>
                </div>
                <div className="grid gap-5 items-start justify-start">
                  {credit.members.map((member, index) => (
                    <a
                      key={index}
                      href={member.url}
                      target="_blank"
                      className={`flex gap-5 items-center ${member.url && "hover:cursor-pointer hover:scale-105 duration-200"}`}
                    >
                      <div>
                        <img
                          src={member.photo}
                          alt={member.name}
                          className={`w-14 h-14 md:w-16 md:h-16 object-cover rounded-full ${member.objectPosition === "center" ? "object-center" : "object-top"}`}
                        />
                      </div>
                      <div className="text-left text-white">
                        <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
                        <p className="text-md md:text-lg font-medium">{member.role}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>


          <img src = "https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/logo-ec-upc-png.png"
          width= "330" style={{marginTop: "90px"}}
          />
          <img src = "https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/logo-unidad-ec-data.png"
          width= "250" style={{marginTop: "90px"}}
          />
        </div>
      </div>
    </div>
  )
}
