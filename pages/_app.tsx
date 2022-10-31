import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/ globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
