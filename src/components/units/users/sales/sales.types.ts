import { Dispatch, SetStateAction } from "react";

export type ISalesPresenterProps = {
  tab: string;
  sellHistory: any;
  currentPage: number;
  HistoryCount: number;
  onClickTab: (event: any) => void;
  onClickAccept: (id: number) => any;
  setTab: Dispatch<SetStateAction<string>>;
  onClickPage: (currentPage: number) => void;
  onChangeDate: (_: any, dateString: string[]) => void;
};
