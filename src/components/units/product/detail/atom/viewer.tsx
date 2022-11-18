import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

type ViwerPage = { initialValue?: string | undefined };

export default function ViewerPage(P: ViwerPage) {
  const { initialValue } = P;

  return <Viewer initialValue={initialValue} />;
}
