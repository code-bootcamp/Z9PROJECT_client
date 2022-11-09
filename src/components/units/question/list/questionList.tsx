import AnswerList from "../../answer/list/answerList";
import * as S from "../question.styles";

export default function QuestionList() {
  return (
    <>
      <S.User>
        <div>
          <S.Div>
            <img src="/img_user.jpeg" alt="유저 이미지" />
            <S.Check>답변완료</S.Check>
            <S.Contents>
              이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거
              좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거
              좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거
              좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거
              좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거
              좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거
              좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거
              좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거
              좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거
              좋아여??이거 좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거
              좋아여??이거 좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거
              좋아여??이거 좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거
              좋아여?? 이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여??
            </S.Contents>
            <S.UserInfo>김빵빵</S.UserInfo>
            <S.UserInfo>2022.11.03</S.UserInfo>
            <S.Answer>
              <p>답변</p>
              <p>수정</p>
              <p>삭제</p>
            </S.Answer>
          </S.Div>
          <AnswerList />
        </div>

        <S.Div>
          <img src="/img_user.jpeg" alt="유저 이미지" />
          <S.Check>답변대기</S.Check>
          <S.Contents>
            Q.이거 좋아여??이거 좋아여??이거 좋아여??이거 좋아여??
          </S.Contents>
          <S.UserInfo>김빵빵</S.UserInfo>
          <S.UserInfo>2022.11.03</S.UserInfo>
          <S.Answer>
            <p>답변</p>
            <p>수정</p>
            <p>삭제</p>
          </S.Answer>
        </S.Div>
      </S.User>
    </>
  );
}
