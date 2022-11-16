import {
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import * as S from "./detail.styles";
import { IDetailPresenterProps } from "../detail.types";
import Product01 from "../miniProduct.tsx/product01";
import QuestionWriter from "../../../question/write/questionWriter";
import QuestionMap from "../../../question/list/questionList.map";
import { categoryContents, categoryTitle } from "../../register/atom/category";
import * as DOMPurify from "dompurify";
import { useState } from "react";
import { useInterval } from "../../../../commons/hooks/timer";

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
    <div className="CountDownWrap">
      {day}일{hour}:{min}:{sec}
    </div>
  );
};

export default function ProductDetailPresenter(P: IDetailPresenterProps) {
  const { onClickMoveToPage } = useMoveToPage();

  const {
    handleChange,
    onClickCount,
    count,
    cart,
    data,
    discount,
    onClickLike,
    thumbnail,
    onClickImages,
    onClickOrder,
    onClickTab,
    onClickTab2,
    important,
    commentData,
    setGraph,
    graph,
  } = P;

  setGraph(
    Math.floor(
      ((data?.fetchProduct.originalQuantity - data?.fetchProduct.quantity) *
        100) /
        data?.fetchProduct.originalQuantity
    )
  );

  const targetISOString = data?.fetchProduct.validUntil;
  console.log(targetISOString);

  const isNotYet = useResultOfIntervalCalculator(
    () => (new Date(targetISOString) as any) - (new Date() as any) - 9 > 0,
    10
  );
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ProdInfo>
            <S.InfoLeft>
              <img src={thumbnail} alt="상품이미지" />
              <S.ul>
                {data?.fetchProduct.images?.map((el: string) => (
                  <li key={el}>
                    <img src={el} onClick={onClickImages} />
                  </li>
                ))}
              </S.ul>
            </S.InfoLeft>

            <S.InfoRight>
              <ul className="top">
                <S.Bell>
                  알림받기 <img src="/icon_bell.png" alt="알람아이콘" />
                </S.Bell>
                <li>
                  <img src="/icon_copy.png" alt="공유하기 아이콘" />
                </li>
              </ul>
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
                <S.Strong>
                  <p>
                    진행현황 <span>({graph}%)</span>
                  </p>
                  <span>남은 수량 : {data?.fetchProduct.quantity} 개</span>
                </S.Strong>
                <S.Graph>
                  <S.GraphPercent graph={graph}></S.GraphPercent>
                </S.Graph>
                <S.Persent>
                  <li>0%</li>
                  <li>50%</li>
                  <li>100%</li>
                </S.Persent>
              </S.Text>

              <S.H2>
                {isNotYet ? (
                  <CountDownView
                    targetISOString={targetISOString}
                  ></CountDownView>
                ) : (
                  "마감되었습니다"
                )}
              </S.H2>

              <S.H3>
                총 상품 금액
                <strong>
                  {(data?.fetchProduct.discountPrice * count).toLocaleString()}
                  원
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
          </S.ProdInfo>

          <S.Tab>
            <li onClick={onClickTab2}>
              <span>제품상세</span>
            </li>
            <li onClick={onClickTab}>
              <span>QnA</span>
            </li>
          </S.Tab>

          {!important && (
            <S.Ref>
              {process.browser && (
                <S.Randing
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.fetchProduct.content),
                  }}
                ></S.Randing>
              )}
              <Product01
                onClickCount={onClickCount}
                count={count}
                cart={cart}
                data={data}
                discount={discount}
                onClickLike={onClickLike}
                onClickOrder={onClickOrder}
              />
            </S.Ref>
          )}

          <S.Important>
            <S.H3Info>필수 표기정보</S.H3Info>
            <S.Company>
              {categoryContents[
                categoryTitle.indexOf(data?.fetchProduct.productDetail.type)
              ]?.map((el, idx) => (
                <li>
                  <strong>{el}</strong>
                  <data>
                    {data?.fetchProduct.productDetail[`option${idx + 1}`]}
                  </data>
                </li>
              ))}
              {categoryContents[
                categoryTitle.indexOf(data?.fetchProduct.productDetail.type)
              ]?.length %
                2 ==
              1 ? (
                <li>
                  <strong></strong>
                  <data></data>
                </li>
              ) : null}
            </S.Company>
          </S.Important>

          <S.Button>
            <button onClick={onClickMoveToPage("/list/list")}>목록으로</button>
            <button>수정</button>
            <button>삭제</button>
          </S.Button>
        </S.Wrapper>

        <S.Comment>
          <S.Wrapper3>
            <S.Count>
              <li>
                <MessageOutlined /> {commentData?.fetchQuestions.length}
              </li>
            </S.Count>
            <QuestionWriter />
            <S.H4>QnA</S.H4>
            <S.Title>
              <li>프로필</li>
              <li>답변여부</li>
              <li>내용</li>
              <li className="writer">작성자</li>
              <li className="createdAt">등록일자</li>
              <li></li>
            </S.Title>

            <S.Box>
              <QuestionMap />
            </S.Box>
          </S.Wrapper3>
        </S.Comment>
      </S.Container>
    </>
  );
}
