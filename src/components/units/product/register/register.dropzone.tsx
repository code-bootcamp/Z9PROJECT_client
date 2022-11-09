import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${styleSet.colors.lightGray};
  border-radius: 10px;
  p {
    text-align: center;
    line-height: 100px;
  }
`;

export default function ImgDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>이곳에 사진을 놓으세요.</p>
      ) : (
        <p>
          사진 파일을 이곳애 드래그 앤 드롭하거나, 이곳을 클릭해 사진을
          선택하세요.
        </p>
      )}
    </Wrapper>
  );
}
