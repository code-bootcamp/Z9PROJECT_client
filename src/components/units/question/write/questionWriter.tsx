import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import { CREATE_QUESTION, FETCH_USER } from "../question.queries";
import * as S from "../question.styles";

export default function QuestionWriter() {
  const router = useRouter();
  const [createQuestion] = useMutation(CREATE_QUESTION);
  const { data: userData } = useQuery(FETCH_USER);
  const [question, setQuestion] = useState("");

  const onChangeQuestion = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const onClickQuestion = async () => {
    if (question === "") return;

    try {
      await createQuestion({
        variables: {
          createQuestionInput: {
            question,
            userId: String(userData?.fetchUser.id),
            productId: String(router.query.useditemId),
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchQuestions: (prev) => {
                return [data.createQuestion, ...prev];
              },
            },
          });
        },
      });
      SuccessModal("질문이 등록되었습니다.");
    } catch (error) {
      ErrorModal(error as string);
    }
    setQuestion("");
  };

  return (
    <>
      <S.Write>
        <S.Textarea>
          <textarea
            placeholder="질문을 입력해주세요."
            onChange={onChangeQuestion}
            value={question}
          ></textarea>
          <button onClick={onClickQuestion}>등록</button>
        </S.Textarea>
      </S.Write>
    </>
  );
}
