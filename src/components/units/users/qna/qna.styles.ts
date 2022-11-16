import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  padding: 50px 0;
  width: 100%;

  @media ${styleSet.breakePoints.mobile} {
    padding: 0;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};

  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

export const Comment = styled.section`
  border-radius: 15px;
`;

export const Count = styled.ul`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid ${styleSet.colors.black};
  padding-bottom: 20px;
  li {
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.darkgray};
  }
`;

export const Wrapper = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  background: ${styleSet.colors.white};

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const H4 = styled.h4`
  font-size: ${styleSet.fontSize.s6};
  padding-top: 40px;
  font-family: ${styleSet.font.B};
  display: none;

  @media ${styleSet.breakePoints.mobile} {
    display: block;
  }
`;

export const Title = styled.ul`
  font-size: ${styleSet.fontSize.s9};
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.darkgray};
  padding: 40px 20px 10px 20px;
  border-bottom: 1px solid ${styleSet.colors.gray};
  display: flex;
  justify-content: space-between;
  text-align: center;
  &.writer {
    max-width: 110px;
    min-width: 50px;
  }
  &.createdAt {
  }
  li {
    &:nth-last-of-type(1) {
      max-width: 100px;
      width: 100%;
    }
    &:nth-last-of-type(4) {
      max-width: 165px;
      width: 100%;
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    padding-top: 0;
    li {
      display: none;
    }
  }
`;

export const Box = styled.section``;
