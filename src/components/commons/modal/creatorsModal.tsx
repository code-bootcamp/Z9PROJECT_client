import { useState } from "react";
import {
  CloseCircleOutlined,
  EyeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import { useMoveToPage } from "../hooks/useMoveToPage";
import Timer from "../hooks/timer";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCTS_BY_CREATORS } from "../../units/product/customList/cudtomList.queries";
import {
  FETCH_LIKE_COUNT,
  FETCH_PRODUCT_VIEW_COUNT,
} from "../../units/product/list/list.queries";

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f4f5f9;
  padding-bottom: 100px;
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0%;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 30px;
  }
`;

const SearchBox: any = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-input-affix-wrapper {
    width: 30%;
    border-radius: 5px;
    height: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

    li {
      font-size: ${styleSet.fontSize.s7};
      font-family: ${styleSet.font.B};
      text-align: center;
      width: 110px;
      cursor: pointer;
      background-color: ${styleSet.colors.black};
      color: ${styleSet.colors.white};
      padding: 10px 20px;
      border-radius: 10px;
      &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
        background-color: ${styleSet.colors.primary};
        color: ${styleSet.colors.white};
      }
    }
  }
  @media ${styleSet.breakePoints.mobile} {
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    li {
      font-size: ${styleSet.fontSize.s9} !important;
      width: 110px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 !important;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      word-break: keep-all;
      &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
        border-radius: 10px !important;
      }
    }
  }
`;

const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s1};
  font-family: ${styleSet.font.B};
  text-align: center;
  padding-block: 50px;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 10px;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Button = styled.button`
  width: 50%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  border: 1px solid ${styleSet.colors.primary};
  margin-top: 50px;
  overflow: hidden;
  position: relative;
  left: 30%;
  background-color: ${styleSet.colors.primary};
  transform: translateX(-50%);
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.aftercolor};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: ${styleSet.colors.white};
    ::before {
      width: 120%;
    }
    span {
      color: ${styleSet.colors.white};
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    color: ${styleSet.colors.white};
  }
`;

const Main = styled.main`
  margin-top: 50px;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 60px;
  }

  @media ${styleSet.breakePoints.mobile} {
    .infinite-scroll {
      flex-direction: column;
    }
  }
`;

const Section = styled.section`
  cursor: pointer;
  max-width: calc(50% - 30px);
  max-height: 800px;
  overflow: hidden;
  position: relative;
  transition: padding 0.34s ease-in-out;
  border: 1px dashed #ccc;
  box-shadow: 0 0.8rem 2rem rgb(0 0 0 / 5%);
  &:hover .bg_layer {
    transition: 0.8s;
    opacity: 1;
  }
  @media ${styleSet.breakePoints.mobile} {
    min-width: 100%;
  }
`;

const User = styled.div`
  padding: 25px;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;

  img {
    width: 75px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
    border: 1px solid #f5f5f5;
  }
  @media ${styleSet.breakePoints.mobile} {
    padding: 10px;
  }
`;

const UserName = styled.p`
  font-size: ${styleSet.fontSize.s6};
`;

const BgLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const H2 = styled.h2`
  color: ${styleSet.colors.white};
  font-size: ${styleSet.fontSize.s2};
`;

const ProdImg = styled.div`
  height: 450px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    width: 700px;
  }
  @media ${styleSet.breakePoints.mobile} {
    img {
      width: -webkit-fill-available;
    }
  }
`;

const PriceSale = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  border-radius: 0px 0px 0px 80px;
  background: ${styleSet.colors.primary};
  width: 100px;
  height: 100px;
  color: ${styleSet.colors.white};
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s4};
`;

const View = styled(EyeOutlined)`
  font-size: ${styleSet.fontSize.s7} !important;
`;

const Bottom = styled.section`
  padding: 20px 25px;
  background: #fff;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  li {
    display: flex;
    align-items: center;
  }
  span {
    font-size: ${styleSet.fontSize.s9};
    margin-right: 10px;
  }
`;

const Time = styled.li`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  span {
    margin-right: 0;
  }
`;

const ProdName = styled.h1`
  font-size: ${styleSet.fontSize.s6};
  font-family: ${styleSet.font.EB};
  padding-bottom: 20px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 620px;
`;

const Close = styled(CloseCircleOutlined)`
  font-size: ${styleSet.fontSize.s2};
  position: absolute;
  right: 30px;
  top: 30px;
  color: ${styleSet.colors.red};
`;

const Price = styled.p`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    text-decoration-line: line-through;
    color: ${styleSet.colors.red};
    font-size: ${styleSet.fontSize.s8};

    font-family: ${styleSet.font.B};
  }
`;

export default function CreatorsModal(P: any) {
  const { el, setList } = P;
  const [tab, setTab] = useState<any>("1");
  const { onClickMoveToPage } = useMoveToPage();
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS_BY_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { userId: String(el.id), page: 1 },
  });

  const { data: viewData } = useQuery(FETCH_PRODUCT_VIEW_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(el.id) },
  });
  const { data: likeData } = useQuery(FETCH_LIKE_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(el.id) },
  });

  const btnArray = ["전체", "진행예정", "진행중", "종료"];

  const start = new Date(el?.validFrom?.slice(0, 10)) as any;
  const today = new Date() as any;
  const end = new Date(el?.validUntil?.slice(0, 10)) as any;
  const status = today < start ? "start" : today < end ? "ing" : "end";

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  const onClickClose = () => {
    setList(false);
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchProductsByCreator.length / 4) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchProductsByCreator)
          return { fetchProductsByCreator: [...prev.fetchProductsByCreator] };
        return {
          fetchProductsByCreator: [
            ...prev.fetchProductsByCreator,
            ...fetchMoreResult.fetchProductsByCreator,
          ],
        };
      },
    });
  };

  return (
    <>
      <Container>
        <Close onClick={onClickClose} />
        <Wrapper>
          <H1>리스트</H1>
          <SearchBox tab={tab}>
            <ul>
              {btnArray.map((el: any, i: number) => (
                <li id={String(i + 1)} onClick={onClickTab} key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </SearchBox>
          <Main>
            <div>
              {data?.fetchProductsByCreator?.map((el: any) => (
                <Section
                  onClick={onClickMoveToPage(`/product/${String(el.id)}`)}
                  key={el.id}
                >
                  {console.log(el)}
                  <User>
                    <img
                      src={
                        el?.user?.profileImg
                          ? el?.user?.profileImg
                          : "/icon_logo.png"
                      }
                      alt="크리에이터 이미지"
                    />
                    <UserName>{el?.user?.nickname}</UserName>
                  </User>

                  <ProdImg>
                    <BgLayer className="bg_layer">
                      <H2>
                        <p>
                          {el?.validFrom
                            ?.slice(0, 10)
                            .replace("-", ".")
                            .replace("-", ".")}
                          ~
                          {el?.validUntil
                            ?.slice(0, 10)
                            .replace("-", ".")
                            .replace("-", ".")}
                          <br />
                          {today - start < 0
                            ? "시작 예정"
                            : end - today > 0
                            ? "진행중입니다."
                            : "마감입니다."}
                        </p>
                      </H2>
                    </BgLayer>
                    <img
                      className="prodImg"
                      src={el?.images ? el?.images[0] : "/icon_logo.png"}
                      alt="상품 이미지"
                    />
                    <PriceSale>{el?.discountRate}%</PriceSale>
                  </ProdImg>

                  <Bottom>
                    <Ul>
                      <li>
                        <View />
                        <span>{viewData?.fetchProductViewCount}</span>
                        <HeartOutlined />
                        <span>{likeData?.fetchLikeCount}</span>
                      </li>
                      <Time className="timer">
                        <Timer el={el} status={status} />
                      </Time>
                    </Ul>
                    <ProdName>
                      [{el?.quantity}개 한정] {el.name}
                    </ProdName>
                    <Price>
                      <span>{el?.originPrice?.toLocaleString()}원</span>
                      {el?.discountPrice?.toLocaleString()}원
                    </Price>
                  </Bottom>
                </Section>
              ))}
            </div>
            <Button onClick={onLoadMore}>
              <span>더보기</span>
            </Button>
          </Main>
        </Wrapper>
      </Container>
    </>
  );
}
