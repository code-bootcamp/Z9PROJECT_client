import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  CREATE_ANSWER,
  FETCH_LOGIN_USER_ANSWER,
  UPDATE_ANSWER,
} from "../answer.queries";
import * as S from "../answer.styles";
import { EditOutlined, MessageOutlined } from "@ant-design/icons";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";

export default function AnswerWriter(P: any) {
  const { setAnswerModal, questionEl, dom, isAnswer, setIsAnswer } = P;
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [updateAnswer] = useMutation(UPDATE_ANSWER);
  const [answer, setAnswer] = useState("");

  const onClickClose = () => {
    setAnswerModal(false);
  };
  const onChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const onClickAnswer = async () => {
    if (answer === "") return;

    try {
      await createAnswer({
        variables: {
          createAnswerInput: { answer },
          questionId: String(questionEl.id),
        },
        refetchQueries: [
          {
            query: FETCH_LOGIN_USER_ANSWER,
            variables: { questionId: String(questionEl.id) },
          },
        ],
      });
      SuccessModal("답변이 등록되었습니다.");
      setAnswerModal(false);
    } catch (error) {
      ErrorModal(error as string);
    }
    setAnswer("");
  };

  const onClickUpdateAnswer = async () => {
    if (answer === "") {
      ErrorModal("내용이 수정되지 않았습니다.");
      return;
    }
    try {
      await updateAnswer({
        variables: {
          updateAnswerInput: { answer },
          answerId: String(dom.id),
        },
      });
      SuccessModal("답변이 수정되었습니다.");
      setAnswerModal(false);
      setIsAnswer((prev: any) => !prev);
    } catch (error) {
      ErrorModal(error as string);
    }
  };
  return (
    <>
      <S.BgLayer></S.BgLayer>
      <S.Modal>
        <S.Close onClick={onClickClose} />
        <S.H1>
          <EditOutlined /> 질문
        </S.H1>
        <S.UserBox>
          <S.Div3>
            <img src="/img_user.jpeg" alt="유저이미지" />
            <S.UserName>{questionEl?.user.nickname}</S.UserName>
          </S.Div3>
          <S.Div2>
            <S.Question>{questionEl?.question}</S.Question>
            <p>
              <strong>질문 등록일</strong> :
              {questionEl?.createdAt
                ?.slice(0, 10)
                .replace("-", "년 ")
                .replace("-", "월 ")}
              일
            </p>
          </S.Div2>
        </S.UserBox>
        <S.H1>
          <MessageOutlined /> 답변
        </S.H1>
        <S.Textarea1
          placeholder="답변을 입력해주세요."
          onChange={onChangeAnswer}
          value={(answer || dom?.answer) ?? ""}
        ></S.Textarea1>
        <S.SubmitBtn onClick={isAnswer ? onClickUpdateAnswer : onClickAnswer}>
          <span>{isAnswer ? "수정" : "등록"}</span>
        </S.SubmitBtn>
      </S.Modal>
    </>
  );
}
