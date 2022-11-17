import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import { styleSet } from "../../../../commons/styles/styleSet";
import BankCodeModal from "../../modal/bankCode";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  gap: 20px;
`;

const Input = styled.input`
  padding: ${(P: IInputProps) =>
    P.edit ? `20px 20px 20px 20px` : `20px 20px 20px 55px`};
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${styleSet.colors.gray};
  outline-color: ${styleSet.colors.primary};

  border-color: ${(P: IInputProps) =>
    P.error ? `${styleSet.colors.primary}` : `${styleSet.colors.gray}`};
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

type IInput03Props = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
  defaultValue?: string;
  setValue: UseFormSetValue<FieldValues>;
};

type IInputProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
};

export default function Input03(P: IInput03Props) {
  const { type, placeholder, register, error, edit, defaultValue, setValue } =
    P;
  const [bankCode, setBankCode] = useState<string | null>(null);

  useEffect(() => {
    setValue("bank", bankCode);
  }, [bankCode]);

  return (
    <Wrapper>
      <Input
        type={type}
        placeholder={placeholder}
        {...register}
        error={error}
        edit={edit}
        defaultValue={defaultValue}
      />
      <Error className="error" error={error}>
        {error}
      </Error>
      <BankCodeModal setBankCode={setBankCode} />
    </Wrapper>
  );
}
