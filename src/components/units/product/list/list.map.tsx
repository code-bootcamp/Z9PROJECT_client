import { useQuery } from "@apollo/client";
import ProductListPresenter from "./list.presenter";
import { FETCH_PRODUCT_VIEW_COUNT, FETCH_LIKE_COUNT } from "./list.queries";
import * as S from "./list.styles";

export default function ProductListMap(P: any) {
  const { onClickTab, tab, data, onLoadMore } = P;
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
            <div>
              {data?.fetchProductsByPages.map((el: any) => {
                const { data: viewData } = useQuery(FETCH_PRODUCT_VIEW_COUNT, {
                  fetchPolicy: "cache-first",
                  variables: { productId: String(el.id) },
                });
                const { data: likeData } = useQuery(FETCH_LIKE_COUNT, {
                  fetchPolicy: "cache-first",
                  variables: { productId: String(el.id) },
                });
                return (
                  <ProductListPresenter
                    key={el.id}
                    el={el}
                    viewData={viewData}
                    likeData={likeData}
                    tab={tab}
                  />
                );
              })}
            </div>
            <S.Button onClick={onLoadMore}>
              <span>더보기</span>
            </S.Button>
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
