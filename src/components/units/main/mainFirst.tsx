import { useInView } from "react-intersection-observer";
import HeaderPage from "../../commons/layout/header";
import * as S from "./main.styles";

export default function MainFirst() {
  const [ref] = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref}>
        <HeaderPage />
        <S.ScrollPage>
          <S.LeftSection>
            <div>
              <S.H1 className="animate__animated animate__backInLeft">
                크리에이터들을 위한
                <br />
                <strong>ZERO NINE</strong>
                <br />
                <S.Span>
                  내가 좋아하는 크리에이터가 진행하는 공동구매
                  <br />
                  지금 바로 시작하세요!
                </S.Span>
              </S.H1>
            </div>
          </S.LeftSection>
          <S.RightSection>
            <S.Main>
              <S.Img
                src="/img_main1.png"
                alt="메인이미지1"
                className="animate__animated animate__backInRight"
              />
              <S.Linear src="/icon_linear.png" alt="Z9PICK EVERYONEBUYINCIT" />
            </S.Main>
          </S.RightSection>
          <S.ScrollDown>
            <p>Scroll Down</p>
            <S.Scroll>
              <span className="scroll-dot"></span>
            </S.Scroll>
            <S.ArrowDown></S.ArrowDown>
          </S.ScrollDown>
        </S.ScrollPage>
      </div>
    </>
  );
}
