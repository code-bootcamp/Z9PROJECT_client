import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProductListMap from "./list.map";
import { FETCH_PRODUCTS_BY_PAGES } from "./list.queries";

export default function ProductListContainer() {
  const [tab, setTab] = useState<any>("1");
  const [length, setLength] = useState(0);

  const { data, fetchMore } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    fetchPolicy: "network-only",
    variables: { page: 1 },
  });

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  const onLoadMore = () => {
    if (!data) return;
    setLength(data?.fetchProductsByPages.length);
    console.log(length);
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchProductsByPages.length / 4) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchProductsByPages) {
          return { fetchProductsByPages: [...prev.fetchProductsByPages] };
        }
        return {
          fetchProductsByPages: [
            ...prev.fetchProductsByPages,
            ...fetchMoreResult.fetchProductsByPages,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductListMap
        length={length}
        tab={tab}
        onClickTab={onClickTab}
        data={data}
        onLoadMore={onLoadMore}
      />
    </>
  );
}
