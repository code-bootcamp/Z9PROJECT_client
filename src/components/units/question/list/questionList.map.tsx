import { useQuery } from "@apollo/client";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_COUNT_OF_QUESTIONS } from "../../product/detail/detail.queries";
import { FETCH_QUESTIONS } from "../question.queries";
import QuestionContainer from "./questionList.container";

export default function QuestionMap() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(router.query.useditemId), page },
  });

  const { data: countData } = useQuery(FETCH_COUNT_OF_QUESTIONS, {
    fetchPolicy: "cache-first",
    variables: { productId: String(router.query.useditemId) },
  });

  const onClickPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {data?.fetchQuestions.map((el: any) => (
        <QuestionContainer key={el.id} el={el} />
      ))}

      <Pagination
        size="small"
        total={countData?.fetchCountOfQuestions}
        onChange={onClickPage}
        showSizeChanger={false}
        defaultCurrent={1}
        defaultPageSize={5}
        style={{ textAlign: "center", marginTop: "50px" }}
      />
    </>
  );
}
