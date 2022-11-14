import { Dispatch, SetStateAction } from "react";

export type IMyPagePresenterProps = {
  onClickPage: (currentPage: number) => void;
  setTab?: Dispatch<SetStateAction<string>>;
  tab: string;
  onClickTab: (e: any) => void;
  fetchUser: any;
  onChangeDate: (_: any, dateString: string[]) => void;
  historyCount: IFetchCountOfPointHistory;
  PonintHistory: any;
};

type IFetchCountOfPointHistory = {
  fetchCountOfPointHistory: number;
};

export type IStylesProps = {
  tab?: string;
};
