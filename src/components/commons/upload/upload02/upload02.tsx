import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { styleSet } from "../../../../commons/styles/styleSet";

const Wrapper = styled.div`
  position: relative;

  @media ${styleSet.breakePoints.mobile} {
    padding-top: 20px;
    width: 100%;
  }
`;

const UploadBtn = styled.div`
  padding: 23px;
  width: 200px;
  height: 70px;
  color: gray;
  background: #ffffff;
  border: 1px solid #cccccc;
  text-align: center;
  cursor: pointer;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
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
        <span>프로필 사진 등록</span>
      </UploadBtn>
      <Input type="file" ref={inputRef} onChange={onChangeFile} />
    </Wrapper>
  );
}
