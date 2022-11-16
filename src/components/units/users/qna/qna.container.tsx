import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USER } from "../edit/edit.queries";
import QnaPresenterCommon from "./qna.presenterCommon";
import QnaPresenterCreator from "./qna.presenterCreator";
import { FETCH_MY_QUESTIONS, FETCH_PRODUCTS_BY_CREATOR } from "./qna.queries";

export default function QnaContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const { data: fetchProductsByCreator } = useQuery(FETCH_PRODUCTS_BY_CREATOR, {
    variables: {
      page: currentPage,
    },
  });
  const { data: fetchMyQuestions } = useQuery(FETCH_MY_QUESTIONS);

  const onClickPage = (id: number) => {
    setCurrentPage(id);
  };

  console.log(fetchMyQuestions);

  return (
    <>
      {fetchUser?.fetchUser.userType === "CREATOR" ? (
        <QnaPresenterCreator
          fetchProductsByCreator={fetchProductsByCreator}
          onClickPage={onClickPage}
          currentPage={currentPage}
        />
      ) : (
        <QnaPresenterCommon fetchMyQuestions={fetchMyQuestions} />
      )}
    </>
  );
}
