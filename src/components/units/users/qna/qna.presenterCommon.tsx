import QuestionContainer from "../../question/list/questionList.container";
import * as S from "./qna.styles";
import { IQnaPresenterCommonsProps } from "./qna.types";

export default function QnaPresenterCommons(P: IQnaPresenterCommonsProps) {
  const { fetchMyQuestions } = P;
  return (
    <S.Container>
      <S.SubTitle>상품 Q&A</S.SubTitle>
      <span>내가 남긴 질문을 한 번에 확인할 수 있습니다.</span>
      <S.QuestionWrapper>
        {fetchMyQuestions?.fetchMyQuestions ? (
          fetchMyQuestions?.fetchMyQuestions.map((el: any) => (
            <QuestionContainer key={el.id} el={el} />
          ))
        ) : (
          <span>남긴 상품 질문이 없습니다.</span>
        )}
      </S.QuestionWrapper>
    </S.Container>
  );
}
