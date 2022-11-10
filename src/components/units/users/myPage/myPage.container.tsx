import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import MyPagePresenter from "./myPage.presenter";

export default function MyPageContainer() {
  const onChangePage = () => {};
  const [tab, setTab] = useState("1");

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
      />
    </MyPageLayoutContainer>
  );
}
