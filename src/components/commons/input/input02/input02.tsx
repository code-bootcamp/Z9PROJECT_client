import styled from "@emotion/styled";
import { MutableRefObject } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { styleSet } from "../../../../commons/styles/styleSet";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Input = styled.input`
  padding: 15px 20px;
  width: 100%;
  border: 1px solid ${styleSet.colors.gray};
  outline-color: ${styleSet.colors.primary};
  border-radius: 10px;
  border-color: ${(P: IInputProps) =>
    P.error ? `${styleSet.colors.primary}` : `${styleSet.colors.darkgray}`};
`;

const Error = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  color: ${styleSet.colors.primary};
  transition: all 0.35s;

  transform: ${(P: IInputProps) =>
    P.error ? `translate(0, -50%)` : `translate(5rem, -50%)`};
  opacity: ${(P: IInputProps) => (P.error ? `1` : `0`)};
`;

type IInput02Props = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
  ref?: MutableRefObject<any>;
  disabled?: boolean;
};

type IInputProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
};

export default function Input02(P: IInput02Props) {
  const { type, placeholder, register, error, edit, disabled } = P;

  return (
    <Wrapper>
      <Input
        type={type}
        placeholder={placeholder}
        {...register}
        error={error}
        edit={edit}
        disabled={disabled}
      />
      <Error className="error" error={error}>
        {error}
      </Error>
    </Wrapper>
  );
}
