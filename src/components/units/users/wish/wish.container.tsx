import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import MyPageLayoutContainer from "../../../commons/myPageLayout/myPageLayout.container";
import WishPresenter from "./wish.presenter";
import { FETCH_ALL_LIKES } from "./wish.queries";

export default function WishContainer() {
  const { data: fetchAllLikes } = useQuery(FETCH_ALL_LIKES);
  const [morePage, setMorePage] = useState(8);
  const [presentArray, setPresentArray] = useState<any>([]);

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
        onClickMore={onClickMore}
        totalPage={totalPage}
        presentPage={presentPage}
        presentArray={presentArray}
      />
    </MyPageLayoutContainer>
  );
}
