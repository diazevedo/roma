/* /pages/restaurants.js */
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
          header="It's all good"
          content="The client has been updated."
        />
        <Message
          error
          header="The update has failed"
          content="Sorry, an error has occurred."
        />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="first_name"
            label="First name"
            placeholder="First name"
            value={client.first_name}
            onChange={(e) =>
              setClient({ ...client, first_name: e.target.value })
            }
          />
          <Form.Input
            fluid
            name="surname"
            label="Surname"
            placeholder="Surname"
            value={client.surname}
            onChange={(e) => setClient({ ...client, surname: e.target.value })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="phone"
            label="Phone"
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
            label="Street"
            placeholder="street name"
            value={client.street}
            onChange={(e) => setClient({ ...client, street: e.target.value })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="number"
            label="Number"
            placeholder="numero"
            value={client.number}
            onChange={(e) => setClient({ ...client, number: e.target.value })}
          />
          <Form.Input
            fluid
            name="complement"
            label="Complement"
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
