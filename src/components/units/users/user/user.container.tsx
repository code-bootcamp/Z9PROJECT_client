import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserPresenter from "./user.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import {
  CHECK_NICKNAME,
  CREATE_USER,
  PATCH_SMS_TOKEN,
  POST_SMS_TOKEN,
} from "./user.queries";
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
  account: yup.string(),
  bank: yup.string(),
  accountName: yup.string(),
  terms: yup.boolean().oneOf([true], "필수"),
});

export default function UserRegisterContainer() {
  const { register, handleSubmit, formState, watch, setValue, getValues } =
    useForm({
      resolver: yupResolver(schma),
      mode: "onChange",
    });
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFetchUrl, setProfileFetchUrl] = useState<File>();
  const [confirmId, setConfirmId] = useState("");
  const [openTime, setOpenTime] = useState(false);
  const [createUser] = useMutation(CREATE_USER);
  const [postSmsToken] = useMutation(POST_SMS_TOKEN);
  const [patchSmsToken] = useMutation(PATCH_SMS_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const router = useRouter();

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
        ErrorModal(error);
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
      if (result.data.patchSmsToken) SuccessModal("인증 성공");
    } catch (error) {
      ErrorModal(error);
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

  const onChageProfileFile = (url: string, file: File) => {
    setProfilePreview(url);
    setProfileFetchUrl(file);
  };

  const onClickSignUp = async (data: any) => {
    const { keyNumber, passwordConfirm, terms, ...rest } = data;
    try {
      const result = await createUser({
        variables: {
          signupId: confirmId,
          createCommonUserInput: {
            ...rest,
            // userProfileImg: profileFetchUrl,
          },
        },
      });
      SuccessModal(`${result.data.createUser.nickname}님 가입을 환영합니다.`);
      router.push("/users/login");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <UserPresenter
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChageProfileFile={onChageProfileFile}
      profilePreview={profilePreview}
      profileFetchUrl={profileFetchUrl}
      onClickCertNumber={onClickCertNumber}
      onClickCertConfirm={onClickCertConfirm}
      onClickNameConfirm={onClickNameConfirm}
      openTime={openTime}
      setValue={setValue}
      onChangeChecked={onChangeChecked}
    />
  );
}
