import React from "react";

import { Form, Button, Message } from "semantic-ui-react";

import CustomForm from "../CustomForm";
import { prepareData } from "../../utils/clients";

const ClientPageForm = ({
  clientData,
  loading,
  submit = () => {},
  success,
  error,
}) => {
  const [loadingSaving, setLoadingSaving] = React.useState(false);
  const [client, setClient] = React.useState(prepareData(clientData));

  const handleSubmit = async () => {
    setLoadingSaving(true);
    await submit(client);
    setLoadingSaving(false);
  };

  return (
    <>
      <CustomForm
        loading={loading || loadingSaving}
        success={success}
        error={error}
      >
        <Message
          success
          header="Sucesso"
          content="Cliente atualizado com sucesso."
        />
        <Message error header="Erro" content="Desculpe, aconteceu um erro." />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="first_name"
            label="Primeiro nome"
            placeholder="First name"
            value={client.first_name}
            onChange={(e) =>
              setClient({ ...client, first_name: e.target.value })
            }
          />
          <Form.Input
            fluid
            name="surname"
            label="Sobrenome"
            placeholder="Surname"
            value={client.surname}
            onChange={(e) => setClient({ ...client, surname: e.target.value })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="phone"
            label="Telefone"
            placeholder="Phone"
            onChange={(e) => handleInput(e)}
            value={client.phone}
            onChange={(e) => setClient({ ...client, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="street"
            label="Rua/Avenida"
            placeholder="nome da rua"
            value={client.street}
            onChange={(e) => setClient({ ...client, street: e.target.value })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="number"
            label="Número"
            placeholder="13"
            value={client.number}
            onChange={(e) => setClient({ ...client, number: e.target.value })}
          />
          <Form.Input
            fluid
            name="complement"
            label="Complemento"
            placeholder="Complement"
            value={client.complement}
            onChange={(e) =>
              setClient({ ...client, complement: e.target.value })
            }
          />
        </Form.Group>
      </CustomForm>

      <Button onClick={() => handleSubmit()}>Save</Button>
    </>
  );
};

export default ClientPageForm;
