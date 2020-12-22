import React from "react";
import Head from "next/head";
import withData from "../lib/apollo";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

import AppContext from "../context/AppContext";

import Layout from "../components/Layout/index";
import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = React.useState(null);
  const router = useRouter();

  React.useEffect(() => {
    const token = Cookie.get("token");

    const auth = async () => {
      console.log("auth");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = response.data;

        setUser(user);
        console.log("dentro");
      } catch (error) {
        Cookie.remove("token");
        console.log("erro");

        setUser(null);
        router.push("/signin");
        return;
      }
    };

    if (token) {
      auth();
    } else {
      router.push("/signin");
    }
  }, [Component]);

  return (
    <AppContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUser,
      }}
    >
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
    </AppContext.Provider>
  );
};

export default withData(MyApp);
