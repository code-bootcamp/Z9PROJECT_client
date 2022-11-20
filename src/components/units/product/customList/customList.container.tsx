import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { SEARCH_CREATORS } from "./cudtomList.queries";
import CustomListPresenter from "./customList.presenter";

export default function CustomListContainer() {
  const [input, setInput] = useState("");

  const { data } = useQuery(SEARCH_CREATORS, {
    fetchPolicy: "cache-first",
    variables: { word: String(input) },
  });
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target.value);
  };

  const onClickInput = () => {};
  console.log(data);

  return (
    <>
      <CustomListPresenter onChangeInput={onChangeInput} data={data} />
    </>
  );
}
