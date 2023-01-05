import { useState } from "react";
import PurchasePresenter from "./purchase.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CANCEL_ORDER_REFUND,
  FETCH_ORDER_BY_USER,
  FETCH_ORDER_BY_USER_COUNT,
} from "./purchase.queries";

export default function PurchaseContainer() {
  const [tab, setTab] = useState<string>("0");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [date, setDate] = useState<Date[] | undefined[]>([
    undefined,
    undefined,
  ]);
  const [cancelOrderRequest] = useMutation(CANCEL_ORDER_REFUND);
  const { data: purchaseHistory } = useQuery(FETCH_ORDER_BY_USER, {
    variables: {
      startDate: date[0],
      endDate: date[1],
      page: currentPage,
    },
  });
  const { data: HistoryCount } = useQuery(FETCH_ORDER_BY_USER_COUNT, {
    variables: {
      startDate: date[0],
      endDate: date[1],
    },
  });

  const onClickPage = (clickPage: number) => {
    setCurrentPage(clickPage);
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

  const onClickRefund = (id: number) => () => {
    void cancelOrderRequest({
      variables: {
        orderId: String(id),
      },
    });
  };

  return (
    <PurchasePresenter
      tab={tab}
      setTab={setTab}
      onClickTab={onClickTab}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onChangeDate={onChangeDate}
      onClickRefund={onClickRefund}
      purchaseHistory={purchaseHistory}
      HistoryCount={HistoryCount?.fetchCountOfOrderByUserId}
    />
  );
}
