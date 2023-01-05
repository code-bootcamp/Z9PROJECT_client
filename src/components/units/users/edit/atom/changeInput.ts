import { IChangeInput } from "../edit.types";
import { FieldValues, UseFormGetValues, UseFormWatch } from "react-hook-form";

type IChangeInputProps = {
  watch: UseFormWatch<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
};
const changeName: string[] = [
  "nickname",
  "phoneNumber",
  "zipcode",
  "address",
  "addressDetail",
  "introduce",
  "mainContents",
  "snsChannel",
  "snsId",
  "bank",
  "account",
  "accountName",
];

const ChangeInput = ({ watch, getValues }: IChangeInputProps) => {
  const changeInput: IChangeInput = {};
  changeName.forEach((el: string) => {
    if (watch(el)) {
      changeInput[`${el}` as keyof IChangeInput] = getValues(el);
    }
  });

  return { changeInput };
};

export default ChangeInput;
