import Cookie from "js-cookie";
import { useState } from "react";
import { Header } from "semantic-ui-react";

import ClientPageForm from "../../components/ClientPageForm/";

import { createClient } from "../../utils/api/clients";
import { createAddress } from "../../utils/api/addresses";

import styled from "styled-components";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (data) => {
    const token = Cookie.get("token");

    try {
      const responseAddress = await createAddress({ ...data, token });

      const dataClient = {
        ...data,
        address: responseAddress.data.id,
        token,
      };

      await createClient(dataClient);

      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Dados do cliente
      </Header>

      <ClientPageForm
        clientData={{}}
        loading={false}
        editable
        submit={handleSubmit}
        error={error}
        success={success}
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
