import { Dispatch, SetStateAction } from "react";

export type ISalesPresenterProps = {
  tab: string;
  sellHistory: any;
  onClickTab: (event: any) => void;
  setTab: Dispatch<SetStateAction<string>>;
  onClickPage: (currentPage: number) => void;
  HistoryCount: IfetchCountOfOrderByCreatorId;
  onChangeDate: (_: any, dateString: string[]) => void;
  onClickAccept: (id: number) => any;
};

type IfetchCountOfOrderByCreatorId = {
  fetchCountOfOrderByCreatorId: number;
};
