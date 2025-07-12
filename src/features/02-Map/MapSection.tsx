import {PeruMap} from "./components/PeruMap.tsx";

export const MapSection = () => {

  return (
    <div className="bg-violet-200">
      <div className="mx-auto container w-full h-screen">
        <div className="flex items-center justify-center text-center h-full py-8">
          <PeruMap />
        </div>
      </div>
    </div>
  )
}
