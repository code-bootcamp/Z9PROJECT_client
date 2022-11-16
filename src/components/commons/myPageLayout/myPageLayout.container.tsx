import Swal from "sweetalert2";
import UseAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import * as S from "./myPageLayout.styles";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER, LOGOUT } from "./myPageLayout.queires";
import { styleSet } from "../../../commons/styles/styleSet";
import { IMyPageLayoutProps } from "./myPageLayout.types";
import MyPageLayoutPresenter from "./myPageLayout.presenter";

export default function MyPageLayoutContainer(P: IMyPageLayoutProps) {
  const { children } = P;
  UseAuth();
  const [logout] = useMutation(LOGOUT);
  const router = useRouter();
  const nowUrl = router.asPath;
  const { data: fetchUser } = useQuery(FETCH_USER);

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
      <MyPageLayoutPresenter
        nowUrl={nowUrl}
        onClickMore={onClickMore}
        fetchUser={fetchUser}
      />
      {children}
    </S.Container>
  );
}
