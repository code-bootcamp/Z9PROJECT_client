import { MessageOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import QuestionMap from "../../../question/list/questionList.map";
import QuestionWriter from "../../../question/write/questionWriter";
import { IDetailPresenterProps } from "../detail.types";
import Product01 from "../miniProduct.tsx/product01";
import * as S from "./detail.styles2";

export default function ProductDetailPresenter2(P: IDetailPresenterProps) {
  const { onClickMoveToPage } = useMoveToPage();

  const {
    onClickCount,
    count,
    cart,
    data,
    discount,
    onClickLike,
    onClickOrder,
    onClickTab,
    onClickTab2,
    important,
  } = P;

  return (
    <>
      <S.Container>
        <S.Info>
          <S.InfoWrapper>
            <S.InfoImg></S.InfoImg>

            <div>
              <S.Ul>
                <li className="title">뷰티 크리에이터</li>
                <li>
                  <S.H1>레오제이 | Leo J</S.H1>
                </li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 구독자 수</li>
                <li>102K</li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 컨텐츠</li>
                <li>뷰티,메이크업,브이로그</li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 소개글</li>
                <li>
                  메이크업 아티스트 레오제이 ARTIST FOREVER <br />
                  재밌게 예쁘고 멋있어지는 방법
                </li>
              </S.Ul>
            </div>
          </S.InfoWrapper>
        </S.Info>

        <S.Right>
          <S.RightDiv>
            <S.Wrapper>
              <S.ImgBox>
                <S.Octagon></S.Octagon>
              </S.ImgBox>
              <S.Text>
                <strong>[{data?.fetchProduct.quantity}개 한정]</strong>
                {data?.fetchProduct.name}
              </S.Text>
              <S.Like src="/icon_like.png" alt="좋아요 아이콘" />
              <S.Emoticon src="/icon_emoticon.png" alt="하트 이모티콘 아이콘" />
            </S.Wrapper>
          </S.RightDiv>
        </S.Right>
        <S.Left>
          <S.LeftDiv>
            <S.Wrapper>
              <div>
                <S.Text2>100K</S.Text2>
                <S.Iframe
                  width="500"
                  height="230"
                  src="https://www.youtube.com/embed/LCtZIA_-nCA?rel=0&amp;autoplay=1&mute=1&amp;loop=1;"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></S.Iframe>
              </div>

              <S.ImgBox2>
                <S.Octagon2></S.Octagon2>
              </S.ImgBox2>
            </S.Wrapper>
          </S.LeftDiv>
        </S.Left>
        <S.DetailWrapper>
          <S.Tab>
            <li onClick={onClickTab2}>제품상세</li>
            <li onClick={onClickTab}>QnA</li>
          </S.Tab>

          {!important && (
            <S.Ref>
              <S.Randing
                src="/img_detailTest.jpeg"
                alt="레오제이 녹두팩 랜딩이미지"
              />
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
              <li>
                <strong>품명 및 모델명</strong>
                <data>품명 및 모델명 적거라</data>
              </li>
              <li>
                <strong>
                  제품에 사용된 화학물질 명칭(주요물질, 보존제 등 관련 고시에
                  따른 표시의무 화학물질에 한함)
                </strong>
                <data>
                  제품에 사용된 화학물질 명칭(주요물질, 보존제 등 관련 고시에
                  따른 표시의무 화학물질에 한함) 적거라
                </data>
              </li>
            </S.Company>
            <S.Company>
              <li>
                <strong>품명 및 모델명</strong>
                <data>품명 및 모델명 적거라</data>
              </li>
              <li>
                <strong>
                  제품에 사용된 화학물질 명칭(주요물질, 보존제 등 관련 고시에
                  따른 표시의무 화학물질에 한함)
                </strong>
                <data>
                  제품에 사용된 화학물질 명칭(주요물질, 보존제 등 관련 고시에
                  따른 표시의무 화학물질에 한함) 적거라
                </data>
              </li>
            </S.Company>
          </S.Important>

          <S.Button>
            <button onClick={onClickMoveToPage("/list/list")}>목록으로</button>
            <button>수정</button>
            <button>삭제</button>
          </S.Button>
        </S.DetailWrapper>
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
              <QuestionMap />
            </S.Box>
          </S.Wrapper3>
        </S.Comment>
      </S.Container>
    </>
  );
}
