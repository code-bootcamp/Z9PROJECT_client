import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { styleSet } from "../../../../commons/styles/styleSet";

const Wrapper = styled.div`
  position: absolute;
  left: 12%;

  @media ${styleSet.breakePoints.mobile} {
    padding-top: 20px;
    left: 57%;
    bottom: 0;
  }
`;

const UploadBtn = styled.div`
  cursor: pointer;
  background: ${styleSet.colors.white};
  border: 1px solid ${styleSet.colors.darkgray};
  padding: 10px;
  border-radius: 50%;

  @media ${styleSet.breakePoints.mobile} {
    width: 50px;
    height: 50px;
    line-height: 0px;
  }
`;

const Input = styled.input`
  display: none;
`;

type IUpload02Props = {
  onChageProfileFile: (url: string, file: File) => void;
  profileFetchUrl: File | undefined;
};

export default function Upload02(P: IUpload02Props) {
  const { onChageProfileFile, profileFetchUrl } = P;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      onChageProfileFile(String(e.target?.result), file);
    };
  };

  return (
    <Wrapper>
      <UploadBtn onClick={onClickUpload}>
        <img src="/icon_profile.png" alt="프로필 이미지 등록 아이콘" />
      </UploadBtn>
      <Input type="file" ref={inputRef} onChange={onChangeFile} />
    </Wrapper>
  );
}
