import MyPageLayoutPresenter from "./myPageLayout.presenter";
import * as S from "./myPageLayout.styles";

type IMyPageLayoutProps = {
  children: JSX.Element;
};

export default function MyPageLayoutContainer(P: IMyPageLayoutProps) {
  const { children } = P;
  return (
    <S.Container>
      <MyPageLayoutPresenter />
      {children}
    </S.Container>
  );
}
