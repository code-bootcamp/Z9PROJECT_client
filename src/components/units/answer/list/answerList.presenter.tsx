import AnswerList from "./answerList";

export default function AnswerPresenter(P: any) {
  const { el } = P;

  return (
    <>
      <AnswerList el={el} />
    </>
  );
}
