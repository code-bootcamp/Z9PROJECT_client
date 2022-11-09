import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import UseAuth from "../hooks/useAuth";
import MyPageLayoutPresenter from "./myPageLayout.presenter";
import * as S from "./myPageLayout.styles";

type IMyPageLayoutProps = {
  children: JSX.Element;
};

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function MyPageLayoutContainer(P: IMyPageLayoutProps) {
  const { children } = P;
  UseAuth();

  const [logout] = useMutation(LOGOUT);
  const router = useRouter();
  const nowUrl = router.asPath;

  const onClickLogout = () => {
    logout();
    sessionStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <S.Container>
      <MyPageLayoutPresenter nowUrl={nowUrl} onClickLogout={onClickLogout} />
      {children}
    </S.Container>
  );
}
