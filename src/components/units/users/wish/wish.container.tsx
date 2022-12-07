import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import WishPresenter from "./wish.presenter";
import { FETCH_ALL_LIKES } from "./wish.queries";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";

export default function WishContainer() {
  const [morePage, setMorePage] = useState<number>(8);
  const [presentArray, setPresentArray] = useState<number[]>([]);
  const { data: fetchAllLikes } = useQuery(FETCH_ALL_LIKES);

  useEffect(() => {
    const slice = fetchAllLikes?.fetchAllLikes.slice(0, 8);
    setPresentArray(slice);
  }, [fetchAllLikes]);

  const likeLength = fetchAllLikes?.fetchAllLikes.length;
  const totalPage = likeLength / 8 === 0 ? 1 : Math.ceil(likeLength / 8);
  const presentPage = morePage / 8;

  const onClickMore = () => {
    const presentNumber = morePage + 8;
    if (presentNumber / 8 > totalPage) return;
    setMorePage(presentNumber);
    const slice = fetchAllLikes?.fetchAllLikes.slice(0, presentNumber);
    setPresentArray(slice);
  };

  return (
    <MyPageLayoutContainer>
      <WishPresenter
        totalPage={totalPage}
        onClickMore={onClickMore}
        presentPage={presentPage}
        presentArray={presentArray}
      />
    </MyPageLayoutContainer>
  );
}
