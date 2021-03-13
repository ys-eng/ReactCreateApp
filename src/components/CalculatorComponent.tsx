import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalcBtnComponent from "./CalcBtnComponent";
import CalcOperatorBtnComponent from "./CalcOperatorBtnComponent";

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
    PlusMinus="+/-",
    Clear="C",
    Eq="=",
    Zero="0",
    One="1",
    Two="2",
    Three="3",
    Four="4",
    Five="5",
    Six="6",
    Seven="7",
    Eight="8",
    Nine="9",
    Dot="."
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
    setDisplay(Operator.Zero);
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
        <CalcOperatorBtnComponent
          title={Operator.Clear}
          className={whiteColor}
          onClickCalcBtn={clearBtn}
        ></CalcOperatorBtnComponent>
        <CalcOperatorBtnComponent
          title={Operator.PlusMinus}
          className={whiteColor}
          onClickCalcBtn={plusMinusBtn}
        ></CalcOperatorBtnComponent>
        <CalcOperatorBtnComponent
          title={Operator.Percent}
          className={whiteColor}
          onClickCalcBtn={percentBtn}
        ></CalcOperatorBtnComponent>
        <CalcOperatorBtnComponent
          title="÷"
          className={orangeColor}
          onClickCalcBtn={divideBtn}
        ></CalcOperatorBtnComponent>
        <CalcBtnComponent
          title={Operator.Seven}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Eight}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Nine}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcOperatorBtnComponent
          title="×"
          className={orangeColor}
          onClickCalcBtn={multiplyBtn}
        ></CalcOperatorBtnComponent>
        <CalcBtnComponent
          title={Operator.Four}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Five}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Six}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcOperatorBtnComponent
          title="−"
          className={orangeColor}
          onClickCalcBtn={minusBtn}
        ></CalcOperatorBtnComponent>
        <CalcBtnComponent
          title={Operator.One}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Two}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Three}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcOperatorBtnComponent
          title="＋"
          className={orangeColor}
          onClickCalcBtn={plusBtn}
        ></CalcOperatorBtnComponent>
        <CalcBtnComponent
          title={Operator.Zero}
          className={`col-span-2 ${grayColor}`}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcBtnComponent
          title={Operator.Dot}
          className={grayColor}
          onClickCalcBtn={numberBtn}
        ></CalcBtnComponent>
        <CalcOperatorBtnComponent
          title="＝"
          className={orangeColor}
          onClickCalcBtn={eqBtn}
        ></CalcOperatorBtnComponent>
      </div>
    </div>
  );
};

export default CalculatorComponent;
