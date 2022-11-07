import { useForm } from "react-hook-form";
import LogInPresenter from "./logIn.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schma = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup.string().required("필수"),
});

export default function LogInContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
