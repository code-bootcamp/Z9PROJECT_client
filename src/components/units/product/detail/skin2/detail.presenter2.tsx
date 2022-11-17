import { MessageOutlined } from "@ant-design/icons";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import QuestionMap from "../../../question/list/questionList.map";
import QuestionWriter from "../../../question/write/questionWriter";
import { categoryContents, categoryTitle } from "../../register/atom/category";
import { IDetailPresenterProps } from "../detail.types";
import Product01 from "../miniProduct.tsx/product01";
import * as S from "./detail.styles2";

export default function ProductDetailPresenter2(P: IDetailPresenterProps) {
  const router = useRouter();

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
    setGraph,
    onClickDelete,
    handleCopyClipBoard,
    countData,
  } = P;

  return (
    <>
      <S.Container>
        <S.Info>
          <S.InfoWrapper>
            <S.InfoImg
              style={{
                backgroundImage: `url(${data?.fetchProduct.user.profileImg})`,
              }}
            ></S.InfoImg>

            <div>
              <S.Ul>
                <li className="title">
                  {data?.fetchProduct.user.mainContents} 크리에이터
                </li>
                <li>
                  <S.H1>
                    {data?.fetchProduct.user.nickname} |{" "}
                    {data?.fetchProduct.user.snsName}
                  </S.H1>
                </li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 구독자 수</li>
                <li>
                  {data?.fetchProduct.user?.followerNumber?.toLocaleString()}
                </li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 컨텐츠</li>
                <li>{data?.fetchProduct.user.mainContents}</li>
              </S.Ul>

              <S.Ul>
                <li>유튜브 소개글</li>
                <li>{data?.fetchProduct.user.introduce}</li>
              </S.Ul>
            </div>
          </S.InfoWrapper>
        </S.Info>

        <S.Right>
          <S.RightDiv>
            <S.Wrapper>
              <S.ImgBox>
                <S.Octagon
                  style={{
                    backgroundImage: `url(${
                      data?.fetchProduct?.images && data?.fetchProduct.images[0]
                    })`,
                  }}
                ></S.Octagon>
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
                <S.Text2>
                  {data?.fetchProduct.user?.followerNumber?.toLocaleString()}K
                </S.Text2>
                <S.Iframe
                  url={data?.fetchProduct?.youtubeLink}
                  width={500}
                  height={230}
                  muted={true}
                  playing={true}
                />
              </div>

              <S.ImgBox2>
                <S.Octagon2
                  style={{
                    backgroundImage: `url(${
                      !data?.fetchProduct?.images[1]
                        ? data?.fetchProduct?.images[0]
                        : data?.fetchProduct?.images[1]
                    })`,
                  }}
                ></S.Octagon2>
              </S.ImgBox2>
            </S.Wrapper>
          </S.LeftDiv>
        </S.Left>
        <S.DetailWrapper>
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
              {/* {process.browser && (
                <S.Randing
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.fetchProduct.content),
                  }}
                ></S.Randing>
              )} */}
              <Product01
                onClickCount={onClickCount}
                count={count}
                cart={cart}
                data={data}
                discount={discount}
                onClickLike={onClickLike}
                onClickOrder={onClickOrder}
                setGraph={setGraph}
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
            <button
              onClick={onClickMoveToPage(
                `/product/${router.query.useditemId}/edit`
              )}
            >
              수정
            </button>
            <button onClick={onClickDelete}>삭제</button>
          </S.Button>
        </S.DetailWrapper>

        <S.Comment>
          <S.Wrapper3>
            <S.Count>
              <li>
                <MessageOutlined /> {countData?.fetchCountOfQuestions}
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
