import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import UserPresenter from "./user.presenter";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CHECK_NICKNAME,
  CREATE_USER,
  PATCH_SMS_TOKEN,
  POST_SMS_TOKEN,
  UPLOAD_IMAGE,
} from "./user.queries";

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
  account: yup.string().typeError("숫자만 입력").required("필수"),
  bank: yup.string().required("필수"),
  accountName: yup.string().required("필수"),
  terms: yup.boolean().oneOf([true], "필수"),
});

export default function UserRegisterContainer() {
  const { register, handleSubmit, formState, watch, setValue, getValues } =
    useForm({
      resolver: yupResolver(schma),
      mode: "onChange",
    });
  const [confirmId, setConfirmId] = useState<string>("");
  const [profileFile, setProfileFile] = useState<File>();
  const [openTime, setOpenTime] = useState<boolean>(false);
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [createUser] = useMutation(CREATE_USER);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [postSmsToken] = useMutation(POST_SMS_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [patchSmsToken] = useMutation(PATCH_SMS_TOKEN);
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
  const onChangeProfileFile = (url: string, file: File) => {
    setProfilePreview(url);
    setProfileFile(file);
  };

  const onClickCertNumber = async () => {
    if (!openTime) {
      try {
        await postSmsToken({
          variables: {
            phoneNumber: getValues("phoneNumber"),
          },
        });
        setOpenTime(true);
        setTimeout(() => {
          setOpenTime(false);
        }, 180000);
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
    if (!profileFile) ErrorModal("프로필 이미지는 필수 입니다.");
    try {
      const resultProfile = await uploadImage({
        variables: {
          image: profileFile,
        },
      });

      const result = await createUser({
        variables: {
          signupId: confirmId,
          createCommonUserInput: {
            ...rest,
            profileImg: resultProfile.data.uploadImage.imageUrl,
          },
        },
      });
      SuccessModal(
        `${String(result.data.createUser.nickname)}님 가입을 환영합니다.`
      );
      void router.push("/users/login");
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <UserPresenter
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeProfileFile={onChangeProfileFile}
      profilePreview={profilePreview}
      onClickCertNumber={onClickCertNumber}
      onClickCertConfirm={onClickCertConfirm}
      onClickNameConfirm={onClickNameConfirm}
      openTime={openTime}
      setValue={setValue}
      onChangeChecked={onChangeChecked}
    />
  );
}
