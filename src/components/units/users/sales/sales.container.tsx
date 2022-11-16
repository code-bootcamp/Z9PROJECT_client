import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import SalesPresenter from "./sales.presenter";
import {
  CANCEL_ORDER_ACCEPT,
  FETCH_ORDER_BY_CREATOR,
  FETCH_ORDER_BY_CREATOR_COUNT,
} from "./sales.queries";

export default function SalesContainer() {
  const [tab, setTab] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState<Date[] | undefined[]>([
    undefined,
    undefined,
  ]);
  const [cancelOrderAccept] = useMutation(CANCEL_ORDER_ACCEPT);

  const { data: sellHistory } = useQuery(FETCH_ORDER_BY_CREATOR, {
    variables: {
      startDate: date[0],
      endDate: date[1],
      page: currentPage,
    },
  });
  const { data: HistoryCount } = useQuery(FETCH_ORDER_BY_CREATOR_COUNT, {
    variables: {
      startDate: date[0],
      endDate: date[1],
    },
  });

  const onClickPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const onChangeDate = (date: any) => {
    setDate([date[0]._d, date[1]._d]);
  };

  const onClickTab = (e: any) => {
    setTab(e?.currentTarget.id);
    const regex = /[^0-9]/g;
    const gap = e.currentTarget.innerText.replace(regex, "");
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const endDate = d;
    const startDate = new Date(year, month - gap, day);
    setDate([startDate, endDate]);
  };

  const onClickAccept = (id: number) => () => {
    console.log(id);
    cancelOrderAccept({
      variables: {
        orderId: String(id),
      },
    });
  };

  const onClickSearch = () => {};

  return (
    <MyPageLayoutContainer>
      <SalesPresenter
        tab={tab}
        setTab={setTab}
        onClickTab={onClickTab}
        onClickPage={onClickPage}
        onChangeDate={onChangeDate}
        sellHistory={sellHistory}
        HistoryCount={HistoryCount}
        onClickAccept={onClickAccept}
      />
    </MyPageLayoutContainer>
  );
}
