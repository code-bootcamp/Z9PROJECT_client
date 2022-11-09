import * as S from "../answer.styles";

export default function AnswerList() {
  return (
    <>
      <S.User>
        <S.AnswerBox>
          <S.Div>
            <S.Contents>
              이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여??
            </S.Contents>
            <S.Text>
              <S.AnswerContents>
                <span>답변</span>
                어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여어쩌라구여
              </S.AnswerContents>
            </S.Text>
            <S.Answer>
              <S.UserInfo>Leo J</S.UserInfo>
              <S.UserInfo>2022.11.03</S.UserInfo>
              <button>수정</button>
              <button>삭제</button>
            </S.Answer>
          </S.Div>
        </S.AnswerBox>
      </S.User>
    </>
  );
}
