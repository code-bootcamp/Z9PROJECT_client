import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  margin: 0 auto;
  padding: 100px 30px;
  width: 660px;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    min-width: 500px;
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

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
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

export const UploadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
    align-items: center;
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
