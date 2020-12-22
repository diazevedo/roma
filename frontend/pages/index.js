import React from "react";

import styled from "styled-components";

import ClientList from "../components/ClientsList";
import { Input, Header } from "semantic-ui-react";

import AppContext from "../context/AppContext";

export default function Main() {
  const [query, updateQuery] = React.useState("");
  const appContext = React.useContext(AppContext);

  return (
    <Container>
      <Header textAlign="center" as="h3">
        Procurar Cliente
      </Header>
      <Input
        icon="search"
        value={query}
        placeholder="telefone"
        onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
      />
      <ClientList search={query} />
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
