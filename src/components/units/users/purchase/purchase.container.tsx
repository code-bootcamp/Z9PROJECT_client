import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import PurchasePresenter from "./purchase.presenter";

export default function PurchaseContainer() {
  const onChangePage = () => {};

  return (
    <MyPageLayoutContainer>
      <PurchasePresenter onChangePage={onChangePage} />
    </MyPageLayoutContainer>
  );
}
