import * as S from "./myPageLayout.styles";
import { useMoveToPage } from "../hooks/useMoveToPage";
import { IMyPageLayoutPresenterProps } from "./myPageLayout.types";

export default function MyPageLayoutPresenter(P: IMyPageLayoutPresenterProps) {
  const { nowUrl, onClickMore, fetchUser } = P;
  const { onClickMoveToPage } = useMoveToPage();

  const btnArray = [
    { name: "구매 목록", class: "purchase" },
    { name: "관심 상품", class: "wish" },
    {
      name:
        fetchUser?.fetchUser.userType === "CREATOR" ? "상품 목록" : "상품 Q&A",
      class: "qna",
    },
    { name: "회원정보 수정", class: "edit" },
    { name: "비밀번호 변경", class: "password" },
  ];

  return (
    <S.PreContainer>
      <S.Title>마이페이지</S.Title>
      <S.BtnWrapper nowUrl={nowUrl}>
        <S.Btn className="point" onClick={onClickMoveToPage("/users/mypage")}>
          포인트
        </S.Btn>
        {fetchUser?.fetchUser.userType === "CREATOR" && (
          <S.Btn
            className="sales"
            onClick={onClickMoveToPage("/users/mypage/sales")}
          >
            판매 목록
          </S.Btn>
        )}
        {btnArray.map((el, i) => (
          <S.Btn
            key={i}
            className={el.class}
            onClick={onClickMoveToPage(`/users/mypage/${el.class}`)}
          >
            {el.name}
          </S.Btn>
        ))}
        <S.Btn onClick={onClickMore}>로그아웃</S.Btn>
      </S.BtnWrapper>
    </S.PreContainer>
  );
}
