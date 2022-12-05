import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ErrorModal } from "../modal/modal";

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      userType
      nickname
      point
    }
  }
`;

export default function UseCreator() {
  const router = useRouter();
  const { data: fetchUser } = useQuery(FETCH_USER);

  useEffect(() => {
    if (fetchUser?.fetchUser.userType === "COMMON_USER") {
      ErrorModal("크리에이터만 이용할 수 있습니다.");
      void router.push("/list/list");
    }
  }, [fetchUser]);
}
