import { useState } from "react";
import { Pagination } from "antd";
import * as S from "./qna.styles";
import { useQuery } from "@apollo/client";
import { IQuestionListProps } from "./qna.types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils";
import { FETCH_COUNT_OF_QUESTIONS, FETCH_QUESTIONS } from "./qna.queries";
import QuestionContainer from "../../question/list/questionList.container";

export default function QuestionList(P: IQuestionListProps) {
  const { item } = P;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: fetchQuestions } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(item.id), page: currentPage },
  });
  const { data: questionsCount } = useQuery(FETCH_COUNT_OF_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(item.id) },
  });

  const onClickProduct = () => {
    setIsOpen((open) => !open);
  };
  const onClickPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

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
          <Pagination
            size="small"
            defaultCurrent={1}
            defaultPageSize={5}
            current={currentPage}
            onChange={onClickPage}
            showSizeChanger={false}
            total={questionsCount?.fetchCountOfQuestions}
          />
        </S.QuestionLi>
      )}
    </>
  );
}
