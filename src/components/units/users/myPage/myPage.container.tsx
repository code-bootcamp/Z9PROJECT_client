import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import MyPagePresenter from "./myPage.presenter";

export default function MyPageContainer() {
  return (
    <MyPageLayoutContainer>
      <MyPagePresenter />
    </MyPageLayoutContainer>
  );
}
