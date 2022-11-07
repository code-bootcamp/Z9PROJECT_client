import styled from "@emotion/styled";
import { styleSet } from "../../../../../commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 100px 0;
`;

export const Reset = styled.img`
  cursor: pointer;
  position: fixed;
  right: 10%;
  bottom: 5%;
`;

export const Wrapper = styled.div`
  width: 1100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailWrapper = styled.div`
  width: 1400px;
  margin: 50px auto;
  position: relative;
`;

export const H1 = styled.h1`
  color: ${styleSet.colors.white};
  font-size: ${styleSet.fontSize.s2};
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
  position: relative;
  li {
    &.title:after {
      content: "";
      width: 22px;
      height: 3px;
      background: ${styleSet.colors.white};
      position: absolute;
      top: -10px;
      left: 0;
    }
    &:first-child {
      font-family: ${styleSet.font.L};
      font-size: ${styleSet.fontSize.s9};
    }
    color: ${styleSet.colors.white};
    font-size: ${styleSet.fontSize.s7};
  }
`;

export const Info = styled.section`
  width: 100%;
  height: 100vh;
  background: ${styleSet.colors.primary};
  align-items: center;
  display: flex;
`;

export const InfoImg = styled.div`
  background: url("/leoj.png") no-repeat;
  width: 500px;
  height: 500px;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
  margin-right: 20%;
`;

export const InfoWrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const RightDiv = styled.div`
  width: 1460px;
  height: 100%;
  background: #f4f5f9;
  display: flex;
  align-items: center;
`;
export const LeftDiv = styled.div`
  width: 1460px;
  height: 100%;
  background: #f7efea;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Right = styled.section`
  width: 100%;
  height: 360px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

export const Left = styled.section`
  width: 100%;
  height: 360px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const ImgBox = styled.div`
  width: 300px;
  height: 100%;
  background: ${styleSet.colors.white};
  text-align: center;
`;
export const ImgBox2 = styled.div`
  width: 300px;
  height: 100%;
  background: ${styleSet.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
`;

export const Text = styled.p`
  margin-right: 1%;
  strong {
  }
  color: ${styleSet.colors.darkgray};
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
`;
export const Text2 = styled.p`
  margin-left: 5%;

  color: ${styleSet.colors.gray};
  font-size: 8rem;
  font-family: ${styleSet.font.EB};
`;

export const Like = styled.img`
  position: absolute;
  top: 15%;
  left: 45%;
`;

export const Emoticon = styled.img`
  position: absolute;
  bottom: 10%;
  right: 0;
`;

export const Iframe = styled.iframe`
  margin-top: -17%;
`;

export const Octagon = styled.div`
  background: url("/test1.jpeg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  width: 400px;
  height: 400px;
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

export const Octagon2 = styled.div`
  background: url("/test2.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  width: 400px;
  height: 400px;
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

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 30px;
  border-top: 1px solid ${styleSet.colors.gray};
  margin-top: 50px;
  button {
    color: ${styleSet.colors.point1};
    background: ${styleSet.colors.white};
    border: 1px solid ${styleSet.colors.point1};
    font-family: ${styleSet.font.B};
    width: 100px;
    height: 40px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
    z-index: 9;
    &:hover {
      color: ${styleSet.colors.white};
    }
    &:hover:before {
      width: 120%;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: -5%;
      left: -10%;
      width: 0;
      height: 120%;
      background: ${styleSet.colors.point1};
      transition: all 0.3s ease;
      transform: skewX(15deg);
      z-index: -1;
    }
  }
`;

// 댓글
export const Comment = styled.section`
  border-radius: 15px;
  padding-block: 30px;
  margin-top: 30px;
`;

export const Wrapper3 = styled.div`
  width: 1400px;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
  background: ${styleSet.colors.white};
  border-radius: 20px;
  padding: 30px;
`;

export const Count = styled.ul`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #000;
  padding-block: 20px;
  li {
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.darkgray};
  }
`;

export const Box = styled.section`
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const H4 = styled.h4`
  font-size: ${styleSet.fontSize.s7};
  font-family: ${styleSet.font.B};
  padding: 40px 0 10px 0;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;
