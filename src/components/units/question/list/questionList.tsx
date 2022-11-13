import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import QuestionModal from "../../../commons/modal/question";
import { closeState } from "../../../commons/store";
import AnswerList from "../../answer/list/answerList";
import {
  DELETE_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
} from "../question.queries";
import * as S from "../question.styles";

export default function QuestionList(P: any) {
  const { el, data } = P;
  const [updateQuestion] = useMutation(UPDATE_QUESTION);
  const [deleteQuestion] = useMutation(DELETE_QUESTION);
  const [question, setQuestion] = useState("");
  const [close, setClose] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

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
    await deleteQuestion({
      variables: { questionId: String(el.id) },
      refetchQueries: [
        {
          query: FETCH_QUESTIONS,
          variables: { questionId: String(el.id) },
        },
      ],
    });
  };

  const onClickAnswer = () => {
    setIsTrue((prev) => !prev);
  };
  return (
    <>
      <S.User>
        <div>
          <S.Div>
            <img src="/img_user.jpeg" alt="유저 이미지" />
            <S.Check>답변완료</S.Check>
            <S.Contents onClick={onClickAnswer}>{el.question}</S.Contents>
            <S.UserInfo>유저닉네임</S.UserInfo>
            <S.UserInfo>
              {el.createdAt
                ?.slice(0, 10)
                .replace("-", "년 ")
                .replace("-", "월 ")}
              일
            </S.UserInfo>
            <S.Answer>
              <p>답변</p>
              <p id={el.id} onClick={onClickEdit}>
                수정
              </p>
              <p onClick={onClickdelete}>삭제</p>
            </S.Answer>
          </S.Div>
          {isTrue && <AnswerList data={data} el={el} />}
          {close && (
            <QuestionModal
              onClickUpdate={onClickUpdate}
              el={el}
              setQuestion={setQuestion}
              question={question}
              setClose={setClose}
            />
          )}
        </div>
      </S.User>
    </>
  );
}
