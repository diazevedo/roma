import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";
import Cookie from "js-cookie";

const token = Cookie.get("token");

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
    opt: {
      credentials: "same-origin",
    },
    headers: { authorization: `Bearer ${token}` },
  }),
};

export default withData(config);
