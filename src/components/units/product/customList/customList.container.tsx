import { useQuery } from "@apollo/client";
import { FETCH_CREATORS } from "./cudtomList.queries";
import CustomListPresenter from "./customList.presenter";

export default function CustomListContainer() {
  const { data } = useQuery(FETCH_CREATORS, {
    fetchPolicy: "cache-first",
    // variables:{userId:}
  });
  return (
    <>
      <CustomListPresenter />
    </>
  );
}
