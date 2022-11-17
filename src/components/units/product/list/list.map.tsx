import Search from "antd/lib/transfer/search";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductListPresenter from "./list.presenter";
import * as S from "./list.styles";

export default function ProductListMap(P: any) {
  const { onClickTab, tab, data, onLoadMore, length } = P;

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.H1>리스트</S.H1>
          <S.SearchBox tab={tab}>
            <ul>
              <li id="1" onClick={onClickTab}>
                전체
              </li>
              <li id="2" onClick={onClickTab}>
                진행예정
              </li>
              <li id="3" onClick={onClickTab}>
                진행중
              </li>
              <li id="4" onClick={onClickTab}>
                종료
              </li>
            </ul>
            <Search placeholder="검색어를 입력해주세요." />
          </S.SearchBox>
          <S.Main>
            <InfiniteScroll
              className="infinite-scroll"
              dataLength={length}
              loader={<h1>Loading...</h1>}
              endMessage={<h1>야 끝났어 더 내리지마;;</h1>}
              next={onLoadMore}
              hasMore={true}
            >
              {data?.fetchProductsByPages.map((el: any) => (
                <ProductListPresenter key={el.id} el={el} />
              ))}
            </InfiniteScroll>
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
