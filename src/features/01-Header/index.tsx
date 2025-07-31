import hero from "@/assets/hero.png";

export const Header = () => {
  return (
    <div
      className="bg-[#131A31] bg-contain bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="mx-auto container w-full h-screen" />
    </div>
  );
};
