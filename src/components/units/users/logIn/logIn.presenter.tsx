import Link from "next/link";
import * as S from "./logIn.styles";
import { ILogInPresenterProps } from "./logIn.types";
import Input01 from "../../../commons/input/input01/input01";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function LogInPresenter(P: ILogInPresenterProps) {
  const { onSubmit, register, handleSubmit, formState } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M968.48 1012.16 58.96 1012.16c-8.832 0-16-7.152-16-16l0-90.112c0-178.272 101.168-340.896 259.6-420.496-47.152-52.208-72.88-118.72-72.88-189.664 0-156.624 127.424-284.048 284.064-284.048 156.608 0 284.016 127.424 284.016 284.048 0 70.944-25.696 137.456-72.848 189.664 158.4 79.616 259.568 242.24 259.568 420.496l0 90.112C984.48 1005.008 977.328 1012.16 968.48 1012.16zM74.96 980.16 952.48 980.16l0-74.112c0-173.232-102.512-330.624-261.168-400.992-4.896-2.176-8.368-6.64-9.28-11.92s0.88-10.656 4.768-14.336c50.928-48.192 78.976-113.152 78.976-182.928 0-138.992-113.04-252.048-252.016-252.048-138.992 0-252.064 113.072-252.064 252.048 0 69.76 28.048 134.72 79.008 182.912 3.888 3.68 5.664 9.056 4.768 14.336s-4.384 9.744-9.28 11.92C177.488 575.408 74.96 732.8 74.96 906.048L74.96 980.16z" />
          </S.Svg>
          <Input01
            type="text"
            placeholder="이메일을 입력하세요."
            register={register("email")}
            error={formState.errors.email?.message}
          />
        </S.Label>
        <S.Label>
          <S.Svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M522.368 10.3936c-144.1536 0-252.9024 114.6624-252.9024 266.752l0 93.7472-8.192 0c-75.776 0-137.4464 63.3088-137.4464 141.0816l0 360.5248c0 77.7728 61.6704 141.1072 137.4464 141.1072l524.3392 0c75.776 0 137.4464-63.3344 137.4464-141.1072L923.0592 511.9744c0-77.7728-61.6704-141.0816-137.4464-141.0816l-4.5056 0c-1.2032-0.4352-2.4576-0.5632-3.712-0.768l0-93.0048C777.4464 125.0816 667.8016 10.3936 522.368 10.3936L522.368 10.3936zM522.368 52.224c123.52 0 213.248 94.592 213.248 224.9472l0 92.3648L311.3216 369.536l0-92.3648C311.3216 146.816 400.0768 52.224 522.368 52.224L522.368 52.224zM881.28 511.9744l0 360.5248c0 54.7328-42.9312 99.2768-95.616 99.2768L261.2992 971.776c-52.736 0-95.616-44.544-95.616-99.2768L165.6832 511.9744c0-54.7072 42.88-99.2512 95.616-99.2512l50.0224 0 0-1.3824 424.2688 0 0 1.3824 50.048 0C838.3488 412.7488 881.28 457.2672 881.28 511.9744L881.28 511.9744zM881.28 511.9744M518.8608 568.0384c-33.5104 0-60.672 28.0064-60.672 62.5664 0 23.1168 12.2368 43.3408 30.336 54.1696l0 102.1952c0 17.2544 13.568 31.3088 30.336 31.3088 16.7424 0 30.336-14.0544 30.336-31.3088L549.1968 684.8c18.0992-10.8288 30.3104-31.0272 30.3104-54.1696C579.456 596.0704 552.32 568.0384 518.8608 568.0384L518.8608 568.0384zM518.8608 568.0384" />
          </S.Svg>
          <Input01
            type="password"
            placeholder="비밀번호를 입력하세요."
            register={register("password")}
            error={formState.errors.password?.message}
          />
        </S.Label>
        <S.LogInBtn>로그인</S.LogInBtn>
      </S.Form>
      <S.SignUpWrapper>
        아직 회원이 아니신가요?
        <button onClick={onClickMoveToPage("/users/signupintro")}>
          회원가입
        </button>
      </S.SignUpWrapper>
      <S.SnsLoginWrapper>
        <S.SubTitle>SNS 계정으로 간편 로그인/회원가입</S.SubTitle>
        <S.WrapperInner>
          <Link href={"/"}>
            <a>
              <img src="/users/user/icon-kakao.svg" />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <img src="/users/user/icon_google.svg" />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <img src="/users/user/icon_naver.svg" />
            </a>
          </Link>
        </S.WrapperInner>
      </S.SnsLoginWrapper>
    </S.Container>
  );
}
