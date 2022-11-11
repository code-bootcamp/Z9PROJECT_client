import { useRouter } from "next/router";
import FooterPage from "./footer";
import HeaderPage from "./header";

const HIDDEN_LAYOUT = ["/"];

export default function Layout(P: { children: any }) {
  const router = useRouter();
  const hiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  const { children } = P;

  return (
    <>
      {!hiddenLayout && <HeaderPage />}
      <div>{children}</div>
      {!hiddenLayout && <FooterPage />}
    </>
  );
}
