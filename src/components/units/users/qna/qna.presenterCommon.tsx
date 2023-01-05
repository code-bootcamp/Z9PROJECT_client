import * as S from "./qna.styles";
import { IQnaPresenterCommonsProps } from "./qna.types";
import QuestionContainer from "../../question/list/questionList.container";

export default function QnaPresenterCommons(P: IQnaPresenterCommonsProps) {
  const { fetchMyQuestions } = P;

  return (
    <S.Container>
      <S.SubTitle>상품 Q&A</S.SubTitle>
      <S.H3>내가 남긴 질문을 한 번에 확인할 수 있습니다.</S.H3>
      <S.QuestionWrapper>
        {fetchMyQuestions?.fetchMyQuestions.length !== 0 ? (
          fetchMyQuestions?.fetchMyQuestions.map((el: any) => (
            <QuestionContainer key={el.id} el={el} />
          ))
        ) : (
          <S.EmptyText>남긴 상품 질문이 없습니다.</S.EmptyText>
        )}
      </S.QuestionWrapper>
    </S.Container>
  );
}
