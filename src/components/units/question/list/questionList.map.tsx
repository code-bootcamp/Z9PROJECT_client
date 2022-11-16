import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_QUESTIONS } from "../question.queries";
import QuestionContainer from "./questionList.container";

export default function QuestionMap() {
  const router = useRouter();
  const { data } = useQuery(FETCH_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: { productId: String(router.query.useditemId) },
  });

  return (
    <>
      {data?.fetchQuestions.map((el: any) => (
        <QuestionContainer key={el.id} el={el} />
      ))}
    </>
  );
}
