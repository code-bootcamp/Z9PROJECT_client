import { HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./list.styles";

export default function ProductListPresenter(P: any) {
  const { el } = P;
  const { onClickMoveToPage } = useMoveToPage();

  console.log(el, "Dqwd");
  return (
    <>
      <S.Section onClick={onClickMoveToPage(`/product/${el.id}`)}>
        <S.New src="/icon_new.png" alt="NEW 아이콘" />
        <S.User>
          <img
            src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
            alt="크리에이터 이미지"
          />
          <S.UserName>{el.user?.snsName}</S.UserName>
        </S.User>

        <S.ProdImg>
          <S.BgLayer className="bg_layer">
            <S.H2>진행예정</S.H2>
          </S.BgLayer>
          <img
            className="prodImg"
            src={el.images ? el.images[0] : "/icon_logo.png"}
            alt="상품 이미지"
          />
          <S.PriceSale>{el.discountRate}%</S.PriceSale>
        </S.ProdImg>

        <S.Bottom>
          <S.Ul>
            <li>
              <S.View />
              <span>100</span>
              <HeartOutlined />
              <span>100</span>
            </li>
            <S.Time>3일 00:43:44</S.Time>
          </S.Ul>
          <S.ProdName>
            [{el.quantity}개 한정] {el.name}
          </S.ProdName>
          <S.Price>
            <span>{el.originPrice.toLocaleString()}원</span>
            {el.discountPrice.toLocaleString()}원
          </S.Price>
        </S.Bottom>
      </S.Section>
    </>
  );
}
