import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 30px 50px 30px;
  max-width: 600px;
`;

export const Title = styled.h1`
  padding: 50px 0;
  font-family: ${styleSet.font.B};
  text-align: center;
  font-size: ${styleSet.fontSize.s1};
  color: #5e5e5e;
`;

export const SubTitle = styled.label`
  font-size: ${styleSet.fontSize.s8};
  color: ${styleSet.colors.subcolor1};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 23px;

  position: relative;
  overflow: hidden;
`;

export const Svg = styled.svg`
  width: 18px;

  position: absolute;
  left: 22px;
  top: 23px;
  z-index: 1;
`;

export const LogInBtn = styled.button`
  width: 100%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.primary};
`;

export const SnsLoginWrapper = styled.div`
  margin: 10px 0;
  padding: 40px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const SignUpWrapper = styled.div`
  margin: 30px 0 0 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    &:hover {
      font-family: ${styleSet.font.B};
    }
  }
`;
export const WrapperInner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a img {
    width: 4rem;
  }
`;
