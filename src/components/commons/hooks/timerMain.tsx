import { useEffect, useState } from "react";

export default function Timer(P: any) {
  const { el, status } = P;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const start = new Date(el?.validFrom.slice(0, 10)) as any;
  const today = new Date() as any;
  const end = new Date(el?.validUntil.slice(0, 10)) as any;
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

  return (
    <>
      {time > 0 ? (
        status === "ing" ? (
          <>
            {days}
            <span>일</span>
            {hours}
            <span>시</span>
            {minutes}
            <span>분</span>
            {seconds}
            <span>초</span>
          </>
        ) : (
          <>
            {days}
            <span>일</span>
            {hours}
            <span>시</span>
            {minutes}
            <span>분</span>
            {seconds}
            <span>초</span>
          </>
        )
      ) : (
        <h1>마감되었습니다</h1>
      )}
    </>
  );
}
