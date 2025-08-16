import pixel_bottom from "@/assets/pixel-bottom.png";

export const RadiografiaNacional = () => {

  return (
    <div>
      <img
        src={pixel_bottom}
        alt="Pixel Bottom"
        className="w-full"
      />
      <div className="bg-primary">
        <div className="mx-auto container w-full min-h-screen">
          <div className="flex flex-col items-center text-center text-white h-full py-16 px-4">
            <h1 className="text-5xl mb-4 font-bold font-bitcount">Radiografía Nacional</h1>
            <p className="w-full md:max-w-2/3 font-medium text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <img
        src={pixel_bottom}
        alt="Pixel Bottom"
        className="w-full scale-y-[-1] -translate-y-[2px]"
      />
    </div>
  )
}
