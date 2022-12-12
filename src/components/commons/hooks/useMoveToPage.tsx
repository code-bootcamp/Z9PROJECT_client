import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { hamburgerState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [, setHamburger] = useRecoilState(hamburgerState);

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  const onClickMobileToPage = (path: string) => () => {
    void router.push(path);
    setHamburger((prev) => !prev);
  };

  return {
    onClickMoveToPage,
    onClickMobileToPage,
  };
}
