import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import * as S from "./product01.styles";
import { IProduct01Props } from "./product01.types";

export default function Product01(P: IProduct01Props) {
  const {
    onClickCount,
    count,
    cart,
    data,
    discount,
    onClickLike,
    onClickOrder,
  } = P;

  const handleChange = (value: any) => {};

  const start = Number(new Date(data?.fetchProduct.validFrom.slice(0, 10)));
  const today = Number(new Date());
  const end = Number(new Date(data?.fetchProduct.validUntil.slice(0, 10)));
  const status = today < start ? "start" : today < end ? "ing" : "end";
  const time =
    status === "end" ? 0 : status === "start" ? start - today : end - today;
  let option: any[] = [];

  if (data?.fetchProduct?.option1 !== null)
    option = [
      {
        value: data?.fetchProduct?.option1,
        label: data?.fetchProduct?.option1,
      },
    ];
  if (data?.fetchProduct?.option2 !== null)
    option = [
      {
        value: data?.fetchProduct?.option1,
        label: data?.fetchProduct?.option1,
      },
      {
        value: data?.fetchProduct?.option2,
        label: data?.fetchProduct?.option2,
      },
    ];
  if (data?.fetchProduct?.option3 !== null)
    option = [
      {
        value: data?.fetchProduct?.option1,
        label: data?.fetchProduct?.option1,
      },
      {
        value: data?.fetchProduct?.option2,
        label: data?.fetchProduct?.option2,
      },
      {
        value: data?.fetchProduct?.option3,
        label: data?.fetchProduct?.option3,
      },
    ];
  if (data?.fetchProduct?.option4 !== null)
    option = [
      {
        value: data?.fetchProduct?.option1,
        label: data?.fetchProduct?.option1,
      },
      {
        value: data?.fetchProduct?.option2,
        label: data?.fetchProduct?.option2,
      },
      {
        value: data?.fetchProduct?.option3,
        label: data?.fetchProduct?.option3,
      },
      {
        value: data?.fetchProduct?.option4,
        label: data?.fetchProduct?.option4,
      },
    ];
  if (data?.fetchProduct?.option5 !== null)
    option = [
      {
        value: data?.fetchProduct?.option1,
        label: data?.fetchProduct?.option1,
      },
      {
        value: data?.fetchProduct?.option2,
        label: data?.fetchProduct?.option2,
      },
      {
        value: data?.fetchProduct?.option3,
        label: data?.fetchProduct?.option3,
      },
      {
        value: data?.fetchProduct?.option4,
        label: data?.fetchProduct?.option4,
      },
      {
        value: data?.fetchProduct?.option5,
        label: data?.fetchProduct?.option5,
      },
    ];

  return (
    <>
      <S.InfoRight>
        <S.H1>
          [{data?.fetchProduct.quantity}개 한정]{data?.fetchProduct.name}
        </S.H1>
        <S.Text>
          <ul>
            <li>시중 판매가</li>
            <S.Price>
              {data?.fetchProduct.originPrice?.toLocaleString()}원
            </S.Price>
          </ul>
          <ul>
            <li>할인판매가</li>
            <S.PriceSale>
              <strong>{discount}%</strong>
              {data?.fetchProduct.discountPrice?.toLocaleString()}원
            </S.PriceSale>
          </ul>
          <ul>
            <li>배송방법</li>
            <li>{data?.fetchProduct.delivery}</li>
          </ul>
          <ul>
            <li>마감수량</li>
            <S.Close>{data?.fetchProduct.originalQuantity} 개</S.Close>
          </ul>
          <ul>
            <li>마감일정</li>
            <li>
              {data?.fetchProduct.validFrom
                .slice(0, 10)
                .replace("-", ".")
                .replace("-", ".")}{" "}
              ~{" "}
              {data?.fetchProduct.validUntil
                .slice(0, 10)
                .replace("-", ".")
                .replace("-", ".")}
            </li>
          </ul>
          <ul>
            <li>수량선택</li>
            <li>
              <S.Choose>
                <button id="qtyMinus" onClick={onClickCount}>
                  <MinusOutlined />
                </button>
                {count}
                <button id="qtyPlus" onClick={onClickCount}>
                  <PlusOutlined />
                </button>
              </S.Choose>
            </li>
          </ul>
          {data?.fetchProduct?.option1 && (
            <ul>
              <li>옵션</li>
              <li>
                <S.MySelect
                  defaultValue="옵션을 선택해주세요."
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={option}
                />
              </li>
            </ul>
          )}
        </S.Text>

        <S.H2></S.H2>

        <S.H3>
          총 상품 금액
          <strong>
            {(data?.fetchProduct.discountPrice * count).toLocaleString()}원
          </strong>
        </S.H3>

        <S.BoxBtn>
          <button className="cart" onClick={onClickLike}>
            {!cart && <HeartOutlined />} {``}
            {cart && <HeartFilled />} {``}
            <span className="emotion">관심상품</span>
          </button>

          {time > 0 ? (
            status === "ing" ? (
              <>
                <button className="buy" onClick={onClickOrder}>
                  <span className="emotion">바로 구매하기</span>
                </button>
              </>
            ) : (
              <>
                <button className="buy" style={{ background: "#999" }}>
                  <span className="emotion">미진행</span>
                </button>
              </>
            )
          ) : (
            <>
              <button className="buy" style={{ background: "#999" }}>
                <span className="emotion">마감</span>
              </button>
            </>
          )}
        </S.BoxBtn>
      </S.InfoRight>
    </>
  );
}
