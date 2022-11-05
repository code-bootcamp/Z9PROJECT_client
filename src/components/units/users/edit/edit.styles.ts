import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  padding: 50px 0;
  width: 100%;
`;

export const SubTitle = styled.h2`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
`;

export const Form = styled.form`
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const UpoloadWrapper = styled.div`
  padding-left: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 40px;
`;

export const ProfileWrapper = styled.div`
  img {
    width: 205px;
    height: 205px;

    background: url("/users/user/img_id.svg");
    border: 1px solid #cccccc;
    border-radius: 100px;
  }
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowTitle = styled.span`
  min-width: 200px;
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
`;

export const AddressWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Introduce = styled.textarea`
  padding: 20px;
  width: 100%;
  height: 150px;
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  resize: none;
  outline-color: ${styleSet.colors.primary};
`;

export const ZipcodeBtn = styled.button`
  width: 150px;
  height: 60px;
  color: white;
  background: ${styleSet.colors.subcolor2};
  border-radius: 10px;
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

export const SnsCheckWrapper = styled.div`
  margin: 0 10px;
  width: 100%;
  display: flex;
  gap: 2rem;
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

export const LogInBtn = styled.button`
  width: 100%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.primary};
`;

export const BackWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 20px;
`;
