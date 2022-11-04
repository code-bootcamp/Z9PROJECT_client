import { useRouter } from "next/router";
import FooterPage from "./footer";
import HeaderPage from "./header";

export default function Layout(P) {
  const { children } = P;

  const router = useRouter();

  return (
    <>
      <HeaderPage />
      <div>{children}</div>
      <FooterPage />
    </>
  );
}
