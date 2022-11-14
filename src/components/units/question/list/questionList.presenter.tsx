import { useQuery } from "@apollo/client";
import { FETCH_QUESTIONS } from "../question.queries";
import QuestionList from "./questionList";

export default function QuestionPresenter(P: any) {
  const { onClickAnswer, isTrue } = P;
  const { data } = useQuery(FETCH_QUESTIONS);

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
