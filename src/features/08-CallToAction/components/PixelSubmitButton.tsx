import buttonBlue from '../../../assets/buttons/button-blue.png';
interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}
export const PixelSubmitButton = ({ text, onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-64 max-w-lg transition-all duration-200 hover:cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
      `}
      style={{
        backgroundImage: `url(${buttonBlue})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '60px'
      }}
    >
      <div className="relative z-10 flex items-center justify-center h-full py-4">
        <span 
          className="text-white font-bold text-sm md:text-base"
          style={{ 
            fontFamily: 'var(--font-helvetica)',
            fontWeight: 700,
            color: '#FFFFFF',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          {text}
        </span>
      </div>
    </button>
  );
};
