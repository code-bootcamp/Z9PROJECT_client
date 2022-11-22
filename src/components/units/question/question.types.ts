import { Dispatch, SetStateAction } from "react";

export type IQnaProps = {
  data?: any;
  el?: any;
  dom?: any;
  isAnswer?: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  setAnswerModal: Dispatch<SetStateAction<boolean>>;
  isTrue?: boolean;
  answerModal?: boolean;
};

export type IQuestionPresenterProps = {
  el: any;
  onClickAnswer: () => void;
  onClickAnswerModal: () => void;
  onClickEdit: () => void;
  onClickdelete: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  setQuestion: Dispatch<SetStateAction<string>>;
  question: string;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  setAnswerModal: Dispatch<SetStateAction<boolean>>;
  isTrue: boolean;
  answerModal: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  data: any;
  close: boolean;
  userData: any;
};
