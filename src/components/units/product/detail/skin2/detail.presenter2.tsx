import { MessageOutlined } from "@ant-design/icons";
import DOMPurify from "dompurify";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import QuestionMap from "../../../question/list/questionList.map";
import QuestionWriter from "../../../question/write/questionWriter";
import { categoryContents, categoryTitle } from "../../register/atom/category";
import { IDetailPresenterProps } from "../detail.types";
import Product01 from "../miniProduct.tsx/product01";
import * as S from "./detail.styles2";
const ViewerPage = dynamic(async () => await import("../atom/viewer"), {
  ssr: false,
});

export default function ProductDetailPresenter2(P: IDetailPresenterProps) {
  const router = useRouter();
  const [color, setColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>();

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
    onClickDelete,
    countData,
    onLoadPage,
  } = P;

  useEffect(() => {
    setColor(String(data?.fetchProduct.textColor));
    setBgColor(data?.fetchProduct.bgColor);
  }, []);
  return (
    <>
      <S.Container>
        <S.Info bgColor={String(bgColor)}>
          <S.InfoWrapper>
            <S.InfoImg
              style={{
                backgroundImage: `url(${String(
                  data?.fetchProduct.user.profileImg
                )})`,
              }}
            ></S.InfoImg>

            <div>
              <S.Ul>
                <S.Li className="title" color={color}>
                  {data?.fetchProduct.user.mainContents} 크리에이터
                </S.Li>
                <S.Li color={color}>
                  <S.H1 color={color}>
                    {data?.fetchProduct.user.nickname} |{" "}
                    {data?.fetchProduct.user.snsName}
                  </S.H1>
                </S.Li>
              </S.Ul>

              <S.Ul>
                <S.Li color={color}>
                  {data?.fetchProduct.user?.snsChannel} 팔로워
                </S.Li>
                <S.Li color={color}>
                  {data?.fetchProduct.user?.followerNumber?.toLocaleString()}
                </S.Li>
              </S.Ul>

              <S.Ul>
                <S.Li color={color}>유튜브 컨텐츠</S.Li>
                <S.Li color={color}>
                  {data?.fetchProduct.user.mainContents}
                </S.Li>
              </S.Ul>

              <S.Ul>
                <S.Li color={color}>유튜브 소개글</S.Li>
                <S.Li color={color}>{data?.fetchProduct.user.introduce}</S.Li>
              </S.Ul>
            </div>
          </S.InfoWrapper>
        </S.Info>

        <S.Right>
          <S.RightDiv>
            <S.Wrapper>
              <S.ImgBox>
                <S.Octagon
                  onLoad={onLoadPage}
                  style={{
                    backgroundImage: `url(${
                      String(data?.fetchProduct?.images) &&
                      String(data?.fetchProduct?.images[0])
                    })`,
                  }}
                ></S.Octagon>
              </S.ImgBox>
              <S.Text>
                <strong>[{data?.fetchProduct.quantity}개 한정]</strong>
                {data?.fetchProduct.name}
              </S.Text>
              <S.Like
                onLoad={onLoadPage}
                src="/icon_like.png"
                alt="좋아요 아이콘"
                className="mobile"
              />
              <S.Emoticon
                src="/icon_emoticon.png"
                alt="하트 이모티콘 아이콘"
                className="mobile"
              />
            </S.Wrapper>
          </S.RightDiv>
        </S.Right>
        <S.Left>
          <S.LeftDiv>
            <S.Wrapper>
              <div className="youtube">
                <S.Text2>
                  {data?.fetchProduct.user?.followerNumber?.toLocaleString()}K
                </S.Text2>
                <S.Iframe
                  className="youtube"
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
                      !String(data?.fetchProduct?.images[1])
                        ? String(data?.fetchProduct?.images[0])
                        : String(data?.fetchProduct?.images[1])
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
              <span>구매정보 & QnA</span>
            </li>
          </S.Tab>

          {!important && (
            <S.Ref>
              <S.Randing>
                {data?.fetchProduct.content ? (
                  <ViewerPage
                    initialValue={DOMPurify.sanitize(
                      data?.fetchProduct.content
                    )}
                  />
                ) : (
                  <div>loadding...</div>
                )}
              </S.Randing>

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
                <li key={idx}>
                  <strong>{el}</strong>
                  <data>
                    {data?.fetchProduct.productDetail[`option${idx + 1}`]}
                  </data>
                </li>
              ))}
              {categoryContents[
                categoryTitle.indexOf(data?.fetchProduct.productDetail.type)
              ]?.length %
                2 ===
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
                `/product/${String(router.query.useditemId)}/edit`
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
