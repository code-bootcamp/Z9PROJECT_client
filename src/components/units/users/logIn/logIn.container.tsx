import * as yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import LogInPresenter from "./logIn.presenter";
import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorModal } from "../../../commons/modal/modal";
import { accessTokenState } from "../../../../commons/store";

const schma = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup.string().required("필수"),
});

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function LogInContainer() {
  const [login] = useMutation(LOGIN);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {}, []);

  const onSubmit = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.login;
      if (!accessToken) {
        ErrorModal("로그인 실패. 다시 시도 바랍니다.");
        return;
      }

      setAccessToken(accessToken);
      sessionStorage.setItem("accessToken", accessToken);
      void router.push("/users/mypage");
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  return (
    <>
      <LogInPresenter
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
