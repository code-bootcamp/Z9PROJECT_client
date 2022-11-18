import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductListPresenter from "./list.presenter";
import * as S from "./list.styles";

export default function ProductListMap(P: any) {
  const { onClickTab, tab, data, onLoadMore, length } = P;
  const btnArray = ["전체", "진행예정", "진행중", "종료"];

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.H1>리스트</S.H1>
          <S.SearchBox tab={tab}>
            <ul>
              {btnArray.map((el: any, i: number) => (
                <li id={String(i + 1)} onClick={onClickTab} key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </S.SearchBox>
          <S.Main>
            <InfiniteScroll
              className="infinite-scroll"
              dataLength={length}
              loader={
                <S.Scroll>
                  <LoadingOutlined />
                </S.Scroll>
              }
              endMessage={<h1>로드 할 상품이 없습니다.</h1>}
              next={onLoadMore}
              hasMore={true}
            >
              {data?.fetchProductsByPages.map((el: any) => (
                <ProductListPresenter key={el.id} el={el} tab={tab} />
              ))}
            </InfiniteScroll>
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
