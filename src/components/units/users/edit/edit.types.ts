import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type IEditPresenterProps = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  openTime: boolean;
  fetchUser: any;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickUpdate: (data: any) => void;
  profilePreview: string;
  onClickMore: () => void;
  onClickCertNumber: () => Promise<void>;
  onClickCertConfirm: () => Promise<void>;
  onClickNameConfirm: () => Promise<void>;
  onChangeProfileFile: (url: string, file: File) => void;
  onChangeCertifiFile: (file: File) => void;
};

export type IChangeInput = {
  nickname?: string;
  phoneNumber?: string;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  introduce?: string;
  mainContents?: string;
  snsChannel?: string;
  snsId?: string;
  account?: string;
  accountName?: string;
  bank?: string;
};
