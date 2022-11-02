import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatorPresenter from "./creator.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schma = yup.object({
  id: yup.string().required("false"),
  password: yup.string().required("false"),
  passwordConfirm: yup.string().required("false"),
  phoneNumber: yup.string().required("false"),
  keyNumber: yup.number().required("false"),
  address: yup.string().required("false"),
  addressDetail: yup.string().required("false"),
  creator: yup.string().required("false"),
  introduce: yup.string().required("false"),
});

export default function CreatorRegisterContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
  });
  const [certifiFetchUrl, setCertifiFetchUrl] = useState<File>();
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFetchUrl, setProfileFetchUrl] = useState<File>();

  const onChangeCertifiFile = (file: File) => {
    setCertifiFetchUrl(file);
  };

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
      certifiFetchUrl={certifiFetchUrl}
      onChangeCertifiFile={onChangeCertifiFile}
      onChageProfileFile={onChageProfileFile}
      profilePreview={profilePreview}
      profileFetchUrl={profileFetchUrl}
    />
  );
}
