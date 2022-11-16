import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../edit/edit.queries";
import QnaItemList from "./qna.itemList";
import * as S from "./qna.styles";

export default function QnaContainer() {
  const { data: fetchUser } = useQuery(FETCH_USER);

  return (
    <S.Container>
      <S.SubTitle>상품 Q&A</S.SubTitle>
      {fetchUser?.fetchUser.userType === "CREATOR" ? (
        <span>크리에이터용 상품Q&A 페이지</span>
      ) : null}
      <S.Comment>
        <S.Wrapper>
          <S.H4>QnA</S.H4>
          <S.Title>
            <li>프로필</li>
            <li>답변여부</li>
            <li>내용</li>
            <li className="writer">작성자</li>
            <li className="createdAt">등록일자</li>
            <li></li>
          </S.Title>
          {fetchUser?.fetchUser.userType === "CREATOR" ? (
            <S.Box>{/* <QnaItemList /> */}</S.Box>
          ) : (
            <S.Box>{/* <QnaItemList /> */}</S.Box>
          )}
        </S.Wrapper>
      </S.Comment>
    </S.Container>
  );
}
