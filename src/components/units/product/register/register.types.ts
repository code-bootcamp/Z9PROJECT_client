import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import { ChangeEvent, LegacyRef, MutableRefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Editor } from "@toast-ui/react-editor";

export type IRegisterPresenterProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  onChangeCategory: (
    value: unknown,
    option:
      | BaseOptionType
      | DefaultOptionType
      | (BaseOptionType | DefaultOptionType)[]
  ) => void;
  category: string[];
  contentsRef: MutableRefObject<any>;
  onChangeContents: () => void;
  option: number;
  OptionPlus: () => void;
  OptionMinus: () => void;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  isDragActive: boolean;
};

export type IEditorPageProps = {
  contentsRef: LegacyRef<Editor> | undefined;
  onChangeContents: (text: any) => void;
  initialValue: string | undefined;
};
