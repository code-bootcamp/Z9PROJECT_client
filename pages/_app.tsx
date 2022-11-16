import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "animate.css";
import Layout from "../src/components/commons/layout";
import HeadLoad from "../src/components/commons/head/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadLoad>
        <RecoilRoot>
          <ApolloSetting>
            <>
              <Global styles={globalStyles} />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </>
          </ApolloSetting>
        </RecoilRoot>
      </HeadLoad>
    </>
  );
}

export default MyApp;
