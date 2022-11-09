import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type ICreatorPresenterProps = {
  onClickSignUp: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChageProfileFile: (url: string, file: File) => void;
  profilePreview: string;
  profileFetchUrl: File | undefined;
  onClickCertNumber: () => void;
  onClickCertConfirm: () => void;
  onClickNameConfirm: () => void;
  setValue: UseFormSetValue<FieldValues>;
  openTime: boolean;
};
