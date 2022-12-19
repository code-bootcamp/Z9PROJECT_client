import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { IStlyesProps } from "./creator.types";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 30px 50px 30px;
  width: 660px;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 50px 0 50px 0;
  font-family: ${styleSet.font.B};
  text-align: center;
  font-size: ${styleSet.fontSize.s1};
  color: #5e5e5e;

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s2};
  }
`;

export const SubTitle = styled.label`
  align-self: flex-start;
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s5};
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
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

export const SnsLabel = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 23px;

  position: relative;
`;

export const SnsLabelInner = styled.label`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Svg = styled.svg`
  width: 18px;

  position: absolute;
  left: 22px;
  top: 23px;
  z-index: 1;
`;

export const Btn1 = styled.button`
  width: 150px;
  height: 60px;
  color: white;
  background: ${styleSet.colors.subcolor2};
  border-radius: 10px;
`;

export const Btn2 = styled.button`
  width: 150px;
  height: 60px;
  color: white;
  background: ${styleSet.colors.subcolor1};
  border-radius: 10px;
`;

export const AddressWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 205px;
    height: 205px;

    background: url("/users/user/img_id.svg");
    border: 1px solid #cccccc;
    border-radius: 100px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 40px;
  width: 100%;
  border-radius: 10px;
  background: ${styleSet.colors.lightGray};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const UpoloadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Introduce = styled.textarea`
  padding: 20px;
  width: 100%;
  height: 150px;
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  resize: none;
  outline-color: ${styleSet.colors.primary};
`;

export const Concept = styled.input`
  padding: 20px;
  width: 100%;
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  resize: none;
  outline-color: ${styleSet.colors.primary};
`;

export const WrapperTermsOfUse = styled.div`
  padding: 30px;
  width: 100%;
  border: ${(P: IStlyesProps) =>
    P.error
      ? `1px solid ${styleSet.colors.red}`
      : `1px solid ${styleSet.colors.gray}`};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  position: relative;

  label {
    font-size: 1.2rem;
  }
`;

export const TermsOfUse = styled.div`
  width: 100%;
  height: 80px;

  overflow-y: scroll;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpBtn = styled.button`
  height: 3.5rem;
  padding: 0 5rem;
  border-radius: 0.375rem;
  background: ${styleSet.colors.primary};
  color: #ffffff;
  box-shadow: 0 0.4rem 0 0 ${styleSet.colors.subcolor2};
  letter-spacing: 3px;
  transition: all 0.3s;

  :active {
    transform: translateY(0.3rem);
    box-shadow: 0 0.2rem 0 0 ${styleSet.colors.subcolor2};
  }
`;

export const CancelBtn = styled.button`
  margin: 20px 0 0 0;
  width: 200px;
  height: 50px;
  color: darkgray;

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const SnsCheckWrapper = styled.div`
  margin: 0 10px;
  width: 100%;
  display: flex;
  gap: 2rem;

  background: ${(P: IStlyesProps) =>
    P.error ? `${styleSet.colors.subcolor1}` : `none`};
`;

export const LabelWrapper = styled.label`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RadioButton = styled.span`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.5);
`;

export const RadioButtonInner = styled.span`
  display: block;
  position: absolute;
  z-index: 2;
  height: 10px;
  width: 10px;
  top: 8px;
  left: 5px;
  border-radius: 50%;
  background: ${styleSet.colors.primary};
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transition: all 0.35s;
`;

export const RadioLabel = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.66);
`;

export const pulse = keyframes`
    0%{
        opacity:0;
        transform:scale(0.5);
    }
    50%{
        opacity:0.25;
    }
    100%{
        opacity:0;
        transform:scale(1.75);
    }
`;

export const RadioPulse = styled.span`
  position: absolute;
  display: none;
  top: -14px;
  left: -18px;
  z-index: 0;
  opacity: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${styleSet.colors.primary};
  animation: ${pulse} 0.4s linear;
`;

export const RadioInput = styled.input`
  position: absolute;
  display: none;

  :checked ~ .radio-button-inner {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  :checked ~ .radio-button {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  :checked ~ .radio-pulse {
    display: block;
  }
  :checked ~ .radio-button {
    border-color: ${styleSet.colors.primary};
  }
  :checked ~ .radio-label {
    color: rgba(0, 0, 0, 0.96);
  }
`;

export const TermsCheckWrapper = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  span {
    font-size: ${styleSet.fontSize.s8};
  }
`;

export const InvisibleCheckbox = styled.input`
  display: none;

  :checked ~ .checkbox {
    margin: 0 5px 0 10px;
    transform: rotate(45deg) translateX(-20%) translateY(-20%);
    width: 10px;
    border-color: ${styleSet.colors.primary};
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;

export const Checkbox = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.175);
  transition: all 0.35s;
`;

export const CountWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
