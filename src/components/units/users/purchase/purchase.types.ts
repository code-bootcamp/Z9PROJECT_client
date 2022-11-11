import { Dispatch, SetStateAction } from "react";

export type IPurchasePresenterProps = {
  onChangePage: () => void;
  setTab: Dispatch<SetStateAction<string>>;
  tab: string;
  onClickTab: (event: any) => void;
};

export type IStylesProps = {
  tab?: string;
};
