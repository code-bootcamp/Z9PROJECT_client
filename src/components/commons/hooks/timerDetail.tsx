import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export default function TimerDetail(P: any) {
  const { data, status } = P;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const start = new Date(data?.fetchProduct.validFrom.slice(0, 10)) as any;
  const today = new Date() as any;
  const end = new Date(data?.fetchProduct.validUntil.slice(0, 10)) as any;

  const time =
    status === "end" ? 0 : status === "start" ? start - today : end - today;

  const getTime = () => {
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [today]);

  const H1 = styled.h1`
    display: flex;
    align-items: center;
    span {
      font-size: ${styleSet.fontSize.s6};
      color: ${styleSet.colors.red};
    }
  `;
  const Span = styled.span`
    font-size: ${styleSet.fontSize.s6};
    font-family: ${styleSet.font.B};
  `;
  return (
    <>
      {time > 0 ? (
        status === "ing" ? (
          <>
            <H1>
              <span>남은시간</span> &nbsp;
            </H1>
            {days}
            <Span>일</Span>
            {hours}
            <Span>시</Span>
            {minutes}
            <Span>분</Span>
            {seconds}
            <Span>초</Span>
          </>
        ) : (
          <>
            <H1>
              <span>시작까지</span> &nbsp;{" "}
            </H1>
            {days}
            <Span>일</Span>
            {hours}
            <Span>시</Span>
            {minutes}
            <Span>분</Span>
            {seconds}
            <Span>초</Span>
          </>
        )
      ) : (
        <h1>마감되었습니다</h1>
      )}
    </>
  );
}
