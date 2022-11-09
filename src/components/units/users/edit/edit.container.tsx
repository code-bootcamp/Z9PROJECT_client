import { useState } from "react";
import { useForm } from "react-hook-form";
import EditPresenter from "./edit.presenter";

export default function EditContainer() {
  const { register, handleSubmit, formState } = useForm();

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

  return (
    <EditPresenter
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
