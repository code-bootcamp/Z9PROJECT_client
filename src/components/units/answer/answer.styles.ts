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
    min-width: 500px;
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
  font-family: Pretendard, "Malgun Gothic";
  font-size: ${styleSet.fontSize.s8};
  border-bottom: 1px solid ${styleSet.colors.gray};
  display: block;
  width: 100%;
  padding: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
