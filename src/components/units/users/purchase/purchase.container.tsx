import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import PurchasePresenter from "./purchase.presenter";

export default function PurchaseContainer() {
  const onChangePage = () => {};
  const [tab, setTab] = useState("1");

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <PurchasePresenter
      onChangePage={onChangePage}
      setTab={setTab}
      tab={tab}
      onClickTab={onClickTab}
    />
  );
}
