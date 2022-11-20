import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "@emotion/styled";
import { styleSet } from "../../../../../commons/styles/styleSet";
import { ErrorModal } from "../../../../commons/modal/modal";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const UploadWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${styleSet.colors.lightGray};
  border-radius: 10px;
  cursor: pointer;
  p {
    text-align: center;
    line-height: 100px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  aspect-ratio: 1/1;
`;

type IImgDropzoneProps = {
  onDropImg: (inputFiles: File[]) => void;
  fetchImg?: any;
};

export default function ImgDropzone(P: IImgDropzoneProps) {
  const { onDropImg, fetchImg } = P;
  const [preview, setPreview] = useState<string[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 4 || preview.length + acceptedFiles.length > 4) {
      ErrorModal("이미지는 최대 4장까지 가능합니다.");
      return;
    }
    acceptedFiles.forEach((file: File) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        const file = e.target?.result;
        if (!file) return;
        setPreview((prev: any) => [...prev, file]);
      };
    });
    onDropImg(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <Wrapper>
      <UploadWrapper {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>이곳에 사진을 놓으세요.</p>
        ) : (
          <p>
            사진 파일을 이곳애 드래그 앤 드롭하거나, 이곳을 클릭해 사진을
            선택하세요.
          </p>
        )}
      </UploadWrapper>
      <ImgWrapper>
        {preview?.length !== 0 || fetchImg?.length !== undefined ? (
          <div>미리보기</div>
        ) : null}
        {preview?.length !== 0
          ? preview.map((el, i) => (
              <Img src={el} alt={`업로드한 이미지 ${i + 1}`} key={i} />
            ))
          : fetchImg?.length !== 0
          ? fetchImg?.map((el: any, i: number) => (
              <Img src={el} alt={`저장된 이미지 ${i + 1}`} key={i} />
            ))
          : null}
      </ImgWrapper>
    </Wrapper>
  );
}
