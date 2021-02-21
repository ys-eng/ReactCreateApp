import React from "react";
import moment, { Moment } from "moment";

const ClockComponent = () => {
  // const hourHand: HTMLElement = document.getElementById("hour");
  // const minuteHand: HTMLElement = document.getElementById("minute");
  // const secondeHand: HTMLElement = document.getElementById("second");

  let hourHandState = {
    transform: "rotate(0)",
  };

  const intervalId = setInterval(() => {
    const now = moment();
    const hour: number = now.hours();
    const minute: number = now.minutes();
    const second: number = now.seconds();
    const millisecond: number = now.milliseconds();

    const deltaMinultes2 = minute === 0 ? 0 : (minute * 360) / 12 / 60;
    hourHandState = {
      transform: `rotate(${hour * 30 + deltaMinultes2}deg)`,
    };

    // 時針は1時間で360/12度、1分間で360/12/60度、1秒間で360/12/60/60度動く
    const deltaMinultes = minute === 0 ? 0 : (minute * 360) / 12 / 60;
    // hourHand.style.transform = `rotate(${hour * 30 + deltaMinultes}deg)`;

    // 分針は1時間で360度、1分間で360/60度、1秒間で360/60/60度動く
    const deltaSeconds = second === 0 ? 0 : (second * 360) / 60 / 60;
    // minuteHand.style.transform = `rotate(${minute * 6 + deltaSeconds}deg)`;

    // 秒針は1分間で360度、1秒間で360/60度動く、1ミリ秒で360/60/1000度動く
    const deltaMillisecond =
      millisecond === 0 ? 0 : (millisecond * 360) / 60 / 1000;
    // secondeHand.style.transform = `rotate(${second * 6 + deltaMillisecond}deg)`;
  }, 10);
  return (
    <div className="clock">
      <div className="hour" id="hour" style={hourHandState}></div>
      <div className="minute" id="minute"></div>
      <div className="second" id="second"></div>
    </div>
  );
};

export default ClockComponent;
