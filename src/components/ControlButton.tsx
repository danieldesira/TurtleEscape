import React from "react";

interface Props {
  text: string;
  callback: Function;
}

function ControlButton({ text, callback }: Props) {
  let timer = 0;
  const handleMousedown = () => {
    callback();
    timer = requestAnimationFrame(handleMousedown);
  };
  const handleMouseup = () => cancelAnimationFrame(timer);
  return (
    <button
      type="button"
      className="rounded-7xl w-20 h-20 bg-theme-color dark:bg-dark-theme-color opacity-50 hover:opacity-70"
      onMouseDown={handleMousedown}
      onMouseLeave={handleMouseup}
      onMouseUp={handleMouseup}
      onTouchStart={handleMousedown}
      onTouchEnd={handleMouseup}
    >
      {text}
    </button>
  );
}

export default ControlButton;
