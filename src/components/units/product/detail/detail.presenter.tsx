import {
  BellOutlined,
  CaretDownOutlined,
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./detail.styles";
import { IDetailPresenterProps } from "./detail.types";
import Product01 from "./miniProduct.tsx/product01";

export default function ProductDetailPresenter(P: IDetailPresenterProps) {
  const { onClickMoveToPage } = useMoveToPage();

  const { handleChange, onClickCount, count, cart, onClickCart } = P;
  return (
    <>
      <S.Container>
        <S.Reset src="/icon_top.svg" alt="상단 바로가기 아이콘" />
        <S.Wrapper>
          <S.ProdInfo>
            <S.InfoLeft>
              <img src="/test.webp" alt="상품이미지" />
              <S.ul>
                <li>
                  <img src="/test.webp" alt="상품 상세이미지" />
                </li>
                <li>
                  <img src="/test.webp" alt="상품 상세이미지" />
                </li>
                <li>
                  <img src="/test.webp" alt="상품 상세이미지" />
                </li>
                <li>
                  <img src="/test.webp" alt="상품 상세이미지" />
                </li>
              </S.ul>
            </S.InfoLeft>

            <S.InfoRight>
              <ul className="top">
                <S.Bell>
                  알림받기 <BellOutlined />
                </S.Bell>
                <li>
                  <SnippetsOutlined />
                </li>
              </ul>
              <S.H1>[300개 한정]애플 에어팟 3세대</S.H1>
              <S.Text>
                <ul>
                  <li>판매가</li>
                  <S.Price>1,000,000원</S.Price>
                </ul>

                <ul>
                  <li>할인판매가</li>
                  <S.PriceSale>
                    <strong>30%</strong>700,000원
                  </S.PriceSale>
                </ul>

                <ul>
                  <li>배송방법</li>
                  <li>택배(무료배송)</li>
                </ul>

                <ul>
                  <li>마감기준</li>
                  <S.Close>50,000,000원(달성시 마감)</S.Close>
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
                <S.Graph>
                  50%<span>15,000,000원</span>
                </S.Graph>
              </S.Text>

              <S.H2>3일 00:43:33</S.H2>
              <S.Piece>
                <p>
                  애플 에어팟 3세대<span>700,000원</span>
                </p>
                <S.Choose>
                  <button id="qtyMinus" onClick={onClickCount}>
                    <img src="/icon_min.png" alt="마이너스 아이콘" />
                  </button>
                  {count}
                  <button id="qtyPlus" onClick={onClickCount}>
                    <img src="/icon_max.png" alt="플러스 아이콘" />
                  </button>
                </S.Choose>
              </S.Piece>

              <S.H3>
                총 상품 금액 <strong>700,000원</strong>
              </S.H3>

              <S.BoxBtn>
                <button className="cart" onClick={onClickCart}>
                  {!cart && <HeartOutlined />} {``}
                  {cart && <HeartFilled />} {``}
                  관심상품
                </button>
                <button className="buy">바로 구매하기</button>
              </S.BoxBtn>
            </S.InfoRight>
          </S.ProdInfo>
          <S.Randing
            src="/img_detailTest.jpeg"
            alt="레오제이 녹두팩 랜딩이미지"
          />
          <Product01
            onClickCount={onClickCount}
            count={count}
            cart={cart}
            onClickCart={onClickCart}
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
                <HeartOutlined /> 2
              </li>
              <li>
                <MessageOutlined /> 10
              </li>
            </S.Count>

            <S.Write>
              <S.User>
                <img src="/img_user.jpeg" alt="유저 이미지" />
                <S.UserInfo>김빵빵</S.UserInfo>
              </S.User>
              <S.Textarea>
                <textarea placeholder="답변을 입력해주세요."></textarea>
                <button>등록</button>
              </S.Textarea>
            </S.Write>

            <S.H4>댓글</S.H4>

            <S.Box>
              <S.User>
                <img src="/img_user.jpeg" alt="유저 이미지" />
                <S.UserInfo>
                  김빵빵<span>2022.11.03</span>
                </S.UserInfo>
              </S.User>
              <S.Contents>
                질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문
              </S.Contents>
              <S.Answer>
                <p>
                  <MessageOutlined /> {``} 답글 <CaretDownOutlined />
                </p>
                <p>수정</p>
                <p>삭제</p>
              </S.Answer>
              <S.AnswerBox>
                <S.User>
                  <img src="/img_user.jpeg" alt="유저 이미지" />
                  <S.UserInfo>
                    김빵빵<span>2022.11.03</span>
                  </S.UserInfo>
                </S.User>
                <S.Contents>
                  답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변
                </S.Contents>
              </S.AnswerBox>
            </S.Box>
            <S.Box>
              <S.User>
                <img src="/img_user.jpeg" alt="유저 이미지" />
                <S.UserInfo>
                  김빵빵<span>2022.11.03</span>
                </S.UserInfo>
              </S.User>
              <S.Contents>
                질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문질문
              </S.Contents>
              <S.Answer>
                <p>
                  <MessageOutlined /> {``} 답글 <CaretDownOutlined />
                </p>
                <p>수정</p>
                <p>삭제</p>
              </S.Answer>
            </S.Box>
          </S.Wrapper3>
        </S.Comment>
      </S.Container>
    </>
  );
}
