import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatorPresenter from "./user.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schma = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup.string().required("필수"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 같지 않습니다.")
    .required("필수"),
  phoneNumber: yup.string().required("필수"),
  keyNumber: yup.string().required("필수"),
  zipcode: yup.string().required("필수"),
  address: yup.string().required("필수"),
  addressDetail: yup.string(),
});

export default function UserRegisterContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFetchUrl, setProfileFetchUrl] = useState<File>();

  const onChageProfileFile = (url: string, file: File) => {
    setProfilePreview(url);
    setProfileFetchUrl(file);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CreatorPresenter
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChageProfileFile={onChageProfileFile}
      profilePreview={profilePreview}
      profileFetchUrl={profileFetchUrl}
    />
  );
}
