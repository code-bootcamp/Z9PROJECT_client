import { CloseCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export const Write = styled.div``;

export const User = styled.section`
  background: ${styleSet.colors.subcolor3};
  padding-left: 60px;
  img {
    width: 60px;
    height: 60px;
  }
  @media ${styleSet.breakePoints.mobile} {
    padding-left: 15px;
  }
`;

export const Div = styled.div`
  padding-inline: 20px;
  display: flex;
  padding-block: 20px;
  flex-direction: column;

  &:hover {
    background-color: ${styleSet.colors.subcolor3};
  }
`;

export const Check = styled.strong`
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.primary};
`;

export const UserInfo = styled.p`
  display: flex;
  font-size: ${styleSet.fontSize.s9};
  span {
    display: block;
    color: #aaa;
    font-family: ${styleSet.font.B};
    font-size: ${styleSet.fontSize.s9};
  }
`;

export const Textarea = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  overflow: hidden;
  height: 130px;
  clear: both;
  margin: 30px 0;
  button {
    float: right;
    background: ${styleSet.colors.black};
    color: ${styleSet.colors.white};
    padding: 5px 20px;
    border-radius: 15px;
    margin: 0 10px 0px 0;
  }
  textarea {
    resize: none;
    font-size: ${styleSet.fontSize.s9};
    padding: 15px;
    border: none;
    width: 100%;
    height: 80px;
    overflow: inherit;
    &:focus {
      outline: none;
    }
  }
`;

export const AnswerContents = styled.p`
  padding: 10px 0;

  span {
    width: 30px;
    height: 30px;
    background: ${styleSet.colors.point2};
    color: ${styleSet.colors.white};
    font-family: ${styleSet.font.B};
    padding: 5px 20px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Contents = styled.p`
  font-size: ${styleSet.fontSize.s8};
  border-bottom: 1px solid ${styleSet.colors.gray};
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 0;

  @media ${styleSet.breakePoints.mobile} {
    max-height: 300px;
    min-height: 50px;
    overflow: auto;
  }
`;

export const AnswerBox = styled.section``;

export const Answer = styled.p`
  color: ${styleSet.colors.darkgray};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: flex-end;
  button {
    font-family: ${styleSet.font.B};
    color: ${styleSet.colors.primary};
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.point1};
      font-family: ${styleSet.font.B};
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    padding: 0 0 10px 30px;
  }
`;

export const Modal = styled.section`
  max-width: 600px;
  height: 800px;
  background: ${styleSet.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${styleSet.colors.darkgray};
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  z-index: 11;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  &:last-of-type {
    border-top: 1px solid ${styleSet.colors.black};
    width: 100%;
    padding-top: 15px;
  }
`;

export const Textarea1 = styled.textarea`
  resize: none;
  padding: 15px;
  width: 100%;
  height: 55%;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 15%;
  font-size: ${styleSet.fontSize.s7};
  font-family: ${styleSet.font.B};
  border: 1px solid ${styleSet.colors.black};
  position: relative;
  color: ${styleSet.colors.black};
  overflow: hidden;
  background: ${styleSet.colors.white};
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.black};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }
`;

export const BgLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
export const Close = styled(CloseCircleOutlined)`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: ${styleSet.fontSize.s6};
  cursor: pointer;
  color: ${styleSet.colors.black};
`;

export const UserBox = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  height: 70%;
`;
export const Div3 = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    max-height: 100px
    max-width: 100px
  }
`;

export const Div2 = styled.div`
  width: 75%;
  height: 100%;

  p {
    &:nth-last-of-type(1) {
      text-align: right;
      padding: 10px 0;
    }
  }
`;

export const UserName = styled.div`
  word-break: keep-all;
  white-space: nowrap;
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s8};
`;
export const Question = styled.p`
  height: 180px;
  overflow: auto;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
  width: 370px;
`;
