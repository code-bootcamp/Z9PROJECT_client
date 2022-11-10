import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import UseAuth from "../hooks/useAuth";
import MyPageLayoutPresenter from "./myPageLayout.presenter";
import Swal from "sweetalert2";
import * as S from "./myPageLayout.styles";
import { styleSet } from "../../../commons/styles/styleSet";

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

  const onClickMore = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: `${styleSet.colors.darkgray}`,
      cancelButtonColor: `${styleSet.colors.red}`,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        onClickLogout();
      }
    });
  };

  const onClickLogout = () => {
    logout();
    sessionStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <S.Container>
      <MyPageLayoutPresenter nowUrl={nowUrl} onClickMore={onClickMore} />
      {children}
    </S.Container>
  );
}
