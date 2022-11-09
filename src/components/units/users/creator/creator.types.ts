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
};

export type IstlyesProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
