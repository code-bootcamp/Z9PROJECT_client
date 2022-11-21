import { useEffect } from "react";

export default function HeadLoad(P: any) {
  const { children } = P;

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css";
    link.crossOrigin = "true";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = [];
    script[0] = document.createElement("script");
    script[0].src = "https://code.jquery.com/jquery-1.12.4.min.js";
    script[0].type = "text/javascript";
    script[1] = document.createElement("script");
    script[1].src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script[1].type = "text/javascript";
    script.map((el) => document.head.appendChild(el));

    const title = document.createElement("title");
    title.innerText = "크리에이터의 공동구매, Z9";
    document.head.appendChild(title);

    const favicon = document.createElement("link");
    favicon.href = "/favicon.ico";
    favicon.rel = "favicon";
    document.head.appendChild(favicon);

    const description = document.createElement("meta");
    description.content = "크리에이터의 공동구매, Z9";
    description.name = "description";
    document.head.appendChild(description);
  }, []);
  return <>{children}</>;
}