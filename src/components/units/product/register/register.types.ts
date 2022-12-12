import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

// container

export type IRegisterContainerProps = {
  isEdit?: boolean;
  fetchProduct?: any;
};

export type IInputProduct = {
  name?: String;
  originPrice?: number;
  originalQuantity?: number;
  discountPrice?: number;
  delivery?: String;
  option1?: String;
  option2?: String;
  option3?: String;
  option4?: String;
  option5?: String;
  endType?: String;
  youtubeLink?: String;
  validFrom?: Date;
  validUntil?: Date;
  images?: String[];
  content?: String;
  shopName?: String;
  ceo?: String;
  brn?: String;
  mobn?: String;
  skin?: number;
  color?: String;
  userId?: String;
};

export type IInputDetail = {
  type?: String;
  option1?: String;
  option2?: String;
  option3?: String;
  option4?: String;
  option5?: String;
  option6?: String;
  option7?: String;
  option8?: String;
  option9?: String;
  option10?: String;
  option11?: String;
  option12?: String;
  option13?: String;
  option14?: String;
};

// presenter

export type IRegisterPresenterProps = {
  isEdit?: boolean;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  onChangeCategory: (
    value: unknown,
    option:
      | BaseOptionType
      | DefaultOptionType
      | Array<BaseOptionType | DefaultOptionType>
  ) => void;
  category: string[];
  contentsRef: MutableRefObject<any>;
  nameRef: MutableRefObject<any>;
  onChangeContents: () => void;
  option: number;
  optionEntity: (operation: string) => any;
  selectDate: (_: any, dateString: string[]) => void;
  onClickCreate: (data: any) => void;
  onClickUpdate: (data: any) => void;
  onDropImg: (inputFiles: File[]) => void;
  watch: UseFormWatch<FieldValues>;
  fetchProduct: any;
  textColor: string;
  bgColor: string;
  onChangebgColor: (color: string) => void;
  onChangeTextColor: (color: string) => void;
};

export type IEditorPageProps = {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  initialValue?: string | undefined;
};

export type IExportUseEffectProps = {
  fetchProduct: any;
  optionLength: string[];
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  onChangeCategory: (value: unknown) => void;
  setOption: Dispatch<SetStateAction<number>>;
};
