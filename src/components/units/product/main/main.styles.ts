import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: 10px solid blue;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  & > div {
    scroll-snap-align: start;
    height: 100vh;
    position: relative;
  }

  @media ${styleSet.breakePoints.mobile} {
    height: 100%;
  }
`;

export const FullPage = styled.div``;

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 100%;
`;

export const ScrollPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
  }
`;
export const LeftSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 0 300px;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    align-items: flex-end;
  }
`;

export const RightSection = styled.div`
  width: 60%;
  height: 100%;

  @media ${styleSet.breakePoints.mobile} {
    width: 70%;
  }
`;
export const H1 = styled.h1`
  font-weight: 400;
  font-size: 45px;
  line-height: 1.2em;
  background: #fff;
  strong {
    color: ${styleSet.colors.point2};
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    word-break: keep-all;
    white-space: nowrap;
  }
`;

export const H3 = styled.h1`
  font-size: 120px;
  font-family: ${styleSet.font.EB};
  color: ${styleSet.colors.lightGray};
  position: absolute;
  top: 41%;
  left: 3%;
  opacity: 0.5;
`;

export const Span = styled.span`
  font-weight: 300;
  font-size: 18px;
  word-break: break-word;
  line-height: 1.2em;
  display: block;
  margin-top: 20px;
`;

export const Main = styled.main`
  background-color: #ff8f54;
  width: 100%;
  height: 60%;
  position: relative;

  @media ${styleSet.breakePoints.mobile} {
    height: 100%;
  }
`;

export const Img = styled.img`
  height: 700px;
  position: absolute;
  top: 10%;
  left: 12%;
  z-index: 2;

  @media ${styleSet.breakePoints.mobile} {
    height: 300px;
    top: 17%;
  }
`;

export const Linear = styled.img`
  position: absolute;
  bottom: 12%;
  left: -47%;
  z-index: -1;
  animation: rotation3 15s linear infinite;
  @keyframes rotation3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    left: 72%;
    bottom: 15%;
  }
`;

export const Ul = styled.ul`
  margin-top: 50px;
  li {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
`;

export const FlexWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 410px;
  background-color: ${styleSet.colors.primary};
  &:before {
    content: "";
    background: url("/img_wave.png");
    background-repeat: repeat-x;
    width: 100%;
    height: 410px;
    position: absolute;
    bottom: 390px;
    left: 0;
    display: flex;
    animation: bg-wave 5s linear infinite;
    transform: rotate(-180deg);
    @keyframes bg-wave {
      from {
        background-position-x: 0;
      }
      to {
        background-position-x: 275px;
      }
    }
  }
  @media ${styleSet.breakePoints.mobile} {
    height: 250px;
    &:before {
      height: 250px;
      bottom: 231px;
    }
  }
`;

export const Message1 = styled.img`
  position: absolute;
  top: 7%;
  left: 3%;

  @media ${styleSet.breakePoints.mobile} {
    top: -43%;
    width: 200px;
  }
`;
export const Message2 = styled.img`
  position: absolute;
  left: 30%;
  top: 17%;

  @media ${styleSet.breakePoints.mobile} {
    top: 10%;
    width: 200px;
    left: 55%;
  }
`;
export const Message3 = styled.img`
  position: absolute;
  top: 6%;
  left: 20%;

  @media ${styleSet.breakePoints.mobile} {
    top: -43%;
    height: 50px;
    left: 29%;
  }
`;

export const Message4 = styled.img`
  position: absolute;
  left: 47%;
  top: 15%;

  @media ${styleSet.breakePoints.mobile} {
    top: 10%;
    width: 50px;
    left: 80%;
  }
`;

export const Message5 = styled.img`
  position: absolute;
  right: 4%;
  top: 0%;
  height: 400px;

  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

// 상품박스
export const Product = styled.section`
  max-width: 1150px;
  max-height: 450px;
  background-color: #fff;
  position: absolute;
  bottom: 10%;
  border-radius: 40px;
  box-shadow: 0px 1px 10px 1px rgb(0 0 0 / 12%);
  left: 50%;
  transform: translateX(-50%);
  padding: 50px;
  display: flex;

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  &:after {
    content: "";
    display: block;
  }
  .swiperSlide {
    display: flex;
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 500px;
    min-height: 200px;
    padding: 20px;
    bottom: 38%;
    position: relative;
  }
`;

export const Right = styled(RightCircleFilled)`
  position: absolute;
  right: 15%;
  bottom: 28%;
  font-size: 50px;
  color: #fff;

  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;
export const Left = styled(LeftCircleFilled)`
  position: absolute;
  left: 15%;
  bottom: 28%;
  font-size: 50px;
  color: #fff;
  cursor: pointer;
  display: block;

  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

export const Sale = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: ${styleSet.colors.primary};
  border-radius: 0px 20px 0px 80px;
  color: ${styleSet.colors.white};
  display: flex;
  font-family: ${styleSet.font.B};
  align-items: center;
  justify-content: center;
  font-size: ${styleSet.fontSize.s4};

  @media ${styleSet.breakePoints.mobile} {
    width: 60px;
    height: 60px;
    font-size: ${styleSet.fontSize.s9};
  }
`;

export const ProductImg = styled.div`
  margin-right: 60px;
  img {
    max-width: 350px;
    max-height: 350px;
    overflow: hidden;
    border-radius: 10px;
  }

  @media ${styleSet.breakePoints.mobile} {
    margin-right: 20px;
    img {
      min-width: 100px;
      min-height: 100px;
      width: 100%;
    }
  }
`;

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  time {
    font-size: 55px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 350px;
      height: 25px;
      background: #e6f7ff;
      z-index: -1;
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    time {
      font-size: ${styleSet.fontSize.s5};
      &:after {
        width: 160px;
        bottom: 0;
      }
    }
  }
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: ${styleSet.font.B};
  margin-top: 50px;

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s7};
    margin-top: 10px;
  }
`;

export const ProductName = styled.p`
  font-size: 25px;
  font-family: ${styleSet.font.EB};
  padding: 15px 0 10px 0;

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s7};
  }
`;

export const PriceSale = styled.p`
  font-size: 20px;
  color: #777;
  text-decoration-line: line-through;
  margin: 10px 0 -5px 0;

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s9};
  }
`;

export const Price = styled.p`
  font-size: 27px;
  color: ${styleSet.colors.red};
  font-family: ${styleSet.font.EB};

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s7};
  }
`;

export const ScrollDown = styled.a`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

export const Scroll = styled.div`
  width: 2rem;
  height: 4rem;
  border: 2px solid #000;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .scroll-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #000;
    display: block;
    animation: cursor 1.15s linear infinite;
    @keyframes cursor {
      0% {
        opacity: 0;
        transform: translateY(-1rem);
      }
      100% {
        opacity: 1;
        transform: translateY(1rem);
      }
    }
  }
`;
export const ArrowDown = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid transparent;
  border-right-color: #000;
  border-bottom-color: #000;
  transform: rotate(45deg);
  margin-top: 0.3rem;
  animation: arrow 1.15s linear infinite;
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
`;
