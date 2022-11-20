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

  // const { data: creatorData } = useQuery(FETCH_PRODUCTS_BY_CREATORS, {
  //   fetchPolicy: "cache-first",
  //   variables: { userId: String(), page: 1 },
  // });

  const { data: searchData } = useQuery(SEARCH_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { word: String(input) },
  });

  const { data: allCreatorData } = useQuery(FETCH_CREATORS);

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
  // console.log(allCreatorData);
  return (
    <>
      <CustomListPresenter
        onChangeInput={onChangeInput}
        searchData={searchData}
        allCreatorData={allCreatorData}
        onClickTab={onClickTab}
        tab={tab}
        optionalData={optionalData}
      />
    </>
  );
}
