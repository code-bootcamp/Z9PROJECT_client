import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import EditPresenter from "./edit.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CHECK_NICKNAME,
  FETCH_USER,
  PATCH_SMS_TOKEN,
  POST_SMS_TOKEN,
  UPDATE_USER,
  UPLOAD_IMAGE,
} from "./edit.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { IChangeInput } from "./edit.types";

const schema = yup.object({
  nickname: yup.string(),
  phoneNumber: yup.string(),
  keyNumber: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  snsName: yup.string(),
  snsChannel: yup.string(),
  mainContents: yup.string(),
  introduce: yup.string(),
  account: yup.string(),
  bank: yup.string(),
  accountName: yup.string(),
});

export default function EditContainer() {
  const { register, handleSubmit, formState, setValue, getValues, watch } =
    useForm({ resolver: yupResolver(schema) });
  const [certFile, setCertFile] = useState<File>();
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFile, setProfileFile] = useState<File>();
  const [updateUser] = useMutation(UPDATE_USER);
  const [openTime, setOpenTime] = useState(false);
  const [postSmsToken] = useMutation(POST_SMS_TOKEN);
  const [patchSmsToken] = useMutation(PATCH_SMS_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const { data: fetchUser } = useQuery(FETCH_USER);

  useEffect(() => {
    setValue("snsChannel", fetchUser?.fetchUser.snsChannel);
  }, [fetchUser?.fetchUser.snsChannel]);

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
      ErrorModal("이미 인증번호 받기를 누르셨습니다. 핸드폰을 확인바랍니다.");
    }
  };

  const onClickCertConfirm = async () => {
    try {
      const result = await patchSmsToken({
        variables: {
          signupId: uuidv4(),
          smsToken: getValues("keyNumber"),
          phoneNumber: getValues("phoneNumber"),
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
          nickname: String(getValues("nickname")),
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

  const onClickUpdate = async (data: any) => {
    const { keyNumber, ...rest } = data;
    console.log(data);

    try {
      let profileUrl,
        certUrl = "";
      if (profileFile) {
        const resultProfile = await uploadImage({
          variables: {
            image: profileFile,
          },
        });
        profileUrl = resultProfile.data.uploadImage.imageUrl;
      } else {
        profileUrl = fetchUser?.fetchUser.profileImg;
      }

      if (certFile) {
        const resultCert = await uploadImage({
          variables: {
            image: certFile,
          },
        });
        certUrl = resultCert.data.uploadImage.imageUrl;
      } else {
        certUrl = fetchUser?.fetchUser.profileImg;
      }

      const changeInput: IChangeInput = {};
      if (watch("nickname")) {
        changeInput.nickname = getValues("nickname");
      }
      if (watch("phoneNumber")) {
        changeInput.phoneNumber = getValues("phoneNumber");
      }
      if (watch("zipcode")) {
        changeInput.zipcode = getValues("zipcode");
      }
      if (watch("address")) {
        changeInput.address = getValues("address");
      }
      if (watch("addressDetail")) {
        changeInput.addressDetail = getValues("addressDetail");
      }
      if (watch("introduce")) {
        changeInput.introduce = getValues("introduce");
      }
      if (watch("mainContents")) {
        changeInput.mainContents = getValues("mainContents");
      }
      if (watch("snsChannel")) {
        changeInput.snsChannel = getValues("snsChannel");
      }
      if (watch("snsName")) {
        changeInput.snsName = getValues("snsName");
      }
      if (watch("bank")) {
        changeInput.bank = getValues("bank");
      }
      if (watch("account")) {
        changeInput.account = getValues("account");
      }
      if (watch("accountName")) {
        changeInput.accountName = getValues("accountName");
      }

      const result = await updateUser({
        variables: {
          userId: fetchUser?.fetchUser.id,
          updateUserInput: {
            ...changeInput,
            profileImg: profileUrl,
            creatorAuthImg: certUrl,
          },
        },
      });
      SuccessModal("프로필 수정 완료");
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <EditPresenter
      register={register}
      openTime={openTime}
      setValue={setValue}
      formState={formState}
      fetchUser={fetchUser}
      handleSubmit={handleSubmit}
      onClickUpdate={onClickUpdate}
      profilePreview={profilePreview}
      onClickCertNumber={onClickCertNumber}
      onChageProfileFile={onChageProfileFile}
      onClickCertConfirm={onClickCertConfirm}
      onClickNameConfirm={onClickNameConfirm}
      onChangeCertifiFile={onChangeCertifiFile}
    />
  );
}
