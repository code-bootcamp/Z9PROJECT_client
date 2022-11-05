import * as S from "./myPageLayout.styles";

export default function MyPageLayoutPresenter() {
  return (
    <S.PreContainer>
      <S.Title>마이페이지</S.Title>
      <S.BtnWrapper>
        <S.Btn>포인트</S.Btn>
        <S.Btn>찜 목록</S.Btn>
        <S.Btn>판매 내역</S.Btn>
        <S.Btn>구매 내역</S.Btn>
        <S.Btn>상품 Q&A</S.Btn>
        <S.Btn>회원정보 수정</S.Btn>
      </S.BtnWrapper>
    </S.PreContainer>
  );
}
