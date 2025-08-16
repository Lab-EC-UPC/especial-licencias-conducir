import React from 'react';
import PINK from "@/assets/buttons/button-pink.png";
import BLUE from "@/assets/buttons/button-blue.png";
import SAND from "@/assets/buttons/button-sand.png";

interface Props {
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: "pink" | "blue" | "sand";
}

const Button = ({
                         text = "Ver más",
                         onClick,
                         variant = "pink",
                     }: Props) => {
    const bgImage = {
        pink: PINK,
        blue: BLUE,
        sand: SAND,
    }[variant];

    return (
        <button
            onClick={onClick}
            className="w-[163px] h-[38px] bg-no-repeat bg-contain text-[#0f1629] font-bold font-bitcount leading-none flex items-center justify-center duration-200 hover:translate-y-[10%] hover:cursor-pointer"
            style={{
                backgroundImage: `url('${bgImage}')`,
                imageRendering: 'pixelated',
            }}
        >
      <span className={`-translate-y-[1px] inline-block font-bitcount ${variant==="pink" && "text-white"}`}>
        {text}
      </span>
        </button>
    );
};

export default Button;
