import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_QUESTIONS } from "../question.queries";
import QuestionList from "./questionList";

export default function QuestionPresenter(P: any) {
  const router = useRouter();
  const { onClickAnswer, isTrue } = P;
  const { data } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(router.query.useditemId) },
  });

  return (
    <>
      {data?.fetchQuestions.map((el: any) => (
        <QuestionList
          key={el.id}
          el={el}
          data={data}
          isTrue={isTrue}
          onClickAnswer={onClickAnswer}
        />
      ))}
    </>
  );
}
