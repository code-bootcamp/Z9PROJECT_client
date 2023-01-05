import { Dispatch, SetStateAction } from "react";

export type IPurchasePresenterProps = {
  tab: string;
  currentPage: number;
  HistoryCount: number;
  purchaseHistory: any;
  onClickTab: (event: any) => void;
  onClickRefund: (id: number) => any;
  setTab: Dispatch<SetStateAction<string>>;
  onClickPage: (currentPage: number) => void;
  onChangeDate: (_: any, dateString: string[]) => void;
};

export type IStylesProps = {
  tab?: string;
};
