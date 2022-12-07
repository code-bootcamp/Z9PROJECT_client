import * as S from "./password.styles";
import { IPasswordPresenterProps } from "./password.types";
import Input01 from "../../../commons/input/input01/input01";

export default function PasswordPresenter(P: IPasswordPresenterProps) {
  const { register, handleSubmit, formState, onClickUpdate } = P;
  return (
    <S.Container>
      <S.SubTitle>비밀번호 변경</S.SubTitle>
      <S.Form onSubmit={handleSubmit(onClickUpdate)}>
        <S.RowWrapper className="line">
          <Input01
            type="password"
            placeholder="변경할 비밀번호를 입력하세요."
            register={register("password")}
            edit={true}
            error={formState.errors.password?.message}
          />
          <Input01
            type="password"
            placeholder="변경할 비밀번호를 한 번 더 입력하세요."
            register={register("passwordConfirm")}
            edit={true}
            error={formState.errors.passwordConfirm?.message}
          />
        </S.RowWrapper>
        <S.UpdateBtn>
          <span>비밀번호 변경</span>
        </S.UpdateBtn>
      </S.Form>
    </S.Container>
  );
}
