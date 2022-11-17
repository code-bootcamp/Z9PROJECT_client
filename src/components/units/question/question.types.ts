import { Dispatch, SetStateAction } from "react";

export type IQnaProps = {
  data?: any;
  el?: any;
  dom?: any;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  setAnswerModal: Dispatch<SetStateAction<boolean>>;
  isTrue: boolean;
  answerModal: boolean;
};
