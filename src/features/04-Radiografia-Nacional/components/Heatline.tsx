export const Heatline = () => {
  const min = 0.5;
  const max = 0.8;
  const step = 0.05;

  const gradient = "linear-gradient(90deg, #DBEECB 0%, #ED548C 54%, #AC5EAA 100%)";

  const ticks = Array.from(
    { length: Math.round((max - min) / step) + 1 },
    (_, i) => (min + i * step).toFixed(2)
  );

  const toPct = (v: string) => ((parseFloat(v) - min) / (max - min)) * 100;

  return (
    <div className="w-full mx-auto">
      <div
        className="relative h-4"
        style={{ background: gradient }}
      >
        {ticks.map((t) => (
          <div
            key={`tick-${t}`}
            className="absolute top-full mt-1 flex flex-col items-center"
            style={{ left: `${toPct(t)}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-px h-2 bg-white/70" />
            <span className="mt-1 text-xs text-white/70">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
