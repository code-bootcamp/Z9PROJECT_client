import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProductListMap from "./list.map";
import {
  COUNT_PRODUCT_BY_STATUS,
  FETCH_PRODUCTS_BY_PAGES,
} from "./list.queries";

export default function ProductListContainer() {
  const [tab, setTab] = useState<any>("1");

  const { data, fetchMore } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    fetchPolicy: "cache-first",
    variables: { page: 1 },
  });
  const { data: listData } = useQuery(COUNT_PRODUCT_BY_STATUS, {
    variables: { type: "ALL", option: "INCLUDE_SOLDED_OUT" },
  });

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchProductsByPages.length / 4) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchProductsByPages)
          return { fetchProductsByPages: [...prev.fetchProductsByPages] };
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
        onClickTab={onClickTab}
        onLoadMore={onLoadMore}
        tab={tab}
        data={data}
        listData={listData}
      />
    </>
  );
}
