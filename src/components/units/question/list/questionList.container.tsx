import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import { FETCH_LOGIN_USER_ANSWER } from "../../answer/answer.queries";
import {
  DELETE_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
} from "../question.queries";
import QuestionPresenter from "./questionList.presenter";

export default function QuestionContainer(P: any) {
  const { el } = P;
  const router = useRouter();
  const [updateQuestion] = useMutation(UPDATE_QUESTION);
  const [deleteQuestion] = useMutation(DELETE_QUESTION);
  const [question, setQuestion] = useState("");
  const [close, setClose] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [answerModal, setAnswerModal] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const { data } = useQuery(FETCH_LOGIN_USER_ANSWER, {
    fetchPolicy: "cache-first",
    variables: { questionId: String(el.id) },
  });

  const onClickEdit = () => {
    setClose((prev) => !prev);
  };

  const onClickUpdate = async () => {
    setClose(true);
    if (!question) {
      ErrorModal("내용이 수정되지 않았습니다.");
      return;
    }
    try {
      await updateQuestion({
        variables: {
          updateQuestionInput: { question },
          questionId: String(el.id),
        },
      });
      SuccessModal("질문이 수정되었습니다.");
      setClose((prev) => !prev);
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  const onClickdelete = async () => {
    try {
      await deleteQuestion({
        variables: { questionId: String(el.id) },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { productId: String(router.query.useditemId), page: 1 },
          },
        ],
      });
      SuccessModal("삭제가 완료되었습니다.");
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  const onClickAnswer = () => {
    setIsTrue((prev) => !prev);
  };

  const onClickAnswerModal = () => {
    setAnswerModal(true);
    setIsAnswer(false);
  };
  return (
    <>
      <QuestionPresenter
        el={el}
        onClickAnswer={onClickAnswer}
        onClickAnswerModal={onClickAnswerModal}
        onClickEdit={onClickEdit}
        onClickdelete={onClickdelete}
        onClickUpdate={onClickUpdate}
        setQuestion={setQuestion}
        question={question}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
        setAnswerModal={setAnswerModal}
        isTrue={isTrue}
        answerModal={answerModal}
        setClose={setClose}
        data={data}
        close={close}
      />
    </>
  );
}
