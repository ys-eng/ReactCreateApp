import React from "react";

interface CalcBtnProps {
  title: string;
  className: string;
  onClickCalcBtn: () => void;
}

const CalcOperatorBtnComponent: React.FC<CalcBtnProps> = ({
  title,
  className,
  onClickCalcBtn,
}) => {
  const handleClick = () => {
    onClickCalcBtn();
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
export default CalcOperatorBtnComponent;
