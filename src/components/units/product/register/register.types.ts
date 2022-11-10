import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import { LegacyRef, MutableRefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
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
  nameRef: MutableRefObject<any>;
  onChangeContents: () => void;
  option: number;
  optionEntity: (operation: string) => any;
  selectDate: (_: any, dateString: string[]) => void;
  onClickCreate: (data: any) => void;
  onDropImg: (inputFiles: File[]) => void;
  watch: UseFormWatch<FieldValues>;
};

export type IEditorPageProps = {
  contentsRef: LegacyRef<Editor> | undefined;
  onChangeContents: (text: any) => void;
  initialValue?: string | undefined;
};
