import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import CreatorPresenter from "./creator.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CHECK_NICKNAME,
  CREATE_CREATOR,
  PATCH_SMS_TOKEN,
  POST_SMS_TOKEN,
  UPLOAD_IMAGE,
} from "./creator.queries";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import { useRouter } from "next/router";

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
  nickname: yup.string().required("필수"),
  snsName: yup.string().required("필수"),
  snsChannel: yup.string().required("필수"),
  mainContents: yup.string(),
  introduce: yup.string(),
  account: yup.number().typeError("숫자만 입력").required("필수"),
  bank: yup.string().required("필수"),
  accountName: yup.string().required("필수"),
  terms: yup.boolean().oneOf([true], "필수"),
});

export default function CreatorRegisterContainer() {
  const { register, handleSubmit, formState, watch, setValue, getValues } =
    useForm({
      resolver: yupResolver(schma),
      mode: "onChange",
    });
  const router = useRouter();
  const [certFile, setCertFile] = useState<File>();
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFile, setProfileFile] = useState<File>();
  const [confirmId, setConfirmId] = useState("");
  const [openTime, setOpenTime] = useState(false);
  const [createCreator] = useMutation(CREATE_CREATOR);
  const [postSmsToken] = useMutation(POST_SMS_TOKEN);
  const [patchSmsToken] = useMutation(PATCH_SMS_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  useEffect(() => {
    setConfirmId(uuidv4());
  }, []);

  useEffect(() => {
    if (
      watch("phoneNumber").length === 11 &&
      watch("phoneNumber").includes("-") === false
    ) {
      const Number = watch("phoneNumber");
      setValue(
        "phoneNumber",
        Number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [watch("phoneNumber")]);

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("terms", e.target.checked);
  };

  const onChangeCertifiFile = (file: File) => {
    setCertFile(file);
  };

  const onChageProfileFile = (url: string, file: File) => {
    setProfilePreview(url);
    setProfileFile(file);
  };

  const onClickCertNumber = async () => {
    if (!openTime) {
      try {
        const result = await postSmsToken({
          variables: {
            phoneNumber: getValues("phoneNumber"),
          },
        });
        setOpenTime(true);
        setTimeout(() => {
          setOpenTime(false);
        }, 180000);
        console.log(result.data.postSmsToken.message);
      } catch (error) {
        ErrorModal(error as string);
      }
    } else {
      ErrorModal("이미 인증번도 받기를 누르셨습니다. 핸드폰을 확인바랍니다.");
    }
  };

  const onClickCertConfirm = async () => {
    try {
      const result = await patchSmsToken({
        variables: {
          phoneNumber: getValues("phoneNumber"),
          smsToken: getValues("keyNumber"),
          signupId: confirmId,
        },
      });
      if (result.data.patchSmsToken) {
        setOpenTime(false);
        SuccessModal("인증 성공");
      }
    } catch (error) {
      ErrorModal(error as string);
    }
  };

  const onClickNameConfirm = async () => {
    try {
      const result = await checkNickname({
        variables: {
          nickname: getValues("nickname"),
        },
      });

      if (result.data.checkNickname) {
        ErrorModal("이미 사용중인 닉네임입니다.");
      } else {
        SuccessModal("사용 가능한 닉네임입니다.");
      }
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  const onClickSignUp = async (data: any) => {
    const { keyNumber, passwordConfirm, terms, ...rest } = data;
    if (!certFile) ErrorModal("인증 파일은 필수 입니다.");
    if (!profileFile) ErrorModal("프로필 이미지는 필수 입니다.");
    try {
      const resultCert = await uploadImage({
        variables: {
          image: certFile,
        },
      });
      const resultProfile = await uploadImage({
        variables: {
          image: profileFile,
        },
      });

      const result = await createCreator({
        variables: {
          signupId: confirmId,
          createCreatorInput: {
            ...rest,
            account: String(getValues("account")),
            isAuthedCreator: true,
            followerNumber: 10000000,
            profileImg: resultProfile.data.uploadImage.imageUrl,
            creatorAuthImg: resultCert.data.uploadImage.imageUrl,
          },
        },
      });
      SuccessModal(
        `${String(result.data.createCreator.nickname)}님 가입을 환영합니다.`
      );
      void router.push("/users/login");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <CreatorPresenter
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeCertifiFile={onChangeCertifiFile}
      onChageProfileFile={onChageProfileFile}
      profilePreview={profilePreview}
      onClickCertNumber={onClickCertNumber}
      onClickCertConfirm={onClickCertConfirm}
      onClickNameConfirm={onClickNameConfirm}
      setValue={setValue}
      openTime={openTime}
      onChangeChecked={onChangeChecked}
    />
  );
}
