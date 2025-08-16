import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
  cubicBezier,
  useInView,
} from "framer-motion";
import CAR from "@/assets/probability/car.png";
import PROGRESS_BAR from "@/assets/probability/progress-bar.png";
import React, { useRef } from "react";

export function PixelProgress({ value }: { value: number }) {
  const target = Math.max(0, Math.min(100, value));
  const DURATION = 2.5;
  const EASE = cubicBezier(0.22, 1, 0.36, 1);

  const progress = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5, once: false });

  React.useEffect(() => {
    if (inView) {
      progress.set(0);
      animate(progress, target, {
        duration: DURATION,
        ease: EASE,
        type: "tween",
      });
    }
  }, [inView, target, progress]);

  // Barra (ancho en %)
  const widthPct = useTransform(progress, (v) => `${v}%`);

  const leftPx = useTransform(progress, (v) => {
    const t = Math.max(0, Math.min(100, v)) / 100;
    return `min(calc(8px + ${t} * (100% - 16px)), calc(100% - 120px))`;
  });

  const [shown, setShown] = React.useState(0);
  useMotionValueEvent(progress, "change", (v) => setShown(Math.round(v)));

  return (
    <div ref={containerRef} className="relative rounded-[14px] p-2">
      <div className="relative h-[62px] rounded-[10px] overflow-hidden">
        <div className="absolute inset-y-0 left-[8px] right-[8px] top-[5px] bottom-[5px]">
          <div className="absolute inset-0 z-0" style={{ background: "#FF8DB3" }} />

          <motion.div
            className="absolute inset-y-0 left-0 z-[1]"
            style={{ width: widthPct, background: "#FFA4C9" }}
          />

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-[3]"
            style={{ left: value === 100 ? "calc(100% - 120px)" : leftPx }}
          >
            <img
              src={CAR}
              alt=""
              className="w-auto h-8 select-none"
              style={{ imageRendering: "pixelated" }}
              draggable={false}
            />
            <span className="font-bold text-2xl text-primary py-1 rounded-md font-bitcount pr-2">
              {shown}%
            </span>
          </motion.div>
        </div>

        <img
          src={PROGRESS_BAR}
          alt=""
          className="absolute inset-0 w-full h-full z-[4] select-none pointer-events-none"
          style={{ imageRendering: "pixelated" }}
          draggable={false}
        />
      </div>
    </div>
  );
}
