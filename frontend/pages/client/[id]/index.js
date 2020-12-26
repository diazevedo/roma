import { Grid, GridColumn, Header } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import ClientCard from "../../../components/ClientCard/";
import { GET_CLIENT } from "../../../utils/queries/clients";

import styled from "styled-components";

export default function Clients() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: router.query.id },
  });

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Dados do cliente
      </Header>

      {/* {loading && <Header as="h3">carregando dados do cliente</Header>} */}

      {error && <Header as="h3">Erro ao carregar os dados do cliente</Header>}

      <ClientCard
        clientData={(data && data.clients[0]) || {}}
        loading={loading}
      />
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
