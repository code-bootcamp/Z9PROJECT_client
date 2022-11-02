import styled from "@emotion/styled";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

const Input = styled.input`
  padding: 12px 12px 12px 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
`;

type IInput01Props = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
};

export default function Input01(P: IInput01Props) {
  const { type, placeholder, register } = P;

  return <Input type={type} placeholder={placeholder} {...register} />;
}
