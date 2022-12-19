import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type IUserPresenterProps = {
  onClickSignUp: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeProfileFile: (url: string, file: File) => void;
  profilePreview: string;
  onClickCertNumber: () => void;
  onClickCertConfirm: () => void;
  onClickNameConfirm: () => void;
  setValue: UseFormSetValue<FieldValues>;
  openTime: boolean;
  onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void;
};
