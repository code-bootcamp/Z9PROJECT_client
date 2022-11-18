import InfiniteScroll from "react-infinite-scroller";
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
              loadMore={onLoadMore}
              hasMore={true}
              pageStart={0}
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
