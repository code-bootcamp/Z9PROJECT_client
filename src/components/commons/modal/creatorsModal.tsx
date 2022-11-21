import {
  CloseCircleOutlined,
  EyeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import { useMoveToPage } from "../hooks/useMoveToPage";
import Timer from "../hooks/timerList";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCTS_BY_CREATORS } from "../../units/product/customList/cudtomList.queries";
import {
  FETCH_LIKE_COUNT,
  FETCH_PRODUCT_VIEW_COUNT,
} from "../../units/product/list/list.queries";

const Container = styled.section`
  width: 600px;
  height: 1000px;
  background-color: #f4f5f9;
  padding-bottom: 100px;
  position: fixed;
  overflow: auto;
  z-index: 99;
  right: 0;
  top: 0%;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 30px;
  }
`;

const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s1};
  font-family: ${styleSet.font.B};
  text-align: center;
  padding-top: 50px;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 10px;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Main = styled.main`
  margin-top: 50px;
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 60px;
    align-items: flex-end;
  }

  @media ${styleSet.breakePoints.mobile} {
    .infinite-scroll {
      flex-direction: column;
    }
  }
`;

const Section = styled.section`
  cursor: pointer;
  max-width: 100%;
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
  const { el, setModal, dom } = P;
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_PRODUCTS_BY_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { userId: String(el.id), page: 1 },
  });

  const { data: viewData } = useQuery(FETCH_PRODUCT_VIEW_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(dom?.id) },
  });
  const { data: likeData } = useQuery(FETCH_LIKE_COUNT, {
    fetchPolicy: "cache-first",
    variables: { productId: String(dom?.id) },
  });

  const start = new Date(el?.validFrom?.slice(0, 10)) as any;
  const today = new Date() as any;
  const end = new Date(el?.validUntil?.slice(0, 10)) as any;
  const status = today < start ? "start" : today < end ? "ing" : "end";

  const onClickClose = () => {
    setModal((prev: any) => !prev);
  };

  console.log(el, dom);

  return (
    <>
      <Container>
        <Close onClick={onClickClose} />
        <Wrapper>
          <H1>Z9 Creators List</H1>
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
          </Main>
        </Wrapper>
      </Container>
    </>
  );
}
