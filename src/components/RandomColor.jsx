import { useEffect } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

export function RandomColor(props) {
  useEffect(() => {
    const gradient = generateGradient(props.palette);
    document.body.style.background = gradient;
  }, [props.palette]);

  const generateGradient = (colors) => {
    if (!colors || !Array.isArray(colors) || colors.length === 0) {
      return "linear-gradient(to right top, #ffffff, #cccccc)";
    }
    return `linear-gradient(to right top, ${colors
      .map((color, index) => {
        const position = (index / (colors.length - 1)) * 200;
        return `${color} ${position}%`;
      })
      .join(", ")})`;
  };

  return (
    <div className="flex flex-col items-center text-gray-400 cursor-pointer">
      <div
        className="h-32 w-16 sm:h-48 sm:w-24 lg:h-72 lg:w-40"
        style={{
          backgroundColor: props.cor,
        }}
        onClick={() => {
          navigator.clipboard.writeText(props.cor);
        }}
      />

      <div className="flex flex-col items-center">
        <button
          className="text-lg sm:text-xl"
          style={{ color: props.cor }}
          onClick={() => {
            navigator.clipboard.writeText(props.cor);
          }}
        >
          {props.cor}
        </button>
        <button className="text-gray-900" onClick={props.onBlock}>
          {props.block ? (
            <FaLockOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <FaLock className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </div>
  );
}

export default RandomColor;
