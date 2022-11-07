import * as S from "../answer.styles";

export default function AnswerWriter() {
  return (
    <>
      <S.Write>
        <S.User>
          <img src="/img_user.jpeg" alt="유저 이미지" />
          <S.UserInfo>김빵빵</S.UserInfo>
        </S.User>
        <S.Textarea>
          <textarea placeholder="답변을 입력해주세요."></textarea>
          <button>취소</button>
          <button>등록</button>
        </S.Textarea>
      </S.Write>
    </>
  );
}
