import React from "react";
// import axios from "axios";
import api from "../services/api";
import styled from "styled-components";
import { Input, Header } from "semantic-ui-react";

import ClientList from "../components/ClientsList";

export default function Main({ clientsData }) {
  const [clients, setClients] = React.useState(clientsData);

  const clientsFiltered = (e) => {
    const textSearched = e.target.value.toLocaleLowerCase();

    const clientsFiltered = clientsData.filter((c) =>
      c.phone.toLowerCase().includes(textSearched)
    );

    setClients(clientsFiltered);
  };

  return (
    <Container>
      <Header textAlign="center" as="h3">
        Procurar Cliente
      </Header>

      <Input
        icon="search"
        placeholder="telefone"
        type="number"
        onChange={(e) => clientsFiltered(e)}
      />

      <ClientList data={clients} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export async function getServerSideProps(context) {
  const token = getToken(context);

  if (token.length === 0) {
    return redirectToLogin(context);
  }

  let data = [];
  try {
    const result = await api.get(`/clients`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    data = result.data;
  } catch (error) {
    return redirectToLogin(context);
  }

  return {
    props: {
      clientsData: data,
    },
  };
}

const redirectToLogin = (context) => {
  context.res.writeHead(302, { Location: "signin" });
  context.res.end();

  return { props: {} };
};

const getToken = (context) => {
  const [, token] = context.req.headers.cookie
    ? context.req.headers.cookie.split("=")
    : ["", ""];

  return token;
};
