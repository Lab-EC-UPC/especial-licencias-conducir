import {motion, type Variants} from "framer-motion";
import TOOLTIP_BG from "@/assets/where-from/popup.png";
import {Popover, PopoverContent, PopoverTrigger} from "@heroui/popover";

interface Props {
  className: string;
  src: string;
  custom: number;

  character: string;
  percentage: number;
  label: string;
}

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

export const Car = ({
  className,
  src,
  custom,
  character,
  percentage,
  label,
}: Props) => {

  return (
    <Popover
      classNames={{content: "bg-transparent p-0 shadow-none border-none"}}
    >
      <PopoverTrigger>
        <motion.img
          custom={custom}
          variants={carVariants}
          src={src}
          className={`not-selectable hover:cursor-pointer hover:scale-110 duration-200 h-auto absolute z-50 ${className}`}
          alt={src}
        />
      </PopoverTrigger>
      <PopoverContent>
        <div
          className="h-32 w-64 bg-no-repeat bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${TOOLTIP_BG})` }}
        >
          <div className="flex gap-2 items-center justify-center h-full w-full px-4 pt-4 pb-6">
            <img
              src={character}
              alt={character}
              className="h-full w-auto"
            />
            <div className="flex flex-col text-left w-[60%]">
              <h1 className="text-2xl md:text-3xl xl:text-5xl font-extrabold leading-none">{percentage}%</h1>
              <p className="font-medium text-lg leading-none">{label}</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}