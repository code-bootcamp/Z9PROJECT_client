import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";
import { Select } from "antd";
import { keyframes } from "@emotion/react";

export const Container = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  width: 1400px;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const Title = styled.h1`
  font-family: ${styleSet.font.B};
`;

export const TypeWrapper = styled.div`
  width: 100%;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${styleSet.colors.lightGray};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  .ant-picker {
    padding: 0 15px 0 20px;
    height: 48px;
    border-radius: 10px;
    border: 1px solid ${styleSet.colors.darkgray};
    color: ${styleSet.colors.black};
  }
  .ant-picker-cell-inner {
    background: ${styleSet.colors.primary};
  }
`;

export const Item = styled.div`
  width: 100%;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  i {
    font-style: unset;
    padding-left: 10px;
  }
`;

export const SubTitle = styled.label`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: ${styleSet.fontSize.s9};
    font-family: ${styleSet.font.L};
    display: block;
  }
`;

export const SubSubTitle = styled.label`
  width: 120px;
  font-size: ${styleSet.fontSize.s9};
  font-family: ${styleSet.font.L};
  display: block;
`;

export const SubWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const SubmitBtn = styled.button`
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

export const CategoryWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const CategoryTitle = styled.label`
  width: 200px;
  font-size: ${styleSet.fontSize.s9};
  font-family: ${styleSet.font.L};
  display: block;
`;

export const CategorySelect = styled(Select)`
  width: 400px;
`;

export const OptionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const OptionPlusBtn = styled.button`
  width: 52px;
  height: 52px;
  font-size: ${styleSet.fontSize.s6};
  color: ${styleSet.colors.white};
  background: ${styleSet.colors.primary};
`;

export const OptionMinuBtn = styled.button`
  width: 52px;
  height: 52px;
  font-size: ${styleSet.fontSize.s6};
  color: ${styleSet.colors.white};
  background: ${styleSet.colors.subcolor1};
`;

export const CheckWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
`;

export const LabelWrapper = styled.label`
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

export const BottomText = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${styleSet.fontSize.s7};
  div {
    font-size: ${styleSet.fontSize.s9};
  }
`;
