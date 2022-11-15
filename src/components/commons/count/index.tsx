import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { styleSet } from "../../../commons/styles/styleSet";

export const Time = styled.div`
  position: absolute;
  top: 28%;
  right: 32%;
  color: ${styleSet.colors.red};
  font-size: ${styleSet.fontSize.s7};
`;

type CountDownIProps = {
  min: number;
  sec: number;
};

export default function CountDown(P: CountDownIProps) {
  const { min, sec } = P;
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <Time>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Time>
  );
}
