import { Dispatch, SetStateAction } from "react";

export type IAnswerProps = {
  setAnswerModal: Dispatch<SetStateAction<boolean>>;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  questionEl: any;
  dom?: any;
  isAnswer: boolean;
};
