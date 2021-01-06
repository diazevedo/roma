import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Header } from "semantic-ui-react";

import AppContext from "../context/AppContext";
import { login } from "../lib/auth";

import Form from "../components/Form/";

const style = {
  h3: { marginTop: "2em", padding: "2em 0em" },
};

const SignIn = () => {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const appContext = useContext(AppContext);

  const handleButtonLoginClick = (event) => {
    updateData({ ...data, [event.target.name]: event.target.value });
  };

  const submitForm = async () => {
    setLoading(true);
    setError(false);

    const responseLogin = await login(data.identifier, data.password);

    if (responseLogin.user) {
      appContext.setUser(responseLogin.user);
      router.push("/");
      setLoading(false);
      return;
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="wrapper-signin">
      <Header as="h3" content="Sign in" style={style.h3} textAlign="center" />
      <Form
        onChange={handleButtonLoginClick}
        submit={submitForm}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default SignIn;
