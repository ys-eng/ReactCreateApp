import React, { useState } from "react";
import moment, { Moment } from "moment";
import "./ClockComponent.css";

interface DegreeStyle {
  transform: string;
}

const ClockComponent = () => {
  const [hourHandState, setHourHandState] = useState<DegreeStyle>({
    transform: "rotate(0deg)",
  });

  const [minuteHandState, setMinuteHandState] = useState<DegreeStyle>({
    transform: "rotate(0deg)",
  });

  const [secondHandState, setSecondHandState] = useState<DegreeStyle>({
    transform: "rotate(0deg)",
  });

  setInterval(() => {
    const now = moment();
    const hour: number = now.hours();
    const minute: number = now.minutes();
    const second: number = now.seconds();
    const millisecond: number = now.milliseconds();

    // 時針は1時間で360/12度、1分間で360/12/60度、1秒間で360/12/60/60度動く
    const deltaMinute = minute === 0 ? 0 : (minute * 360) / 12 / 60;
    setHourHandState ({
      transform: `rotate(${hour * 30 + deltaMinute}deg)`,
    });

    // 分針は1時間で360度、1分間で360/60度、1秒間で360/60/60度動く
    const deltaSecond = second === 0 ? 0 : (second * 360) / 60 / 60;
    setMinuteHandState ({ 
      transform: `rotate(${minute * 6 + deltaSecond}deg)`,
    });

    // 秒針は1分間で360度、1秒間で360/60度動く、1ミリ秒で360/60/1000度動く
    const deltaMillisecond = millisecond === 0 ? 0 : (millisecond * 360) / 60 / 1000;
    setSecondHandState ({ 
      transform: `rotate(${second * 6 + deltaMillisecond}deg)`,
    });

  }, 1000);
  return (
    <div className="clock">
      <div className="hour" style={hourHandState}></div>
      <div className="minute" style={minuteHandState}></div>
      <div className="second" style={secondHandState}></div>
    </div>
  );
};

export default ClockComponent;
