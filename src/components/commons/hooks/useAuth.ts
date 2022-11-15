import { useRouter } from "next/router";
import { useEffect } from "react";
import { ErrorModal } from "../modal/modal";

export default function UseAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      ErrorModal("로그인 후 이용할 수 있습니다.");
      void router.push("/users/login");
    }
  }, []);
}
