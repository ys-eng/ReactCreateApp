import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalcBtnComponent from "./CalcBtnComponent";

let displayArray: string[] = [];
let calcArray: string[] = [];

const CalculatorComponent = () => {
  const grayColor = "bg-gray-600 hover:bg-gray-400 text-white";
  const whiteColor = "bg-gray-300 hover:bg-gray-100 text-black";
  const orangeColor = "bg-yellow-500 hover:bg-yellow-300 text-white";

  enum Operator {
    Plus="+",
    Minus="-",
    Multiply="*",
    Divide="/",
    Percent="%",
  }

  const [display, setDisplay] = useState("0");
  // ナンバーボタン+ドットボタン
  const numberBtn = (title: string) => {
    displayArray.push(title);
    setDisplay(displayArray.join(""));
  };
  // イコールボタン
  const eqBtn = () => {
    calcArray.push(displayArray.join(""));
    const result = Function('return ('+calcArray.join(" ")+');')();
    setDisplay(result);
    displayArray = [];
    calcArray = [result];
  };
  // クリアボタン
  const clearBtn = () => {
    displayArray = [];
    calcArray = [];
    setDisplay("0");
  };
  // 加算
  const plusBtn = () => {
    calcArray.push(displayArray.join(""));
    displayArray = [];
    calcArray.push(Operator.Plus);
  };
  // 減算
  const minusBtn = () => {
    calcArray.push(displayArray.join(""));
    displayArray = [];
    calcArray.push(Operator.Minus);
  };
  // 乗算
  const multiplyBtn = () => {
    calcArray.push(displayArray.join(""));
    displayArray = [];
    calcArray.push(Operator.Multiply);
  };
  // 除算
  const divideBtn = () => {
    calcArray.push(displayArray.join(""));
    displayArray = [];
    calcArray.push(Operator.Divide);
  };
  // パーセントボタン
  const percentBtn = () => {
    calcArray.push(displayArray.join(""));
    displayArray = [];
    calcArray.push(Operator.Percent);
  };
  // プラスマイナスボタン
  const plusMinusBtn = () => {
    const plusMinus: string = String(Number(display) * -1)
    displayArray = [plusMinus];
    setDisplay(displayArray.join(""));
  }

  return (
    <div>
      <Link to="/">時計</Link>

      <div className="grid grid-cols-calculator grid-rows-calculator w-calculator m-calculator p-calculator bg-black gap-calculator">
        {/* 出力画面 */}
        <div className="bg-black text-white col-span-4 text-6xl mb-result pr-result text-right leading-result">
          {display}
        </div>
        <CalcBtnComponent
          title="C"
          className={whiteColor}
          onClickCalcBtn={clearBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="+/-"
          className={whiteColor}
          onClickCalcBtn={plusMinusBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="%"
          className={whiteColor}
          onClickCalcBtn={percentBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="÷"
          className={orangeColor}
          onClickCalcBtn={divideBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="7"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="8"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="9"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="×"
          className={orangeColor}
          onClickCalcBtn={multiplyBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="4"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="5"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="6"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="−"
          className={orangeColor}
          onClickCalcBtn={minusBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="1"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="2"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="3"
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="＋"
          className={orangeColor}
          onClickCalcBtn={plusBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="0"
          className={`col-span-2 ${grayColor}`}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="."
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title="="
          className={orangeColor}
          onClickCalcBtn={eqBtn}
        ></CalcBtnComponent>
      </div>
    </div>
  );
};

export default CalculatorComponent;
