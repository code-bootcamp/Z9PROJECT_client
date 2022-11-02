import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Container = styled.section`
  margin: 0 auto;
  padding: 30px;
  width: 660px;
`;

export const Title = styled.h1`
  font-family: "Bodoni Moda";
  text-align: center;
  font-size: 5rem;
  color: #5e5e5e;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 23px;

  position: relative;
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
  left: 10px;
  top: 14px;
`;

export const CertificationBtn = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  background: #2b2d42;
  border-radius: 10px;
`;

export const ConfirmBtn = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  background: #c7002e;
  border-radius: 10px;
`;

export const ZipcodeBtn = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  background: #2b2d42;
  border-radius: 10px;
`;

export const ProfileWrapper = styled.div`
  margin: 50px 0 0 0;
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

export const WrapperTermsOfUse = styled.div`
  padding: 30px;
  width: 100%;

  border: 1px solid lightgray;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

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
  padding: 10px 40px;
  border: none;
  border-bottom: 5px solid black;
  border-radius: 0;

  font-size: 1.5rem;
  cursor: pointer;
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
  background: #8f44fd;
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
  background-color: #8f44fd;
  animation: ${pulse} 0.5s linear;
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
    border-color: #8f44fd;
  }
  :checked ~ .radio-label {
    color: rgba(0, 0, 0, 0.96);
  }
`;

export const TermsCheckWrapper = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
`;

export const InvisibleCheckbox = styled.input`
  display: none;

  :checked ~ .checkbox {
    margin: 0 5px 0 10px;
    transform: rotate(45deg);
    width: 15px;
    border-color: #1ac0a2;
    border-top-color: transparent;
    border-left-color: transparent;

    position: relative;
    top: -4px;
  }
`;

export const Checkbox = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(0, 0, 0, 0.175);
  transition: all 0.35s;
`;
