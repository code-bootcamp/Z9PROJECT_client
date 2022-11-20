import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  FETCH_CREATORS,
  FETCH_CREATORS_BY_SNS,
  SEARCH_CREATORS,
} from "./cudtomList.queries";
import CustomListPresenter from "./customList.presenter";

export default function CustomListContainer() {
  const [input, setInput] = useState("");
  const [tab, setTab] = useState("default");
  const [list, setList] = useState(false);

  const { data: searchData } = useQuery(SEARCH_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { word: String(input) },
  });

  const { data: allCreatorData, fetchMore } = useQuery(FETCH_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { page: 1 },
  });

  const { data: optionalData } = useQuery(FETCH_CREATORS_BY_SNS, {
    variables: { snsType: String(tab === "youtube" ? "YOUTUBE" : "INSTAGRAM") },
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target.value);
    setTab("default");
  };

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
    console.log(tab);
  };

  const onLoadMore = () => {
    if (!allCreatorData) return;

    void fetchMore({
      variables: {
        page: Math.ceil(allCreatorData?.fetchCreators.length / 3) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchCreators)
          return { fetchCreators: [...prev.fetchCreators] };
        return {
          fetchCreators: [
            ...prev.fetchCreators,
            ...fetchMoreResult.fetchCreators,
          ],
        };
      },
    });
  };

  const onClickList = () => {
    setList(true);
  };
  return (
    <>
      <CustomListPresenter
        onChangeInput={onChangeInput}
        searchData={searchData}
        allCreatorData={allCreatorData}
        onClickTab={onClickTab}
        tab={tab}
        list={list}
        setList={setList}
        optionalData={optionalData}
        onLoadMore={onLoadMore}
        onClickList={onClickList}
      />
    </>
  );
}
