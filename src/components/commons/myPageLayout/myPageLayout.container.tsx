import { useRouter } from "next/router";
import MyPageLayoutPresenter from "./myPageLayout.presenter";
import * as S from "./myPageLayout.styles";

type IMyPageLayoutProps = {
  children: JSX.Element;
};

export default function MyPageLayoutContainer(P: IMyPageLayoutProps) {
  const { children } = P;
  const router = useRouter();
  const nowUrl = router.asPath;
  console.log(nowUrl.length);

  return (
    <S.Container>
      <MyPageLayoutPresenter nowUrl={nowUrl} />
      {children}
    </S.Container>
  );
}
