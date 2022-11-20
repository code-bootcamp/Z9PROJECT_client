import * as yup from "yup";
import { useForm } from "react-hook-form";
import PasswordPresenter from "./password.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import { UPDATE_PASSWORD } from "./password.queries";

const schema = yup.object({
  password: yup.string().required("필수"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 같지 않습니다.")
    .required("필수"),
});

export default function PasswordContainer() {
  const [updatePassword] = useMutation(UPDATE_PASSWORD);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickUpdate = async (data: any) => {
    const { password } = data;
    try {
      const result = await updatePassword({
        variables: {
          password,
        },
      });
      SuccessModal(
        `${String(result.data.updatePassword.nickname)}님 비밀번호 변경 완료!`
      );
      setValue("password", "");
      setValue("passwordConfirm", "");
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <PasswordPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
    />
  );
}
