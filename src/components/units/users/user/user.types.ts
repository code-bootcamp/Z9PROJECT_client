import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type ICreatorPresenterProps = {
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChageProfileFile: (url: string, file: File) => void;
  profilePreview: string;
  profileFetchUrl: File | undefined;
};
