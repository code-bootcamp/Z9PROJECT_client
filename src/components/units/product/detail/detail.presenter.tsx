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
            <button onClick={onClickMoveToPage("/lists/list")}>목록으로</button>
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
                04아들님, 정말 많은 시간 고민으로 힘들었을 것 같네요 ㅠㅠㅠ
                차라리 모르는게 나을 것 같다는 건 없을 것 같습니다. 성향을 받아
                들이기로 했다면, 남자친구도 사귀기 시작할 거고.. 변화가 있을텐데
                그것을 계속 숨기기 위한 거짓말이 결국 더 힘들어지고 자책하게 될
                원인이 되지 않을까요? 부모님의 입장을 생각하시기보단 자신을 더
                돌아보며 말할 용기가 생겼을 때 말씀을 드리는게 좋을 것 같습니다.
                물론 말하는게 쉽지는 않을 겁니다. 그렇다고 19년이나 아들을 봐온
                부모님은 어쩌면 이미 알고 있을 수도 있고.. 어찌됬든 아들인데
                어떠한 모습이든 받아들일 수 밖에 없을 거에요.. 그전에 한번 더
                깊은 고민을 해보는 건 어떨까요? 아직 어리기 때문에 내가 정말
                남자를 좋아하는지에 대한 확신이 정말 들때가 오면 모르는 상태에서
                들켜서 받는 충격보다, 먼저 말씀드리고 앞으로의 방향성과 미래를
                같이 논의하면 좋을 것 같습니다 :) 타인의 짧은 의견이지만, 모든
                사랑이 존중 받을 권리가 있고 멀리서나마 앞으로의 04아들님의
                미래를 응원할게요!
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
                  정말 너무 감사드립니다. 쭉 읽고 나니까 눈물이 흐르네요… 글을
                  읽고 나니까 후에라도 천천히 저를 그 자체로 부모님께 말할
                  용기가 생긴것 같아요ㅠㅠ 얼굴도 모르는 남인데 이렇게 좋은말씀
                  정성스럽게 남겨주셔서 진심으로 감사드립니다😭
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
                04아들님, 정말 많은 시간 고민으로 힘들었을 것 같네요 ㅠㅠㅠ
                차라리 모르는게 나을 것 같다는 건 없을 것 같습니다. 성향을 받아
                들이기로 했다면, 남자친구도 사귀기 시작할 거고.. 변화가 있을텐데
                그것을 계속 숨기기 위한 거짓말이 결국 더 힘들어지고 자책하게 될
                원인이 되지 않을까요? 부모님의 입장을 생각하시기보단 자신을 더
                돌아보며 말할 용기가 생겼을 때 말씀을 드리는게 좋을 것 같습니다.
                물론 말하는게 쉽지는 않을 겁니다. 그렇다고 19년이나 아들을 봐온
                부모님은 어쩌면 이미 알고 있을 수도 있고.. 어찌됬든 아들인데
                어떠한 모습이든 받아들일 수 밖에 없을 거에요.. 그전에 한번 더
                깊은 고민을 해보는 건 어떨까요? 아직 어리기 때문에 내가 정말
                남자를 좋아하는지에 대한 확신이 정말 들때가 오면 모르는 상태에서
                들켜서 받는 충격보다, 먼저 말씀드리고 앞으로의 방향성과 미래를
                같이 논의하면 좋을 것 같습니다 :) 타인의 짧은 의견이지만, 모든
                사랑이 존중 받을 권리가 있고 멀리서나마 앞으로의 04아들님의
                미래를 응원할게요!
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
