import { Dispatch, SetStateAction } from "react";

export type IMyPagePresenterProps = {
  tab: string;
  fetchUser: any;
  PonintHistory: any;
  currentPage: number;
  onClickTab: (e: any) => void;
  historyCount: IFetchCountOfPointHistory;
  setTab?: Dispatch<SetStateAction<string>>;
  onClickPage: (currentPage: number) => void;
  onChangeDate: (_: any, dateString: string[]) => void;
};

type IFetchCountOfPointHistory = {
  fetchCountOfPointHistory: number;
};

export type IStylesProps = {
  tab?: string;
};
