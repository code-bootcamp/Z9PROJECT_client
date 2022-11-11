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
import QuestionList from "../../../question/list/questionList";

export default function ProductDetailPresenter(P: IDetailPresenterProps) {
  const { onClickMoveToPage } = useMoveToPage();

  const {
    handleChange,
    onClickCount,
    count,
    cart,
    onClickCart,
    data,
    discount,
    onClickLike,
  } = P;

  return (
    <>
      <S.Container>
        <S.Reset src="/icon_top.svg" alt="상단 바로가기 아이콘" />
        <S.Wrapper>
          <S.H5 className="mobile">상품 정보</S.H5>
          <S.ProdInfo>
            <S.InfoLeft>
              <img src={data?.fetchProduct.images[0]} alt="상품이미지" />
              <S.ul>
                {data?.fetchProduct.images.slice(1, 4).map((el: string) => (
                  <li key={el}>
                    <img src={el} />
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
                <S.Strong>진행현황</S.Strong>
                <S.Graph>
                  <span>100개</span>
                </S.Graph>
                <S.Persent>
                  <li>0%</li>
                  <li>50%</li>
                  <li>100%</li>
                </S.Persent>
              </S.Text>

              <S.H2>3일 00:43:33</S.H2>

              <S.H3>
                총 상품 금액{" "}
                <strong>
                  {(data?.fetchProduct.discountPrice * count).toLocaleString()}
                  원
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
          </S.ProdInfo>
          <S.Tab>
            <li>제품상세</li>
            <li>QnA</li>
          </S.Tab>
          <S.Randing
            src="/img_detailTest.jpeg"
            alt="레오제이 녹두팩 랜딩이미지"
          />
          <Product01
            onClickCount={onClickCount}
            count={count}
            cart={cart}
            onClickCart={onClickCart}
            data={data}
            discount={discount}
            onClickLike={onClickLike}
          />
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
                <MessageOutlined /> 10
              </li>
            </S.Count>
            <QuestionWriter />
            <S.H4>QnA</S.H4>
            <S.Title>
              <li>프로필</li>
              <li>답변여부</li>
              <li>내용</li>
              <li>작성자</li>
              <li>등록일자</li>
              <li></li>
            </S.Title>

            <S.Box>
              <QuestionList />
            </S.Box>
          </S.Wrapper3>
        </S.Comment>
      </S.Container>
    </>
  );
}
