import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export const Write = styled.div``;

export const User = styled.section`
  padding-block: 20px;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin-right: 15px;
    overflow: hidden;
  }
`;

export const UserInfo = styled.p`
  display: flex;
  flex-direction: column;
  font-family: ${styleSet.font.B};
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
  background: ${styleSet.colors.white};
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
    font-family: Pretendard, "Malgun Gothic";
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

export const Contents = styled.p`
  padding: 0 75px;
  font-family: Pretendard, "Malgun Gothic";
  white-space: pre-wrap;
  font-size: ${styleSet.fontSize.s8};
`;

export const AnswerBox = styled.section`
  padding: 20px 20px 20px 75px;
  background: #f4f5f9;
`;

export const Answer = styled.p`
  padding: 0 0 10px 75px;
  margin-top: 30px;
  color: ${styleSet.colors.darkgray};
  display: flex;
  gap: 10px;
  p {
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.black};
    }
  }
`;
