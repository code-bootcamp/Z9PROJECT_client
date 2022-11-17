import { useQuery } from "@apollo/client";
import { Pagination } from "antd";
import { useState } from "react";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils";
import QuestionContainer from "../../question/list/questionList.container";
import { FETCH_COUNT_OF_QUESTIONS, FETCH_QUESTIONS } from "./qna.queries";
import * as S from "./qna.styles";
import { IQuestionListProps } from "./qna.types";

export default function QuestionList(P: IQuestionListProps) {
  const { item } = P;
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickProduct = () => {
    setIsOpen((open) => !open);
  };
  const { data: fetchQuestions } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(item.id), page: currentPage },
  });
  const { data: questionsCount } = useQuery(FETCH_COUNT_OF_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(item.id) },
  });

  const onClickPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  console.log(item.id.slice(-4), questionsCount?.fetchCountOfQuestions);

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
            total={questionsCount?.fetchCountOfQuestions}
            onChange={onClickPage}
            current={currentPage}
            defaultCurrent={1}
            showSizeChanger={false}
            defaultPageSize={5}
          />
        </S.QuestionLi>
      )}
    </>
  );
}
