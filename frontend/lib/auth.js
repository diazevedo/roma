/* /lib/auth.js */

import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";

import api from "../services/api";

export const login = async (identifier, password) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }

  const dataReturn = {
    user: null,
  };

  try {
    const response = await api.post(`/auth/local/`, {
      identifier,
      password,
    });

    Cookie.set("token", response.data.jwt);
    dataReturn.user = response.data.user;
    return dataReturn;
  } catch (error) {
    return dataReturn;
  }
};

export const logout = () => {
  //remove token and user cookie
  Cookie.remove("token");
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  //redirect to the home page

  Router.push("/signin");
};

//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
export const withAuthSync = (Component) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        Router.push("/signin");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};
