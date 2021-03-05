import React from "react";
import moment, { Moment } from "moment";
import logo from "../logo.svg";
import "./ClockComponent.css";

const ClockComponent = () => {
    const now = moment();
    const hour: number = now.hours();
    const minute: number = now.minutes();
    const second: number = now.seconds();
    const millisecond: number = now.milliseconds();

    // 時針は1時間で360/12度、1分間で360/12/60度、1秒間で360/12/60/60度動く
    const deltaMinute = minute === 0 ? 0 : (minute * 360) / 12 / 60;
    const HourHandState = {
      transform: `rotate(${hour * 30 + deltaMinute}deg)`,
    };
    // 分針は1時間で360度、1分間で360/60度、1秒間で360/60/60度動く
    const deltaSecond = second === 0 ? 0 : (second * 360) / 60 / 60;
    const MinuteHandState = { 
      transform: `rotate(${minute * 6 + deltaSecond}deg)`,
    };
    // 秒針は1分間で360度、1秒間で360/60度動く、1ミリ秒で360/60/1000度動く
    const deltaMillisecond = millisecond === 0 ? 0 : (millisecond * 360) / 60 / 1000;
    const SecondHandState = { 
      transform: `rotate(${second * 6 + deltaMillisecond}deg)`,
    };

  return (
    <div className="App flex justify-center items-center">
      <img src={logo} className="App-logo z-10" alt="logo" />
      <div className="absolute">
        <div className="clock rounded-full w-clock h-clock bg-cover flex justify-center items-center bg-clock">
          <div className="hour animate-spin-hour absolute flex justify-center items-center z-10">
            <div className="hourSub flex justify-center h-hour" style={HourHandState}></div>
          </div>
          <div className="minute animate-spin-minute absolute flex justify-center items-center z-10">
            <div className="minuteSub flex justify-center h-minute" style={MinuteHandState}></div>
          </div>
          <div className="second animate-spin-second absolute flex justify-center items-center z-10">
            <div className="secondSub flex justify-center h-second" style={SecondHandState}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockComponent;