import { useState } from "react";
import { Header } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import ClientPageForm from "../../../components/ClientPageForm/";

import { updateAddress } from "../../../utils/api/addresses";
import { updateClient } from "../../../utils/api/clients";

import { GET_CLIENT } from "../../../utils/queries/clients";

import styled from "styled-components";

export default function Clients() {
  const router = useRouter();
  console.log("uopdate");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { loading, errorRequest, data } = useQuery(GET_CLIENT, {
    variables: { id: router.query.id },
  });
  console.log("uopdate", { data });

  const submit = async () => {
    setSuccess(false);
    setError(false);
    setLoadingSaving(true);

    try {
      await axios.all([updateClient(client), updateAddress(client)]);

      setSuccess(true);
    } catch (errorResponse) {
      setError(true);
    }

    setLoadingSaving(false);
  };

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Dados do cliente
      </Header>

      {loading && <Header as="h3">carregando dados do cliente</Header>}

      {errorRequest && (
        <Header as="h3">Erro ao carregar os dados do cliente</Header>
      )}

      <ClientPageForm
        clientData={(data && data.clients[0]) || {}}
        loading={loading}
        submit={submit}
        success={success}
        error={error}
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
