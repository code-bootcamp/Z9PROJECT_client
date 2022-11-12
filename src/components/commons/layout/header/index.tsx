import { useState } from "react";
import * as S from "../layout.styles";
import { useRecoilState } from "recoil";
import { hamburgerState } from "../../store";
import { accessTokenState } from "../../../../commons/store";
import { PointFormatter } from "../../../../commons/utils";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { styleSet } from "../../../../commons/styles/styleSet";
import { FETCH_USER, LOGOUT } from "../layout.queries";

export default function HeaderPage() {
  const { onClickMoveToPage, onClickMobileToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [hamburger, setHamburger] = useRecoilState(hamburgerState);
  const [openPop, isOpenPop] = useState(false);
  const [logout] = useMutation(LOGOUT);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const router = useRouter();

  const onClickMenu = () => {
    setHamburger((prev) => !prev);
  };
  const onClickProfile = () => {
    isOpenPop((prev) => !prev);
  };

  const onClickMore = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: `${styleSet.colors.darkgray}`,
      cancelButtonColor: `${styleSet.colors.red}`,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        onClickLogout();
      }
    });
  };

  const onClickLogout = () => {
    logout();
    sessionStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Ul className="mobile">
            <li onClick={onClickMoveToPage("/")}>
              <S.Logo src="/icon_logo.png" alt="로고 아이콘" />
            </li>
            <li onClick={onClickMoveToPage("/product/register")}>상품 등록</li>
            <li onClick={onClickMoveToPage("/list/list")}>리스트</li>
            <li onClick={onClickMoveToPage("/list/customList")}>Who's Best</li>
          </S.Ul>
          <S.Ul>
            {!accessToken && (
              <li
                onClick={onClickMoveToPage("/users/login")}
                className="mobile"
              >
                로그인
              </li>
            )}
            {accessToken && (
              <li onClick={onClickProfile} className="mobile">
                <S.Span>
                  <strong>{fetchUser?.fetchUser.nickname}</strong> 님
                  환영합니다.
                </S.Span>
                <img src="/icon_user.svg" alt="로그인 유도 아이콘" />
                {openPop && (
                  <S.Ul2>
                    <S.LiPoint>
                      <span>내 포인트</span>
                      <span>
                        {PointFormatter(Number(fetchUser?.fetchUser.point))}
                        <strong> P</strong>
                      </span>
                    </S.LiPoint>
                    <li onClick={onClickMoveToPage("/users/mypage")}>
                      마이페이지
                    </li>
                    <li onClick={onClickMore}>로그아웃</li>
                  </S.Ul2>
                )}
              </li>
            )}
            <li onClick={onClickMoveToPage("/")} className="logo">
              <S.Logo src="/icon_logo.png" alt="로고 아이콘" />
            </li>
            <li className="logo" onClick={onClickMenu}>
              <S.P></S.P>
            </li>
          </S.Ul>
          {hamburger && (
            <S.Hamburger id="hamburger" hamburger={hamburger}>
              <ul>
                {!accessToken && (
                  <li onClick={onClickMobileToPage("/users/login")}>
                    <img src="/icon_user.svg" alt="로그인 유도 아이콘" />
                    &nbsp; 로그인
                  </li>
                )}
                {accessToken && (
                  <>
                    <S.Mobile>
                      <strong>{fetchUser?.fetchUser.nickname} </strong>님
                      환영합니다.
                    </S.Mobile>
                    <S.LiPointM>
                      <div>
                        <div>내 포인트</div>
                        <span>
                          {PointFormatter(Number(fetchUser?.fetchUser.point))}
                          <strong> P</strong>
                        </span>
                      </div>
                    </S.LiPointM>
                  </>
                )}
                <li onClick={onClickMobileToPage("/list/list")}>리스트</li>
                <li onClick={onClickMobileToPage("/list/customList")}>
                  Who's Best
                </li>
                {accessToken && <li>로그아웃</li>}
              </ul>
            </S.Hamburger>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
