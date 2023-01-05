import { useState } from "react";
import { useQuery } from "@apollo/client";
import MyPagePresenter from "./myPage.presenter";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import {
  FETCH_USER,
  POINT_HISTORY,
  POINT_HISTORY_COUNT,
} from "./mypage.queries";

export default function MyPageContainer() {
  const [tab, setTab] = useState<string>("0");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [date, setDate] = useState<Date[] | undefined[]>([
    undefined,
    undefined,
  ]);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const { data: historyCount } = useQuery(POINT_HISTORY_COUNT, {
    variables: {
      startDate: date[0],
      endDate: date[1],
    },
  });
  const { data: PonintHistory } = useQuery(POINT_HISTORY, {
    variables: {
      startDate: date[0],
      endDate: date[1],
      page: currentPage,
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

  return (
    <MyPageLayoutContainer>
      <MyPagePresenter
        tab={tab}
        fetchUser={fetchUser}
        onClickTab={onClickTab}
        currentPage={currentPage}
        onClickPage={onClickPage}
        onChangeDate={onChangeDate}
        historyCount={historyCount}
        PonintHistory={PonintHistory}
      />
    </MyPageLayoutContainer>
  );
}
