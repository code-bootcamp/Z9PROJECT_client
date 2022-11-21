import { Dispatch, SetStateAction } from "react";

export type IPurchasePresenterProps = {
  tab: string;
  purchaseHistory: any;
  onClickTab: (event: any) => void;
  setTab: Dispatch<SetStateAction<string>>;
  currentPage: number;
  HistoryCount: number;
  onClickPage: (currentPage: number) => void;
  onClickRefund: (id: number) => any;
  onChangeDate: (_: any, dateString: string[]) => void;
};

export type IStylesProps = {
  tab?: string;
};
