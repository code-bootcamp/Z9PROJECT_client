import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { schema } from "./atom/schema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import EditPresenter from "./edit.presenter";
import ChangeInput from "./atom/changeInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { styleSet } from "../../../../commons/styles/styleSet";
import { ErrorModal, SuccessModal } from "../../../commons/modal/modal";
import {
  CHECK_NICKNAME,
  DELETE_USER,
  FETCH_USER,
  PATCH_SMS_TOKEN,
  POST_SMS_TOKEN,
  UPDATE_USER,
  UPLOAD_IMAGE,
} from "./edit.queries";

export default function EditContainer() {
  const router = useRouter();
  const [certFile, setCertFile] = useState<File>();
  const [profileFile, setProfileFile] = useState<File>();
  const [openTime, setOpenTime] = useState<boolean>(false);
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [postSmsToken] = useMutation(POST_SMS_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);
  const [patchSmsToken] = useMutation(PATCH_SMS_TOKEN);
  const { data: fetchUser } = useQuery(FETCH_USER);
  const { register, handleSubmit, formState, setValue, getValues, watch } =
    useForm({ resolver: yupResolver(schema) });

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

      result.data.checkNickname
        ? ErrorModal("이미 사용중인 닉네임입니다.")
        : SuccessModal("사용 가능한 닉네임입니다.");
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };
  const onClickUpdate = async () => {
    try {
      let profileUrl = "";
      let certUrl = "";
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

      const { changeInput } = ChangeInput({ watch, getValues });

      await updateUser({
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

  const onClickMore = () => {
    void Swal.fire({
      title: "회원을 탈퇴하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: `${styleSet.colors.darkgray}`,
      cancelButtonColor: `${styleSet.colors.red}`,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        void deleteUser();
        sessionStorage.removeItem("accessToken");
        router.reload();
      }
    });
  };

  return (
    <EditPresenter
      register={register}
      openTime={openTime}
      setValue={setValue}
      formState={formState}
      fetchUser={fetchUser}
      onClickMore={onClickMore}
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
