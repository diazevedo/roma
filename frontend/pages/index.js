import React from "react";
import styled from "styled-components";
import { GET_ALL_CLIENTS } from "../utils/queries/clients";

import { Loader, Dimmer, Image, Segment } from "semantic-ui-react";

import client from "../services/apolloClient";

import ClientList from "../components/ClientsList";
import { Input, Header } from "semantic-ui-react";
/*
if (loading)
return (
  <Segment>
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>

    <Image
      size="small"
      src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
    />
    <Image
      size="small"
      style={{ marginTop: "10px" }}
      src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
    />
    <Image
      size="small"
      style={{ marginTop: "10px" }}
      src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
    />
  </Segment>
);*/

export default function Main({ data }) {
  const [clients, setClients] = React.useState(data || []);

  const clientsFiltered = (e) => {
    const textSearched = e.target.value.toLocaleLowerCase();

    const filtered = data.filter((c) =>
      c.phone.toLowerCase().includes(textSearched)
    );

    setClients(filtered);
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
  const result = await client.query({ query: GET_ALL_CLIENTS });

  console.log({ static: result.data });

  return {
    props: { data: result.data.clients },
  };
}
