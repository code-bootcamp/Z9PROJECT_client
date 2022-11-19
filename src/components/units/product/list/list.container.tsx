import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorModal } from "../../../commons/modal/modal";
import ProductListMap from "./list.map";
import { FETCH_LIKE_COUNT, FETCH_PRODUCTS_BY_PAGES } from "./list.queries";

export default function ProductListContainer() {
  const router = useRouter();
  const [tab, setTab] = useState<any>("1");

  const { data, fetchMore } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    fetchPolicy: "network-only",
    variables: { page: 1 },
  });

  const { data: likeData } = useQuery(FETCH_LIKE_COUNT, {
    variables: { productId: String(router.query.useditemId) },
  });

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  const onLoadMore = () => {
    if (!data) return;

    try {
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
    } catch (error) {
      ErrorModal("불러올 게시물이 존재하지 않습니다.");
    }
  };
  return (
    <>
      <ProductListMap
        onClickTab={onClickTab}
        onLoadMore={onLoadMore}
        tab={tab}
        data={data}
        likeData={likeData}
      />
    </>
  );
}
