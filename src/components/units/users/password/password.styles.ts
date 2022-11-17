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

export const Form = styled.form`
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const RowWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
  margin-top: 10px;

  &:nth-of-type(2) {
    border-top: none;
  }

  &.line {
    align-items: flex-start;
  }
`;

export const UpdateBtn = styled.button`
  width: 200px;
  margin: 20px auto;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  border: 2px solid ${styleSet.colors.primary};
  position: relative;
  color: ${styleSet.colors.primary};
  overflow: hidden;
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.primary};
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
