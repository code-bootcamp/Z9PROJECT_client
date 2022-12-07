import { useQuery } from "@apollo/client";
import QuestionContainer from "../../question/list/questionList.container";
import { FETCH_ORDER_BY_CREATOR } from "./qna.queries";

export default function QnaItemList() {
  const { data: fetchOrdersByCreatorId } = useQuery(FETCH_ORDER_BY_CREATOR, {
    variables: {
      page: 1,
    },
  });

  return (
    <>
      {fetchOrdersByCreatorId?.fetchOrdersByCreatorId.map((el: any) => (
        <QuestionContainer key={el.id} el={el} />
      ))}
    </>
  );
}
