import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USER } from "../edit/edit.queries";
import QnaPresenterCommon from "./qna.presenterCommon";
import QnaPresenterCreator from "./qna.presenterCreator";
import {
  FETCH_MY_QUESTIONS,
  FETCH_PRODUCTS_BY_CREATOR,
  FETCH_PRODUCT_BY_CREATOR_COUNT,
} from "./qna.queries";

export default function QnaContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const { data: fetchProductsByCreator } = useQuery(FETCH_PRODUCTS_BY_CREATOR, {
    variables: {
      page: currentPage,
      userId: String(fetchUser?.fetchUser.id),
    },
  });
  const { data: fetchMyQuestions } = useQuery(FETCH_MY_QUESTIONS);
  const { data: listCount } = useQuery(FETCH_PRODUCT_BY_CREATOR_COUNT);

  console.log(fetchProductsByCreator);
  const onClickPage = (clickPage: number) => {
    setCurrentPage(clickPage);
  };

  return (
    <>
      {fetchUser?.fetchUser.userType === "CREATOR" ? (
        <QnaPresenterCreator
          fetchProductsByCreator={fetchProductsByCreator}
          onClickPage={onClickPage}
          currentPage={currentPage}
          listCount={listCount?.countProductByCreator}
        />
      ) : (
        <QnaPresenterCommon fetchMyQuestions={fetchMyQuestions} />
      )}
    </>
  );
}
