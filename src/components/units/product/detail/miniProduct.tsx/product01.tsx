import {
  BellOutlined,
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { IDetailPresenterProps } from "../detail.types";
import * as S from "./product01.styles";

export default function Product01(P: IDetailPresenterProps) {
  const {
    onClickCount,
    count,
    cart,
    onClickCart,
    data,
    discount,
    onClickLike,
  } = P;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
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
            <S.Close>{data?.fetchProduct.quantity} 개</S.Close>
          </ul>
          <ul>
            <li>마감일정</li>
            <li>
              {data?.fetchProduct.validUntil
                .slice(0, 10)
                .replace("-", "년 ")
                .replace("-", "월 ")}
              일
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
          <ul>
            <li>옵션</li>
            <li>
              <S.MySelect
                defaultValue="옵션을 선택해주세요."
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  {
                    value: "S 사이즈",
                    label: "S 사이즈",
                  },
                  {
                    value: "M 사이즈",
                    label: "M 사이즈",
                  },
                  {
                    value: "L 사이즈",
                    label: "L 사이즈",
                  },
                  {
                    value: "disabled",
                    disabled: true,
                    label: "Disabled",
                  },
                ]}
              />
            </li>
          </ul>
        </S.Text>

        <S.H2>3일 00:43:33</S.H2>

        <S.H3>
          총 상품 금액{" "}
          <strong>
            {(data?.fetchProduct.discountPrice * count).toLocaleString()}원
          </strong>
        </S.H3>

        <S.BoxBtn>
          <button className="cart" onClick={onClickLike}>
            {!cart && <HeartOutlined />} {``}
            {cart && <HeartFilled />} {``}
            관심상품
          </button>
          <button className="buy">바로 구매하기</button>
        </S.BoxBtn>
      </S.InfoRight>
    </>
  );
}
