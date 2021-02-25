import React from "react";
import moment, { Moment } from "moment";

const ClockComponent = () => {

  let hourHandState = {
    transform: "rotate(0)",
  };
  let minuteHandState = {
    transform: "rotate(0)",
  };
  let secondHandState = {
    transform: "rotate(0)",
  };
  setInterval(() => {
    const now = moment();
    const hour: number = now.hours();
    const minute: number = now.minutes();
    const second: number = now.seconds();
    const millisecond: number = now.milliseconds();
    
    // 時針は1時間で360/12度、1分間で360/12/60度、1秒間で360/12/60/60度動く
    const deltaMinute = minute === 0 ? 0 : (minute * 360) / 12 / 60;
    hourHandState = {
      transform: `rotate(${hour * 30 + deltaMinute}deg)`,
    };

    // 分針は1時間で360度、1分間で360/60度、1秒間で360/60/60度動く
    const deltaSecond = second === 0 ? 0 : (second * 360) / 60 / 60;
    minuteHandState = { 
      transform: `rotate(${hour * 30 + deltaSecond}deg)`,
    };

    // 秒針は1分間で360度、1秒間で360/60度動く、1ミリ秒で360/60/1000度動く
    const deltaMillisecond = millisecond === 0 ? 0 : (millisecond * 360) / 60 / 1000;
    secondHandState = { 
      transform: `rotate(${hour * 30 + deltaMillisecond}deg)`,
    };

  }, 10);
  return (
    <div className="clock">
      <div className="hour" id="hour" style={hourHandState}></div>
      <div className="minute" id="minute" style={minuteHandState}></div>
      <div className="second" id="second" style={secondHandState}></div>
    </div>
  );
};

export default ClockComponent;
