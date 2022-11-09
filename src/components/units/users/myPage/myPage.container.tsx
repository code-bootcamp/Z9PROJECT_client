import { useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import MyPagePresenter from "./myPage.presenter";

export default function MyPageContainer() {
  const onChangePage = () => {};

  return (
    <MyPageLayoutContainer>
      <MyPagePresenter onChangePage={onChangePage} />
    </MyPageLayoutContainer>
  );
}
