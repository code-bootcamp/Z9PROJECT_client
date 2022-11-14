import { IQnaProps } from "../../question/question.types";
import * as S from "../answer.styles";
import AnswerWriter from "../write/answerWriter";

export default function AnswerList(P: any) {
  const { el, dom, isAnswer, setIsAnswer, setAnswerModal, isTrue } = P;

  const onClickEditAnswer = () => {
    setIsAnswer(true);
  };

  return (
    <>
      <S.User>
        {isTrue && (
          <S.AnswerBox>
            <S.Div>
              <S.Contents>{el.question}</S.Contents>
              <S.Text>
                <S.AnswerContents>
                  <span>답변</span>
                  {dom.answer}
                </S.AnswerContents>
              </S.Text>
              <S.Answer>
                <S.UserInfo>{el.nickname}</S.UserInfo>
                <S.UserInfo>
                  {dom?.createdAt
                    ?.slice(0, 10)
                    .replace("-", "년")
                    .replace("-", "월")}
                  일
                </S.UserInfo>
                <button onClick={onClickEditAnswer}>수정</button>
              </S.Answer>
            </S.Div>
          </S.AnswerBox>
        )}
        {isAnswer && (
          <AnswerWriter
            setAnswerModal={setAnswerModal}
            questionEl={el}
            isAnswer={true}
            dom={dom}
          />
        )}
      </S.User>
    </>
  );
}
