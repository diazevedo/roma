import axios from "axios";
import Cookie from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import ClientPageForm from "../../../components/ClientPageForm/";

import { updateClient } from "../../../utils/api/clients";
import { GET_CLIENT } from "../../../utils/queries/clients";
import { updateAddress } from "../../../utils/api/addresses";

import styled from "styled-components";

export default function Clients({ client }) {
  const router = useRouter();
  const token = Cookie.get("token");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { loading, errorRequest, data } = useQuery(GET_CLIENT, {
    variables: { id: router.query.id },
  });
  const submit = async (client) => {
    const clientData = { ...client, token };

    setSuccess(false);
    setError(false);

    try {
      await axios.all([updateClient(clientData), updateAddress(clientData)]);
      setSuccess(true);
    } catch (errorResponse) {
      setError(true);
    }
  };

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Dados do cliente
      </Header>
      {loading ? (
        <h1>Carregando Dados do cliente</h1>
      ) : (
        <ClientPageForm
          clientData={data.clients[0]}
          loading={loading}
          submit={submit}
          success={success}
          error={error}
        />
      )}
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
