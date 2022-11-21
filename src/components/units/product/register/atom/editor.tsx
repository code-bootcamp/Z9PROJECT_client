import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import { IEditorPageProps } from "../register.types";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../register.queries";
import { useEffect } from "react";
import { ErrorModal } from "../../../../commons/modal/modal";

export default function EditorPage(P: IEditorPageProps) {
  const { contentsRef, onChangeContents, initialValue } = P;
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  useEffect(() => {
    if (!contentsRef) return;
    if (contentsRef.current) {
      contentsRef.current.getInstance().removeHook("addImageBlobHook");
      contentsRef.current.getInstance().setHTML(initialValue);
      contentsRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob: Blob | File, callback: any) => {
          (async () => {
            console.log(blob);
            const result = await uploadImage({
              variables: {
                image: blob,
              },
            });
            callback(result.data.uploadImage.imageUrl, "alt text");
          })().catch((error) => {
            ErrorModal(error);
          });
          return false;
        });
    }
    return () => {};
  }, [contentsRef]);
  return (
    <Editor
      ref={contentsRef}
      height="auto"
      max-height="1000px"
      initialEditType="wysiwyg"
      placeholder="내용을 입력해 주세요."
      hideModeSwitch={true}
      onChange={onChangeContents}
      language="ko-KR"
      initialValue={initialValue}
      plugins={[tableMergedCell, colorSyntax]}
      autofocus={false}
    />
  );
}
