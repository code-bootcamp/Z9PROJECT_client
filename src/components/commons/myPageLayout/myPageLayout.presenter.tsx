import { useMoveToPage } from "../hooks/useMoveToPage";
import * as S from "./myPageLayout.styles";
import { IMyPageLayoutPresenterProps } from "./myPageLayout.types";

export default function MyPageLayoutPresenter(P: IMyPageLayoutPresenterProps) {
  const { nowUrl, onClickLogout } = P;
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.PreContainer>
      <S.Title>마이페이지</S.Title>
      <S.BtnWrapper nowUrl={nowUrl}>
        <S.Btn className="point" onClick={onClickMoveToPage("/users/mypage")}>
          포인트
        </S.Btn>
        <S.Btn
          className="wish"
          onClick={onClickMoveToPage("/users/mypage/wish")}
        >
          찜 목록
        </S.Btn>
        <S.Btn
          className="sales"
          onClick={onClickMoveToPage("/users/mypage/sales")}
        >
          판매 내역
        </S.Btn>
        <S.Btn
          className="purchase"
          onClick={onClickMoveToPage("/users/mypage/purchase")}
        >
          구매 내역
        </S.Btn>
        <S.Btn className="qna" onClick={onClickMoveToPage("/users/mypage/qna")}>
          상품 Q&A
        </S.Btn>
        <S.Btn
          className="edit"
          onClick={onClickMoveToPage("/users/mypage/edit")}
        >
          회원정보 수정
        </S.Btn>
        <S.Btn className="edit" onClick={onClickLogout}>
          로그아웃
        </S.Btn>
      </S.BtnWrapper>
    </S.PreContainer>
  );
}
