import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import SalesPresenter from "./sales.presenter";

export default function SalesContainer() {
  const onChangePage = () => {};

  return (
    <MyPageLayoutContainer>
      <SalesPresenter onChangePage={onChangePage} />
    </MyPageLayoutContainer>
  );
}
