import React from "react";
import { Link } from "react-router-dom";

const CalculatorComponent = () => {
  // const btns: string[] = [
  //   "0",
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "dot",
  // ];
  // const operatorArray: string[] = ["plus", "minus", "multiply", "divide"];
  
  // let calcArray: string[] = [];
  // let totalArray: string[] = [];
  // let check: string = "";
  // enum CalcStatus {
  //   empty = "",
  //   calcEnd = "calcEnd",
  //   error = "error",
  //   plus = "plus",
  //   minus = "minus",
  //   multiply = "multiply",
  //   divide = "divide",
  // }
  
  // for (const elementId of btns) {
  //   let value: string = elementId;
  //   if (value === "dot") {
  //     value = ".";
  //   }
  //   const btnElement: HTMLElement = <HTMLElement>(
  //     document.getElementById(`button-${elementId}`)
  //   );
  //   btnElement.onclick = () => {
  //     if (check === CalcStatus.calcEnd || check === CalcStatus.error) {
  //       check = CalcStatus.error;
  //       document.getElementById("button-result").innerHTML = check;
  //     } else {
  //       calcArray.push(value);
  //       document.getElementById("button-result").innerHTML = calcArray.join("");
  //     }
  //   };
  // }
  
  // // 演算子ボタン
  // for (const operator of operatorArray) {
  //   const btnOperator: HTMLElement = <HTMLElement>(
  //     document.getElementById(`button-${operator}`)
  //   );
  //   btnOperator.onclick = () => {
  //     if (check === CalcStatus.error) {
  //       document.getElementById("button-result").innerHTML = check;
  //     } else if (check === CalcStatus.calcEnd) {
  //       check = operator;
  //       calcArray = [];
  //     } else {
  //       check = operator;
  //       totalArray.push(calcArray.join(""));
  //       calcArray = [];
  //     }
  //   };
  // }
  // // イコールボタン
  // let total: string = "";
  // const btnEq: HTMLElement = <HTMLElement>document.getElementById(`button-eq`);
  // btnEq.onclick = () => {
  //   totalArray.push(calcArray.join(""));
  //   calcArray = [];
  //   const result: string = sum(totalArray, check);
  //   document.getElementById("button-result").innerHTML = result;
  //   totalArray = [];
  //   totalArray.push(result);
  //   check = CalcStatus.calcEnd;
  // };
  
  // const sum = (totalArray: string[], calcStatus: string): string => {
  //   let func;
  //   if (calcStatus === CalcStatus.plus) {
  //     func = (sum, val) => sum + val;
  //   } else if (calcStatus === CalcStatus.minus) {
  //     func = (sum, val) => sum - val;
  //   } else if (calcStatus === CalcStatus.multiply) {
  //     func = (sum, val) => sum * val;
  //   } else if (calcStatus === CalcStatus.multiply) {
  //     func = (sum, val) => sum * val;
  //   }
  //   return String(totalArray.map(Number).reduce(func));
  // };
  
  // // クリアボタン
  // const btnclear: HTMLElement = <HTMLElement>(
  //   document.getElementById(`button-clear`)
  // );
  // btnclear.onclick = () => {
  //   document.getElementById("button-result").innerHTML = "0";
  //   calcArray = [];
  //   totalArray = [];
  //   check = CalcStatus.empty;
  // };

  return (
    <div>
      <Link to="/">時計</Link>
      <div className="grid grid-cols-calculator grid-rows-calculator w-calculator m-calculator p-calculator bg-black gap-calculator">
        <div className="bg-black text-white col-span-4 text-6xl mb-result pr-result text-right leading-result">0</div>
        <div className="button-clear bg-gray-300 hover:bg-gray-100 text-black text-center leading-button text-5xl cursor-pointer rounded-full">C</div>
        <div className="button-plus-minus bg-gray-300 hover:bg-gray-100 text-black text-center leading-button text-5xl cursor-pointer rounded-full">+/-</div>
        <div className="button-p bg-gray-300 hover:bg-gray-100 text-black text-center leading-button text-5xl cursor-pointer rounded-full">%</div>
        <div className="button-divide bg-yellow-500 hover:bg-yellow-300 text-white text-center leading-button text-5xl cursor-pointer rounded-full">÷</div>
        <div className="button-7 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">7</div>
        <div className="button-8 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">8</div>
        <div className="button-9 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">9</div>
        <div className="button-multiply bg-yellow-500 hover:bg-yellow-300 text-white text-center leading-button text-5xl cursor-pointer rounded-full">×</div>
        <div className="button-4 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">4</div>
        <div className="button-5 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">5</div>
        <div className="button-6 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">6</div>
        <div className="button-minus bg-yellow-500 hover:bg-yellow-300 text-white text-center leading-button text-5xl cursor-pointer rounded-full">−</div>
        <div className="button-1 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">1</div>
        <div className="button-2 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">2</div>
        <div className="button-3 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">3</div>
        <div className="button-plus bg-yellow-500 hover:bg-yellow-300 text-white text-center leading-button text-5xl cursor-pointer rounded-full">＋</div>
        <div className="button-0 col-span-2 bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">0</div>
        <div className="button-dot bg-gray-600 hover:bg-gray-400 text-white text-center leading-button text-5xl cursor-pointer rounded-full">.</div>
        <div className="button-eq bg-yellow-500 hover:bg-yellow-300 text-white text-center leading-button text-5xl cursor-pointer rounded-full">=</div>
      </div>
    </div>
  );
};

export default CalculatorComponent;