import { HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useInterval } from "../../../commons/hooks/timer";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./list.styles";

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

export default function ProductListPresenter(P: any) {
  const { el } = P;
  const { onClickMoveToPage } = useMoveToPage();

  const targetISOString = el?.validUntil;

  const isNotYet = useResultOfIntervalCalculator(
    () => (new Date(targetISOString) as any) - (new Date() as any) - 9 > 0,
    10
  );

  console.log(el, "ListEl");
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
              {isNotYet ? (
                <>
                  <CountDownView
                    targetISOString={targetISOString}
                  ></CountDownView>
                  <p>
                    {el?.validFrom
                      .slice(0, 10)
                      .replace("-", ".")
                      .replace("-", ".")}{" "}
                    ~{" "}
                    {el?.validUntil
                      .slice(0, 10)
                      .replace("-", ".")
                      .replace("-", ".")}
                  </p>
                </>
              ) : (
                "마감되었습니다"
              )}
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
            <S.Time>
              {isNotYet ? (
                <CountDownView
                  targetISOString={targetISOString}
                ></CountDownView>
              ) : (
                "마감되었습니다"
              )}
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
    </>
  );
}
