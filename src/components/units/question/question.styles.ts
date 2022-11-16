import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export const Write = styled.div``;

export const Div = styled.div`
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${styleSet.colors.gray};
  padding-block: 20px;

  &:hover {
    background-color: ${styleSet.colors.subcolor3};
  }

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Check = styled.strong`
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.primary};

  @media ${styleSet.breakePoints.mobile} {
    padding: 15px 0;
  }
`;

export const User = styled.section`
  position: relative;
  img {
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    border: 1px solid ${styleSet.colors.gray};
    overflow: hidden;
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    img {
      min-width: 30px;
      min-height: 30px;
    }
  }
`;

export const UserInfo = styled.p`
  display: flex;
  font-size: ${styleSet.fontSize.s9};
  &.created {
    min-width: 90px;
  }
  &.writer {
    max-width: 110px;
    min-width: 70px;
  }
  span {
    display: block;
    color: #aaa;
    font-family: ${styleSet.font.B};
    font-size: ${styleSet.fontSize.s9};
  }

  @media ${styleSet.breakePoints.mobile} {
    margin: 10px 0;
  }
`;

export const Textarea = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  overflow: hidden;
  height: 130px;
  clear: both;
  margin-top: 50px;
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
  font-family: Pretendard, "Malgun Gothic";
  font-size: ${styleSet.fontSize.s9};
  flex-direction: column;
  cursor: pointer;
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    min-height: 50px;
    overflow: auto;
    white-space: normal;
    min-height: 50px;
    overflow: auto;
    margin: 15px 0;
  }
`;

export const Answer = styled.p`
  color: ${styleSet.colors.black};
  font-family: ${styleSet.font.B};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  p {
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.point1};
      font-family: ${styleSet.font.B};
    }
  }
`;
