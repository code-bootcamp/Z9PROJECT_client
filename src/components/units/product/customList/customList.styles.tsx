import { YoutubeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 100px 0 0 0;
`;

export const ImgWrapper = styled.section`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
`;

export const Top = styled.section`
  width: 100%;
  background-color: cornsilk;
  height: 1500px;
  position: relative;
  overflow: hidden;
  > img {
    position: absolute;
    right: 17%;
    top: 1%;
  }
`;

// 메인배너
export const H2 = styled.h2`
  color: ${styleSet.colors.darkgray};
  font-family: ${styleSet.font.EB};
  font-size: ${styleSet.fontSize.s1};
  word-break: keep-all;
  strong {
    color: ${styleSet.colors.primary};
  }
`;
export const Square = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  &:hover span {
    border: none;
    background: rgba(9, 109, 217, 0.8);
  }
`;
export const Animantion = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${styleSet.colors.primary};
  transition: 0.5s;
  border-radius: 38% 62% 63% 37% /41% 44% 56% 59%;
  &:nth-child(1) {
    animation: rotation1 6s linear infinite;
    @keyframes rotation1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  &:nth-child(2) {
    animation: rotation2 10s linear infinite;
    @keyframes rotation2 {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes rotation3 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  &:nth-child(3) {
    animation: rotation3 8s linear infinite;
  }
`;
export const Contents = styled.p`
  padding: 40px 0;
  font-size: ${styleSet.fontSize.s5};
  word-break: keep-all;
`;

export const Link = styled.a`
  padding: 40px 0;
  font-size: ${styleSet.fontSize.s5};
  word-break: keep-all;
  display: inline-block;
  padding: 10px 22px;
  border: 2px solid ${styleSet.colors.primary};
  color: ${styleSet.colors.primary};
  border-radius: 73% 27% 44% 56% / 49% 44% 56% 51%;
  transition: 0.5s;
  font-size: ${styleSet.fontSize.s3};
`;

export const ContentRanding = styled.div`
  color: ${styleSet.colors.primary};
  position: absolute;
  width: 100%;
  padding: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: 0.5s;
  &:hover a {
    background: #fff;
    color: ${styleSet.colors.primary};
    border: 1px solid ${styleSet.colors.white};
  }
  &:hover p {
    color: ${styleSet.colors.white};
  }
  &:hover h2 {
    color: ${styleSet.colors.white};
  }
`;

export const Text = styled.div`
  position: absolute;
  right: 25%;
  bottom: 15%;
  z-index: 99;
`;
export const Search = styled.span`
  background: ${styleSet.colors.darkgray};
  border-radius: 50%;
  font-size: ${styleSet.fontSize.s7};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: ${styleSet.colors.darkgray};
  color: ${styleSet.colors.white};
  outline: none;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  height: 40px;
  border: none;
  font-size: ${styleSet.fontSize.s7};
`;

export const H1 = styled.div`
  color: #096dd9;
  font-size: 5rem;
  font-family: ${styleSet.font.EB};
  display: flex;
  align-items: center;
  gap: 50px;
  span {
    display: block;
    background: #096dd9;
    height: 10px;
    width: 500px;
  }
`;

export const Ul = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  li {
    color: ${styleSet.colors.white};
    font-family: ${styleSet.font.B};
    font-size: ${styleSet.fontSize.s6};
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
`;

export const Bottom = styled.section`
  background-color: ${styleSet.colors.black};
  padding: 30px 0;
`;

export const ImgBox = styled.div`
  width: 300px;
  height: 100%;
  background: ${styleSet.colors.black};
  text-align: center;
  cursor: pointer;
  &:hover .bg_layer {
    opacity: 1;
  }
`;

export const BgLayer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s6};
  opacity: 0;
  transition: 0.4s;
`;

export const Name = styled.p`
  color: ${styleSet.colors.white};
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s6};
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-family: ${styleSet.font.EB};
    font-size: ${styleSet.fontSize.s5};
    color: ${styleSet.colors.darkgray};
  }
`;

export const Octagon = styled.div`
  background: url("/reoj.jpeg") no-repeat;
  background-position: 50% 50%;
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px 0;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

export const SkewBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -87%;
  z-index: 99;
  left: 0;
  background: ${styleSet.colors.black};
  transform-origin: top center;
  pointer-events: none;
  box-sizing: content-box;
  transform: skewY(-30deg);
  margin-top: -90px;
  padding-bottom: 500px;
`;
