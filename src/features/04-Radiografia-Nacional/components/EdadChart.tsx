import Data1Icon from "@/assets/icons/Data 1_GRAFICO 1-3.png";
import Data2Icon from "@/assets/icons/Data 2_GRAFICO 1-3.png";
import Data3Icon from "@/assets/icons/Data 3_GRAFICO 1-3.png";
import Data4Icon from "@/assets/icons/Data 4_GRAFICO 1-3.png";
import Data5Icon from "@/assets/icons/Data 5_GRAFICO 1-3.png";
import Data6Icon from "@/assets/icons/Data 6_GRAFICO 1-3.png";
import { useState, useEffect, useMemo, useCallback } from "react";

// Types and interfaces
interface AgeGroup {
  label: string;
  height: number;
  lastRowCrosses: number;
  icon: string;
}

interface WindowSize {
  width: number;
  height: number;
}

interface ResponsiveConfig {
  barWidth: number;
  barSpacing: number;
  containerHeight: number;
  crossPattern: {
    crossesPerRow: number;
    unitSize: number;
    crossSizeMultiplier: number;
    spacingMultiplier: number;
  };
  colors: {
    highlighted: string;
    normal: string;
    text: string;
  };
  typography: {
    fontFamily: string;
  };
}

interface CrossPatternProps {
  height: number;
  color?: string;
  isHighlighted?: boolean;
  lastRowCrosses?: number;
  config: ResponsiveConfig;
}

// Constants
const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

const HIGHLIGHTED_BAR_INDEX = 1;

const DEFAULT_COLORS = {
  highlighted: "#ED548C",
  normal: "#E787A1",
  text: "#ED548C",
} as const;

// Utility functions (moved outside component for better performance)
const getResponsiveValue = (
  windowWidth: number,
  mobileValue: number,
  tabletValue: number,
  desktopValue: number
): number => {
  if (windowWidth < BREAKPOINTS.MOBILE) return mobileValue;
  if (windowWidth < BREAKPOINTS.TABLET) return tabletValue;
  return desktopValue;
};

// const getNubeSize = (windowWidth: number) => {
//   const width = getResponsiveValue(windowWidth, 80, 110, 135);
//   const height = getResponsiveValue(windowWidth, 40, 55, 67.5);
//   return { width: `${width}px`, height: `${height}px` };
// };

const getNubeMargin = (windowWidth: number): string => {
  const margin = getResponsiveValue(windowWidth, 25, 35, 50);
  return `${margin}px`;
};

// Custom hook for debounced window resize
const useDebounceWindowSize = (delay: number = 150): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return windowSize;
};

// Data configuration
const AGE_GROUPS_DATA: AgeGroup[] = [
  { label: "17-27", height: 345, lastRowCrosses: 10, icon: Data1Icon },
  { label: "28-38", height: 450, lastRowCrosses: 4, icon: Data2Icon },
  { label: "39-49", height: 336, lastRowCrosses: 7, icon: Data3Icon },
  { label: "50-60", height: 190, lastRowCrosses: 1, icon: Data4Icon },
  { label: "61-71", height: 117, lastRowCrosses: 3, icon: Data5Icon },
  { label: "72-80", height: 10, lastRowCrosses: 11, icon: Data6Icon },
];

// Cross pattern component (memoized for performance)
const CrossPattern: React.FC<CrossPatternProps> = ({
  height,
  color = DEFAULT_COLORS.normal,
  isHighlighted = false,
  lastRowCrosses,
  config,
}) => {
  const crosses = useMemo(() => {
    const { crossesPerRow, unitSize, crossSizeMultiplier, spacingMultiplier } = config.crossPattern;
    const actualLastRowCrosses = lastRowCrosses ?? crossesPerRow;
    
    const crossSize = crossSizeMultiplier * unitSize;
    const horizontalSpacing = spacingMultiplier * unitSize;
    const verticalSpacing = spacingMultiplier * unitSize;
    const totalCrossHeight = crossSize + verticalSpacing;
    const crossesPerColumn = Math.max(1, Math.ceil(height / totalCrossHeight));
    
    const crossElements: React.ReactElement[] = [];
    
    for (let row = 0; row < crossesPerColumn; row++) {
      const crossesInThisRow = row === 0 
        ? Math.min(actualLastRowCrosses, crossesPerRow) 
        : crossesPerRow;
      
      for (let col = 0; col < crossesInThisRow; col++) {
        const x = col * (crossSize + horizontalSpacing);
        const y = row * totalCrossHeight;
        
        if (y + crossSize <= height) {
          crossElements.push(
            <g key={`cross-${row}-${col}`}>
              <path
                d={`
                  M ${x} ${y + unitSize * 1.5}
                  L ${x + crossSize} ${y + unitSize * 1.5}
                  L ${x + crossSize} ${y + unitSize * 4.5}
                  L ${x + unitSize * 4.5} ${y + unitSize * 4.5}
                  L ${x + unitSize * 4.5} ${y + crossSize}
                  L ${x + unitSize * 1.5} ${y + crossSize}
                  L ${x + unitSize * 1.5} ${y + unitSize * 4.5}
                  L ${x} ${y + unitSize * 4.5}
                  L ${x} ${y + unitSize * 1.5}
                  M ${x + unitSize * 1.5} ${y}
                  L ${x + unitSize * 4.5} ${y}
                  L ${x + unitSize * 4.5} ${y + unitSize * 1.5}
                  L ${x + unitSize * 1.5} ${y + unitSize * 1.5}
                  Z
                `}
                fill={color}
                opacity={isHighlighted ? 1 : 0.6}
              />
            </g>
          );
        }
      }
    }
    
    return crossElements;
  }, [height, color, isHighlighted, lastRowCrosses, config.crossPattern]);

  return (
    <svg 
      width={config.barWidth} 
      height={height} 
      style={{ display: 'block' }}
      role="img"
      aria-label={`Patrón de cruces representando datos estadísticos con altura de ${height}px`}
    >
      {crosses}
    </svg>
  );
};

// Main component
export const EdadChart: React.FC = () => {
  const windowSize = useDebounceWindowSize();

  // Memoized responsive configuration
  const config = useMemo<ResponsiveConfig>(() => ({
    barWidth: getResponsiveValue(windowSize.width, 60, 80, 96),
    barSpacing: getResponsiveValue(windowSize.width, 8, 10, 11),
    containerHeight: getResponsiveValue(windowSize.width, 400, 500, 600),
    crossPattern: {
      crossesPerRow: getResponsiveValue(windowSize.width, 8, 11, 13),
      unitSize: 0.9,
      crossSizeMultiplier: 6,
      spacingMultiplier: 1.0,
    },
    colors: DEFAULT_COLORS,
    typography: {
      fontFamily: 'var(--font-helvetica)',
    },
  }), [windowSize.width]);

  // Memoized size calculations
  // const nubeSize = useMemo(() => getNubeSize(windowSize.width), [windowSize.width]);
  const nubeMargin = useMemo(() => getNubeMargin(windowSize.width), [windowSize.width]);

  // Calculate label margin with proper parsing
  const getLabelMargin = useCallback((index: number): string => {
    const marginValue = parseInt(nubeMargin, 10);
    const multiplier = index === AGE_GROUPS_DATA.length - 1 ? 0.6 : 0.2;
    return `-${marginValue * multiplier}px`;
  }, [nubeMargin]);

  return (
    <section 
      className="w-full max-w-4xl mx-auto"
      role="img"
      aria-labelledby="edad-chart-title"
      aria-describedby="edad-chart-description"
    >
      <div className="sr-only" id="edad-chart-description">
        Gráfico de barras que muestra la distribución por edades de los evaluados para licencias de conducir
      </div>
      
      <div
        // style={{
        //   height: `${config.containerHeight}px`,
        //   gap: `${config.barSpacing}px`,
        // }}
        className={`flex items-end justify-center h-full gap-0 md:gap-2`}
      >
        {AGE_GROUPS_DATA.map((ageGroup, index) => (
          <div 
            key={ageGroup.label} 
            className="flex flex-col items-center"
            style={{ width: `${config.barWidth}px` }}
          >
            {/* Icon container */}
            <div className="mb-2 relative flex">
              <div
                // style={{
                //   width: nubeSize.width,
                //   height: nubeSize.height,
                //   display: 'flex',
                //   alignItems: 'center',
                //   justifyContent: 'right',
                //   marginLeft: nubeMargin,
                //   position: 'relative',
                //   zIndex: 10,
                // }}
                className="w-16 md:w-28 xl:w-32 h-auto relative z-10 right-1 md:right-0 left-0 md:left-2"
              >
                <img 
                  src={ageGroup.icon} 
                  alt={`Icono representativo para el grupo de edad ${ageGroup.label}`}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'scale-down',
                  }}
                />
              </div>
            </div>
            
            {/* Bar container */}
            <div 
              className="rounded-t-sm relative overflow-hidden"
              style={{ 
                width: `${config.barWidth}px`,
                height: `${ageGroup.height}px`,
              }}
              role="img"
              aria-label={`Barra de datos para edad ${ageGroup.label} con ${ageGroup.height} unidades de altura`}
            >
              <CrossPattern 
                height={ageGroup.height} 
                color={index === HIGHLIGHTED_BAR_INDEX ? config.colors.highlighted : config.colors.normal} 
                isHighlighted={index === HIGHLIGHTED_BAR_INDEX}
                lastRowCrosses={ageGroup.lastRowCrosses}
                config={config}
              />
            </div>
            
            {/* Age label */}
            <div 
              className="mt-2 text-base font-medium text-white text-center w-full" 
              style={{ 
                fontFamily: config.typography.fontFamily,
                marginLeft: getLabelMargin(index),
              }}
            >
              {ageGroup.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Chart title */}
      <div className="mt-8 md:mt-10 text-center">
        <h4 
          id="edad-chart-title"
          className="text-lg md:text-xl font-medium text-white"
          style={{ fontFamily: config.typography.fontFamily }}
        >
          Edad de los evaluados
        </h4>
      </div>
    </section>
  );
};