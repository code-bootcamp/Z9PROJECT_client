import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";
import { Select } from "antd";

export const Container = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  width: 1400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const Title = styled.h1`
  padding-top: 20px;
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
  width: 100%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.primary};
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
