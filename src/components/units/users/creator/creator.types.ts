import { ChangeEvent } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type ICreatorPresenterProps = {
  onClickSignUp: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  certifiFetchUrl: File | undefined;
  onChangeCertifiFile: (file: File) => void;
  onChageProfileFile: (url: string, file: File) => void;
  profilePreview: string;
  profileFetchUrl: File | undefined;
  onClickCertNumber: () => void;
  onClickCertConfirm: () => void;
  onClickNameConfirm: () => void;
  setValue: UseFormSetValue<FieldValues>;
  openTime: boolean;
  onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type IStlyesProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
