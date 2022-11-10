import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import { IEditorPageProps } from "../register.types";

export default function EditorPage(P: IEditorPageProps) {
  const { contentsRef, onChangeContents, initialValue } = P;

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
    />
  );
}
