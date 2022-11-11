import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import MyPagePresenter from "./myPage.presenter";
import { FETCH_USER } from "./myPage.queries";

export default function MyPageContainer() {
  const [tab, setTab] = useState("1");
  const { data: fetchUser } = useQuery(FETCH_USER);

  const onChangePage = () => {};

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <MyPageLayoutContainer>
      <MyPagePresenter
        onChangePage={onChangePage}
        setTab={setTab}
        tab={tab}
        onClickTab={onClickTab}
        fetchUser={fetchUser}
      />
    </MyPageLayoutContainer>
  );
}
