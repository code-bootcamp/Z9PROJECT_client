import { Pagination } from "antd";
import * as S from "./qna.styles";
import QuestionList from "./qna.questionList";
import { IQnaPresenterCreatorProps } from "./qna.types";

export default function QnaPresenterCreator(P: IQnaPresenterCreatorProps) {
  const { fetchProductsByCreator, onClickPage, currentPage } = P;

  return (
    <S.Container>
      <S.SubTitle>상품 목록</S.SubTitle>
      <span>상품을 클릭하면 질문 목록이 펼쳐집니다.</span>
      <S.BoardBody>
        <S.BoardTh>
          <S.BDate>등록 날짜</S.BDate>
          <S.BContents>상품명</S.BContents>
          <S.BPrice>판매 금액</S.BPrice>
        </S.BoardTh>
        <ul>
          {fetchProductsByCreator?.fetchProductsByCreator.length !== 0 ? (
            fetchProductsByCreator?.fetchProductsByCreator.map(
              (el: any, i: number) => <QuestionList item={el} key={i} />
            )
          ) : (
            <S.BoardLiEmpty>
              <span>판매 중인 상품이 없습니다.</span>
            </S.BoardLiEmpty>
          )}
        </ul>
        <Pagination
          size="small"
          total={50}
          onChange={onClickPage}
          current={currentPage}
        />
      </S.BoardBody>
    </S.Container>
  );
}
