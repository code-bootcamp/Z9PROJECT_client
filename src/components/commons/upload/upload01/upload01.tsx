import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const UploadBtn = styled.div`
  padding: 23px;
  width: 100%;
  height: 70px;
  color: gray;
  background: #ffffff;
  border: 1px solid #cccccc;

  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Svg = styled.svg`
  width: 40px;
  position: absolute;
  top: 15px;
  right: 20px;
`;

type IUpload01Props = {
  onChangeCertifiFile: (file: File) => void;
};

export default function Upload01(P: IUpload01Props) {
  const { onChangeCertifiFile } = P;
  const inputRef = useRef<HTMLInputElement>(null);
  const [creatorCertifiImg, setCreatorCerifiImg] = useState("");

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setCreatorCerifiImg(String(e.currentTarget.files?.[0].name));
    if (file) onChangeCertifiFile(file);
  };

  return (
    <Wrapper>
      <UploadBtn onClick={onClickUpload}>
        <span>
          {creatorCertifiImg
            ? creatorCertifiImg
            : "크리에이터 인증 이미지를 업로드 해주세요"}
        </span>
        <Svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M213.333333 725.333333l192-256 149.333334 192 106.666666-128L810.666667 725.333333m42.666666-469.333333h-341.333333l-85.333333-85.333333H170.666667a85.333333 85.333333 0 0 0-85.333334 85.333333v512a85.333333 85.333333 0 0 0 85.333334 85.333333h682.666666a85.333333 85.333333 0 0 0 85.333334-85.333333V341.333333a85.333333 85.333333 0 0 0-85.333334-85.333333z"
            fill="gray"
          />
        </Svg>
      </UploadBtn>
      <Input type="file" ref={inputRef} onChange={onChangeFile} />
    </Wrapper>
  );
}
