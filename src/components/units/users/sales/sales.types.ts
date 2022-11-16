import { Dispatch, SetStateAction } from "react";

export type ISalesPresenterProps = {
  onChangePage: () => void;
  setTab: Dispatch<SetStateAction<string>>;
  tab: string;
  onClickTab: (event: any) => void;
};
