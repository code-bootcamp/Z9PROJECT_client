import { GiftOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import * as S from "../layout.styles";

export default function HeaderPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Ul>
            <li onClick={onClickMoveToPage("/main")}>
              <S.Logo src="/icon_logo.png" alt="로고 아이콘" />
            </li>
            <li>상품 등록</li>
            <li onClick={onClickMoveToPage("/lists/list")}>리스트</li>
            <li onClick={onClickMoveToPage("/lists/customList")}>Who's Best</li>
          </S.Ul>

          <S.Ul>
            <li onClick={onClickMoveToPage("/users/signupintro")}>
              <img src="/icon_user.svg" alt="로그인 유도 아이콘" />
            </li>
          </S.Ul>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
