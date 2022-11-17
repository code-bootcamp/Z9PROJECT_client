import { Dispatch, SetStateAction } from "react";

export type IPurchasePresenterProps = {
  tab: string;
  purchaseHistory: any;
  onClickTab: (event: any) => void;
  onChangeDate: (date: any) => void;
  setTab: Dispatch<SetStateAction<string>>;
  HistoryCount: IfetchCountOfOrderByUserId;
  onClickPage: (currentPage: number) => void;
  onClickRefund: (id: number) => any;
};

export type IStylesProps = {
  tab?: string;
};

type IfetchCountOfOrderByUserId = {
  fetchCountOfOrderByUserId: number;
};
