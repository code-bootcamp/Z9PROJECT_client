import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import SalesPresenter from "./sales.presenter";

export default function SalesContainer() {
  const onChangePage = () => {};
  const [tab, setTab] = useState("1");

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <MyPageLayoutContainer>
      <SalesPresenter
        onChangePage={onChangePage}
        setTab={setTab}
        tab={tab}
        onClickTab={onClickTab}
      />
    </MyPageLayoutContainer>
  );
}
