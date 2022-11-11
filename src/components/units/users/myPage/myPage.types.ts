import { Dispatch, SetStateAction } from "react";

export type IMyPagePresenterProps = {
  onChangePage: () => void;
  setTab: Dispatch<SetStateAction<string>>;
  tab: string;
  onClickTab: (event: any) => void;
  fetchUser: any;
};

export type IStylesProps = {
  tab?: string;
};
