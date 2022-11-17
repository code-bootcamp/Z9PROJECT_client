import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProductListMap from "./list.map";
import { FETCH_PRODUCTS_BY_PAGES } from "./list.queries";
import { debounce } from "lodash";
import _ from "lodash";

export default function ProductListContainer() {
  const [tab, setTab] = useState<any>("1");
  const [view, setView] = useState<any>(false);

  const { data, fetchMore, refetch } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    fetchPolicy: "network-only",
    variables: { page: 1 },
  });

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
    if (data.fetchProductsByPages.map((el: any) => el.validFrom < new Date()))
      setView();
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchProductsByPages.length / 4) + 1 },
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

  const getDebounce = _.debounce((value) => {
    void refetch({ page: 1 });
  }, 700);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <ProductListMap
        tab={tab}
        onClickTab={onClickTab}
        data={data}
        onLoadMore={onLoadMore}
        onChangeSearch={onChangeSearch}
      />
    </>
  );
}