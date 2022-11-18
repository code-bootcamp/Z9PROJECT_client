import {
  BellOutlined,
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useInterval } from "../../../../commons/hooks/timer";
import * as S from "./product01.styles";
import { IProduct01Props } from "./product01.types";

const useResultOfIntervalCalculator = (calculator: any, delay: any) => {
  const [result, setResult] = useState(calculator());
  useInterval(() => {
    const newResult = calculator();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

const CountDownView = ({ targetISOString }: { targetISOString: any }) => {
  const remain = useResultOfIntervalCalculator(
    () =>
      Math.floor(
        ((new Date(targetISOString) as any) -
          (new Date().setHours(new Date().getHours() + 9) as any)) /
          1000
      ),
    10
  );
  const day = Math.floor(remain / (60 * 60 * 24));
  const hour = Math.floor((remain % (60 * 60 * 24)) / (60 * 60));
  const min = Math.floor((remain % (60 * 60)) / 60);
  const sec = Math.floor(remain % 60);

  return (
    <S.Timer className="CountDownWrap">
      {day}
      <span>일</span>
      {hour}
      <span>시</span>
      {min}
      <span>분</span>
      {sec}
      <span>초</span>
    </S.Timer>
  );
};

export default function Product01(P: IProduct01Props) {
  const {
    onClickCount,
    count,
    cart,
    data,
    discount,
    onClickLike,
    onClickOrder,
    setGraph,
  } = P;

  const handleChange = (value: any) => {};

  setGraph(
    Math.floor(
      ((data?.fetchProduct.originalQuantity - data?.fetchProduct.quantity) *
        100) /
        data?.fetchProduct.originalQuantity
    )
  );

  const targetISOString = data?.fetchProduct.validUntil;

  const isNotYet = useResultOfIntervalCalculator(
    () => (new Date(targetISOString) as any) - (new Date() as any) - 9 > 0,
    10
  );
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
          <ul>
            <li>옵션</li>
            <li>
              <S.MySelect
                defaultValue="옵션을 선택해주세요."
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
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
                ]}
              />
            </li>
          </ul>
        </S.Text>

        <S.H2>
          {isNotYet ? (
            <CountDownView targetISOString={targetISOString}></CountDownView>
          ) : (
            "마감되었습니다"
          )}
        </S.H2>

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
            <span className="emotion">관심상품</span>
          </button>
          {isNotYet ? (
            <button className="buy" onClick={onClickOrder}>
              <span className="emotion">바로 구매하기</span>
            </button>
          ) : (
            <button className="closed">
              <span className="emotion">마감</span>
            </button>
          )}
        </S.BoxBtn>
      </S.InfoRight>
    </>
  );
}
