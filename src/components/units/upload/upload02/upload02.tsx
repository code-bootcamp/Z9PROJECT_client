import styled from "@emotion/styled";
import { ChangeEvent, useRef } from "react";

const Wrapper = styled.div`
  position: relative;
`;

const UploadBtn = styled.div`
  padding: 23px;
  width: 600px;
  height: 70px;
  color: gray;
  background: #ffffff;
  border: 1px solid #cccccc;

  text-align: center;

  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

type IUpload02Props = {
  onChageProfileFile: (url: string, file: File) => void;
  profileFetchUrl: File | undefined;
};

export default function Upload02(P: IUpload02Props) {
  const { onChageProfileFile } = P;
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
