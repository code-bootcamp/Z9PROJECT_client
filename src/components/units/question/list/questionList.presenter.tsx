import QuestionModal from "../../../commons/modal/question";
import AnswerList from "../../answer/list/answerList";
import AnswerWriter from "../../answer/write/answerWriter";

import * as S from "../question.styles";

export default function QuestionPresenter(P: any) {
  const {
    el,
    onClickAnswer,
    onClickAnswerModal,
    onClickEdit,
    onClickdelete,
    onClickUpdate,
    setQuestion,
    question,
    setClose,
    isAnswer,
    setIsAnswer,
    setAnswerModal,
    isTrue,
    answerModal,
    data,
    close,
  } = P;

  return (
    <>
      <S.User>
        <div>
          <S.Div>
            <img src="/img_user.jpeg" alt="유저 이미지" />
            <S.Check>답변대기</S.Check>
            <S.Contents onClick={onClickAnswer}>{el.question}</S.Contents>
            <S.UserInfo className="writer">
              {el.user.nickname.slice(0, 8)}
            </S.UserInfo>
            <S.UserInfo>
              {el.createdAt
                ?.slice(0, 10)
                .replace("-", "년 ")
                .replace("-", "월 ")}
              일
            </S.UserInfo>
            <S.Answer>
              <p onClick={onClickAnswerModal}>답변</p>
              <p id={el.id} onClick={onClickEdit}>
                수정
              </p>
              <p onClick={onClickdelete}>삭제</p>
            </S.Answer>
          </S.Div>
          {close && (
            <QuestionModal
              onClickUpdate={onClickUpdate}
              el={el}
              setQuestion={setQuestion}
              question={question}
              setClose={setClose}
            />
          )}
          {data?.fetchLoginUserAnswer.map((dom: any) => (
            <AnswerList
              el={el}
              key={dom.id}
              dom={dom}
              isAnswer={isAnswer}
              setIsAnswer={setIsAnswer}
              setAnswerModal={setAnswerModal}
              isTrue={isTrue}
              answerModal={answerModal}
            />
          ))}
          {answerModal && (
            <AnswerWriter
              setAnswerModal={setAnswerModal}
              questionEl={el}
              isAnswer={false}
            />
          )}
        </div>
      </S.User>
    </>
  );
}
