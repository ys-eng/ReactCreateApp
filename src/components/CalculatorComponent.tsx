import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalcBtnComponent from "./CalcBtnComponent";

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
  const [display, setDisplay] = useState("0");
  const grayColor = "bg-gray-600 hover:bg-gray-400 text-white";
  const whiteColor = "bg-gray-300 hover:bg-gray-100 text-black";
  const orangeColor = "bg-yellow-500 hover:bg-yellow-300 text-white";
  const clickCalcBtn = (title: string) => {
    setDisplay(title);
  };

  return (
    <div>
      <Link to="/">時計</Link>

      <div className="grid grid-cols-calculator grid-rows-calculator w-calculator m-calculator p-calculator bg-black gap-calculator">
        {/* 計算結果 */}
        <div className="bg-black text-white col-span-4 text-6xl mb-result pr-result text-right leading-result">
          {display}
        </div>
        <CalcBtnComponent
          title="C"
          className={whiteColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="+/-"
          className={whiteColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="%"
          className={whiteColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="÷"
          className={orangeColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="7"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="8"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="9"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="×"
          className={orangeColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="4"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="5"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="6"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="−"
          className={orangeColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="1"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="2"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="3"
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="＋"
          className={orangeColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="0"
          className={`col-span-2 ${grayColor}`}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="."
          className={grayColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="="
          className={orangeColor}
          onClickCalcBtn={clickCalcBtn}
        ></CalcBtnComponent>
      </div>
    </div>
  );
};

export default CalculatorComponent;
