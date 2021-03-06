import React from "react";

interface CalcBtnProps {
  title: string;
  className: string;
}

const CalcBtnComponent: React.FC<CalcBtnProps> = ({ title, className }) => {
  return (
    <div
      className={`text-center leading-button text-5xl cursor-pointer rounded-full ${className}`}
    >
      {title}
    </div>
  );
};
export default CalcBtnComponent;
