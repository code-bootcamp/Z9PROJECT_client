import { MessageOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import AnswerList from "../../../answer/list/answerList";
import QuestionList from "../../../question/list/questionList";
import QuestionWriter from "../../../question/write/questionWriter";
import { IDetailPresenterProps } from "../detail.types";
import Product01 from "../miniProduct.tsx/product01";
import * as S from "./detail.styles2";

export default function ProductDetailPresenter2(P: IDetailPresenterProps) {
  const { onClickMoveToPage } = useMoveToPage();

  const { handleChange, onClickCount, count, cart, onClickCart } = P;

  return (
    <>
      <S.Container>
        <S.Reset src="/icon_top.svg" alt="상단 바로가기 아이콘" />
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
                <strong>[레오제이 공동개발]</strong>비플레인 녹두 모공 클레이 팩
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></S.Iframe>
              </div>

              <S.ImgBox2>
                <S.Octagon2></S.Octagon2>
              </S.ImgBox2>
            </S.Wrapper>
          </S.LeftDiv>
        </S.Left>
        <S.DetailWrapper>
          <img src="/img_detailTest.jpeg" alt="상세랜딩이미지" />
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
              <QuestionList />
            </S.Box>
          </S.Wrapper3>
        </S.Comment>
      </S.Container>
    </>
  );
}
