import { useQuery } from "@apollo/client";
import { useState } from "react";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils";
import QuestionContainer from "../../question/list/questionList.container";
import { FETCH_QUESTIONS } from "./qna.queries";
import * as S from "./qna.styles";
import { IQuestionListProps } from "./qna.types";

export default function QuestionList(P: IQuestionListProps) {
  const { item } = P;
  const [isOpen, setIsOpen] = useState(false);

  const onClickProduct = () => {
    setIsOpen((open) => !open);
  };
  const { data: fetchQuestions } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(item.id) },
  });

  return (
    <>
      <S.BoardLi onClick={onClickProduct}>
        <S.BDate>{dateFormatter(item.createdAt)}</S.BDate>
        <S.BContents>{item.name}</S.BContents>
        <S.BPrice>{PriceFormatter(item.discountPrice)}</S.BPrice>
      </S.BoardLi>
      {isOpen && (
        <S.QuestionLi>
          {fetchQuestions?.fetchQuestions.length !== 0 ? (
            fetchQuestions?.fetchQuestions.map((el: any) => (
              <QuestionContainer key={el.id} el={el} />
            ))
          ) : (
            <span>질문이 없습니다.</span>
          )}
        </S.QuestionLi>
      )}
    </>
  );
}
