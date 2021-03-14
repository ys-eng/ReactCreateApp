import React from "react";

interface CalcBtnProps {
  title: string;
  className: string;
  onClickCalcBtn: (btnTitle: string) => void;
}

const CalcBtnComponent: React.FC<CalcBtnProps> = ({
  title,
  className,
  onClickCalcBtn,
}) => {
  const handleClick = () => {
    onClickCalcBtn(title);
  };
  return (
    <div
      className={`text-center leading-button text-5xl cursor-pointer rounded-full ${className}`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
export default CalcBtnComponent;
