import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../src/commons/styles/styleSet";

export const Container = styled.div`
  .Navigation-Anchor {
    background-color: ${styleSet.colors.point2} !important;
  }
  padding-top: 70px;
`;
export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 100%;
`;

export const ScrollPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const LeftSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 0 300px;
`;

export const RightSection = styled.div`
  width: 60%;
  height: 100%;
`;
export const H1 = styled.h1`
  font-weight: 400;
  font-size: 45px;
  line-height: 1.2em;
  background: #fff;
`;
export const H3 = styled.h1`
  font-size: 120px;
  font-family: ${styleSet.font.EB};
  color: ${styleSet.colors.lightGray};
  /* -webkit-text-stroke: 1px #faad14; */
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
  height: 65%;
  position: relative;
`;

export const Img = styled.img`
  height: 700px;
  position: absolute;
  top: 10%;
  left: 12%;
  z-index: 2;
`;

export const Linear = styled.img`
  position: absolute;
  bottom: 20%;
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
}
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 410px;
  background-color: ${styleSet.colors.primary};
  bottom: 0;
  &:before {
    content: "";
    background: url("/img_wave.png");
    background-repeat: repeat-x;
    width: 100%;
    height: 410px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    animation: bg-wave 5s linear infinite;
    @keyframes bg-wave {
      from {
        background-position-x: 0;
      }
      to {
        background-position-x: 485px;
      }
    }
  }
`;
export const Message1 = styled.img`
  position: absolute;
  top: 55%;
  left: 3%;
`;
export const Message2 = styled.img`
  position: absolute;
  left: 30%;
  top: 60%;
`;
export const Message3 = styled.img`
  position: absolute;
  top: 55%;
  left: 20%;
`;
export const Message4 = styled.img`
  position: absolute;
  left: 47%;
  top: 60%;
`;
export const Message5 = styled.img`
  position: absolute;
  right: 4%;
  top: 52%;
  height: 400px;
`;

// 상품박스
export const Product = styled.section`
  width: 1150px;
  height: 450px;
  background-color: #fff;
  position: absolute;
  bottom: 5%;
  border-radius: 40px;
  box-shadow: 0px 1px 10px 1px rgb(0 0 0 / 12%);
  left: 50%;
  transform: translateX(-50%);
  padding: 50px 50px;
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
`;

export const Right = styled(RightCircleFilled)`
  position: absolute;
  right: 15%;
  bottom: 12%;
  font-size: 50px;
  color: #fff;
`;
export const Left = styled(LeftCircleFilled)`
  position: absolute;
  left: 15%;
  bottom: 12%;
  font-size: 50px;
  color: #fff;
  cursor: pointer;
  display: block;
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
`;

export const ProductImg = styled.div`
  margin-right: 60px;
  img {
    width: 350px;
    height: 350px;
    overflow: hidden;
    border-radius: 10px;
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
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: ${styleSet.font.B};
  margin-top: 50px;
`;

export const ProductName = styled.p`
  font-size: 25px;
  font-family: ${styleSet.font.EB};
  padding: 15px 0 10px 0;
`;

export const PriceSale = styled.p`
  font-size: 20px;
  color: #777;
  text-decoration-line: line-through;
  margin: 10px 0 -5px 0;
`;

export const Price = styled.p`
  font-size: 27px;
  color: ${styleSet.colors.red};
  font-family: ${styleSet.font.EB};
`;

// 스크롤 유도 이모션
export const ScrollDown = styled.a`
  position: absolute;
  top: 50rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
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
