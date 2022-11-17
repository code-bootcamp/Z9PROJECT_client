import { HeartOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./list.styles";

export default function ProductListPresenter(P: any) {
  const { el } = P;
  const { onClickMoveToPage } = useMoveToPage();

  const start = new Date(el?.validFrom.slice(0, 10));
  const today = new Date();
  const end = new Date(el?.validUntil.slice(0, 10));

  return (
    <>
      <S.Section onClick={onClickMoveToPage(`/product/${el.id}`)}>
        <S.User>
          <img
            src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
            alt="크리에이터 이미지"
          />
          <S.UserName>{el.user?.snsName}</S.UserName>
        </S.User>

        <S.ProdImg>
          <S.BgLayer className="bg_layer">
            <S.H2>
              <p>
                {/* {el?.validFrom.slice(0, 10).replace("-", ".").replace("-", ".")}{" "}
                ~{" "}
                {el?.validUntil
                  .slice(0, 10)
                  .replace("-", ".")
                  .replace("-", ".")} */}

                {today - start < 0
                  ? "시작 예정"
                  : end - today > 0
                  ? "진행중입니다."
                  : "마감입니다."}
              </p>
            </S.H2>
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
            <S.Time></S.Time>
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
