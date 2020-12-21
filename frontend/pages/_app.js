import React from "react";
import Head from "next/head";
import withData from "../lib/apollo";

import Layout from "../components/Layout/index";
import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Roma Lanches</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default withData(MyApp);
