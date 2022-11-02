import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/ globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css"
          rel="stylesheet"
        ></link>
      </Head>
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
    </>
  );
}

export default MyApp;
