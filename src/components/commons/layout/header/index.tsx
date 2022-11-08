import { useState } from "react";
import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { hamburgerState } from "../../store";
import * as S from "../layout.styles";

export default function HeaderPage() {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickMobileToPage } = useMoveToPage();
  const [hamburger, setHamburger] = useRecoilState(hamburgerState);

  const onClickMenu = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Ul className="mobile">
            <li onClick={onClickMoveToPage("/main")}>
              <S.Logo src="/icon_logo.png" alt="로고 아이콘" />
            </li>
            <li onClick={onClickMoveToPage("/product/register")}>상품 등록</li>
            <li onClick={onClickMoveToPage("/lists/list")}>리스트</li>
            <li onClick={onClickMoveToPage("/lists/customList")}>Who's Best</li>
          </S.Ul>

          <S.Ul>
            <li
              onClick={onClickMoveToPage("/users/signupintro")}
              className="mobile"
            >
              <img src="/icon_user.svg" alt="로그인 유도 아이콘" />
            </li>
            <li onClick={onClickMoveToPage("/main")} className="logo">
              <S.Logo src="/icon_logo.png" alt="로고 아이콘" />
            </li>
            <li className="logo" onClick={onClickMenu}>
              <S.P></S.P>
            </li>
          </S.Ul>
        </S.Wrapper>

        {hamburger && (
          <S.Hamburger id="hamburger" hamburger={hamburger}>
            <ul>
              <li onClick={onClickMobileToPage("/users/signupintro")}>
                <img src="/icon_user.svg" alt="로그인 유도 아이콘" />
                &nbsp; 로그인
              </li>
              <li onClick={onClickMobileToPage("/lists/list")}>리스트</li>
              <li onClick={onClickMobileToPage("/lists/customList")}>
                Who's Best
              </li>
            </ul>
          </S.Hamburger>
        )}
      </S.Container>
    </>
  );
}
