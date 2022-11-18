import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "animate.css";
import Layout from "../src/components/commons/layout";
import HeadLoad from "../src/components/commons/head/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "manifest.json";
    link.rel = "manifest";
    document.head.appendChild(link);

    const favicon1 = document.createElement("link");
    favicon1.href = "/pwa/favicon/favicon-16x16.ico";
    favicon1.rel = "icon";
    favicon1.type = "image/png";
    document.head.appendChild(favicon1);

    const favicon2 = document.createElement("link");
    favicon2.href = "/pwa/favicon/favicon-32x32.ico";
    favicon2.rel = "icon";
    favicon2.type = "image/png";
    document.head.appendChild(favicon2);

    const apple = document.createElement("link");
    apple.href = "/pwa/icon-192x192.png";
    apple.rel = "apple-touch-icon";
    document.head.appendChild(apple);

    const msApp = document.createElement("meta");
    msApp.name = "msapplication-TileColor";
    msApp.content = "#f46a22";
    document.head.appendChild(msApp);

    const color = document.createElement("meta");
    color.name = "theme-color";
    color.content = "#f46a22";
    document.head.appendChild(color);

    const appleStart1 = document.createElement("link");
    appleStart1.rel = "apple-touch-startup-image";
    appleStart1.href = "/pwa/splash/apple-launch-640x1136.png";
    appleStart1.media =
      "(device-width: 640px) and (device-height: 1136px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart1);

    const appleStart2 = document.createElement("link");
    appleStart2.rel = "apple-touch-startup-image";
    appleStart2.href = "/pwa/splash/apple-launch-750x1334.png";
    appleStart2.media =
      "(device-width: 750px) and (device-height: 1334px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart2);

    const appleStart3 = document.createElement("link");
    appleStart3.rel = "apple-touch-startup-image";
    appleStart3.href = "/pwa/splash/apple-launch-1125x2436.png";
    appleStart3.media =
      "(device-width: 1125px) and (device-height: 2436px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart3);

    const appleStart4 = document.createElement("link");
    appleStart4.rel = "apple-touch-startup-image";
    appleStart4.href = "/pwa/splash/apple-launch-1170x2532.png";
    appleStart4.media =
      "(device-width: 1170px) and (device-height: 2532px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart4);

    const appleStart5 = document.createElement("link");
    appleStart5.rel = "apple-touch-startup-image";
    appleStart5.href = "/pwa/splash/apple-launch-1179x2556.png";
    appleStart5.media =
      "(device-width: 1179px) and (device-height: 2556px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart5);

    const appleStart7 = document.createElement("link");
    appleStart7.rel = "apple-touch-startup-image";
    appleStart7.href = "/pwa/splash/apple-launch-1242x2208.png";
    appleStart7.media =
      "(device-width:1242px) and (device-height: 2208px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart7);

    const appleStart8 = document.createElement("link");
    appleStart8.rel = "apple-touch-startup-image";
    appleStart8.href = "/pwa/splash/apple-launch-1284x2778.png";
    appleStart8.media =
      "(device-width: 1284px) and (device-height: 2778px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart8);

    const appleStart9 = document.createElement("link");
    appleStart9.rel = "apple-touch-startup-image";
    appleStart9.href = "/pwa/splash/apple-launch-1290x2796.png";
    appleStart9.media =
      "(device-width: 1290px) and (device-height: 2796px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart9);

    const appleStart10 = document.createElement("link");
    appleStart10.rel = "apple-touch-startup-image";
    appleStart10.href = "/pwa/splash/apple-launch-1536x2048.png";
    appleStart10.media =
      "(device-width: 1536px) and (device-height: 2048px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart10);

    const appleStart11 = document.createElement("link");
    appleStart9.rel = "apple-touch-startup-image";
    appleStart9.href = "/pwa/splash/apple-launch-1668x2224.png";
    appleStart9.media =
      "(device-width: 1668px) and (device-height: 2224px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart11);


    const appleStart12 = document.createElement("link");
    appleStart9.rel = "apple-touch-startup-image";
    appleStart9.href = "/pwa/splash/apple-launch-2048x2732.png";
    appleStart9.media =
      "(device-width: 2048px) and (device-height: 2732px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)";
    document.head.appendChild(appleStart12);
  }, []);

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
