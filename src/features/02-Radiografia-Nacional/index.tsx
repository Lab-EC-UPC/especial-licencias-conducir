import pixel_bottom from "@/assets/pixel-bottom.png";

export const RadiografiaNacional = () => {

  return (
    <div className="relative">
      <div className="bg-[#131A31]">
        <div className="mx-auto container w-full min-h-screen">
          <div className="flex flex-col items-center text-center text-white h-full py-16 px-4">
            <h1 className="text-5xl mb-4 font-bold font-bitcount">Radiografía Nacional</h1>
            <p className="w-full md:max-w-2/3 font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <img
        src={pixel_bottom}
        alt="Pixel Bottom"
        className="w-full absolute bottom-0 translate-y-[90%]"
      />
    </div>
  )
}
