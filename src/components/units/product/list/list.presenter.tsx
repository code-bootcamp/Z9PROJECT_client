import { HeartOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./list.styles";
import Timer from "../../../commons/hooks/timer";
import { FETCH_LIKE_COUNT, FETCH_PRODUCT_VIEW_COUNT } from "./list.queries";
import { useQuery } from "@apollo/client";

export default function ProductListPresenter(P: any) {
  const { el, tab } = P;
  const { onClickMoveToPage } = useMoveToPage();

  const { data: viewData } = useQuery(FETCH_PRODUCT_VIEW_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(el.id) },
  });
  const { data: likeData } = useQuery(FETCH_LIKE_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(el.id) },
  });

  const start = new Date(el?.validFrom.slice(0, 10)) as any;
  const today = new Date() as any;
  const end = new Date(el?.validUntil.slice(0, 10)) as any;
  const status = today < start ? "start" : today < end ? "ing" : "end";

  return (
    <>
      {tab === "1" ? (
        <S.Section onClick={onClickMoveToPage(`/product/${String(el.id)}`)}>
          <S.User>
            <img
              src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
              alt="크리에이터 이미지"
            />
            <S.UserName>{el.user?.nickname}</S.UserName>
          </S.User>

          <S.ProdImg>
            <S.BgLayer className="bg_layer">
              <S.H2>
                <p>
                  {el?.validFrom
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  ~
                  {el?.validUntil
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  <br />
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
                <span>{viewData?.fetchProductViewCount}</span>
                <HeartOutlined />
                <span>{likeData?.fetchLikeCount}</span>
              </li>
              <S.Time className="timer">
                <Timer el={el} status={status} />
              </S.Time>
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
      ) : null}

      {tab === "2" && start > Date.now() ? (
        <S.Section onClick={onClickMoveToPage(`/product/${String(el.id)}`)}>
          <S.User>
            <img
              src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
              alt="크리에이터 이미지"
            />
            <S.UserName>{el.user?.nickname}</S.UserName>
          </S.User>

          <S.ProdImg>
            <S.BgLayer className="bg_layer">
              <S.H2>
                <p>
                  {el?.validFrom
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  ~
                  {el?.validUntil
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  <br />
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
                <span>{viewData?.fetchProductViewCount}</span>
                <HeartOutlined />
                <span>{likeData?.fetchLikeCount}</span>
              </li>
              <S.Time className="timer">
                <Timer el={el} status={status} />
              </S.Time>
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
      ) : null}

      {tab === "3" && start < Date.now() && Date.now() < end ? (
        <S.Section onClick={onClickMoveToPage(`/product/${String(el.id)}`)}>
          <S.User>
            <img
              src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
              alt="크리에이터 이미지"
            />
            <S.UserName>{el.user?.nickname}</S.UserName>
          </S.User>

          <S.ProdImg>
            <S.BgLayer className="bg_layer">
              <S.H2>
                <p>
                  {el?.validFrom
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  ~
                  {el?.validUntil
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  <br />
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
                <span>{viewData?.fetchProductViewCount}</span>
                <HeartOutlined />
                <span>{likeData?.fetchLikeCount}</span>
              </li>
              <S.Time className="timer">
                <Timer el={el} status={status} />
              </S.Time>
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
      ) : null}
      {tab === "4" && Date.now() > end ? (
        <S.Section onClick={onClickMoveToPage(`/product/${String(el.id)}`)}>
          <S.User>
            <img
              src={el.user.profileImg ? el.user.profileImg : "/icon_logo.png"}
              alt="크리에이터 이미지"
            />
            <S.UserName>{el.user?.nickname}</S.UserName>
          </S.User>

          <S.ProdImg>
            <S.BgLayer className="bg_layer">
              <S.H2>
                <p>
                  {el?.validFrom
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  ~
                  {el?.validUntil
                    .slice(0, 10)
                    .replace("-", ".")
                    .replace("-", ".")}
                  <br />
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
                <span>{viewData?.fetchProductViewCount}</span>
                <HeartOutlined />
                <span>{likeData?.fetchLikeCount}</span>
              </li>
              <S.Time className="timer">
                <Timer el={el} status={status} />
              </S.Time>
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
      ) : null}
    </>
  );
}
