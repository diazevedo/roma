/* /pages/restaurants.js */
import React from "react";
import axios from "axios";
import { Form, Button, Message } from "semantic-ui-react";

import CustomForm from "../CustomForm";
import { updateAddress } from "../../utils/api/addresses";
import { updateClient } from "../../utils/api/clients";
import { prepareData } from "../../utils/clients";

const ClientCard = ({ clientData, loading }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loadingSaving, setLoadingSaving] = React.useState(false);

  const [client, setClient] = React.useState(prepareData(clientData));

  const handleClickButtonEdit = async (e) => {
    setSuccess(false);
    setError(false);
    setLoadingSaving(true);

    if (isEditing) {
      try {
        await axios.all([updateClient(client), updateAddress(client)]);

        setSuccess(true);
      } catch (error) {
        setError(true);
      }
    }

    setLoadingSaving(false);

    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      <CustomForm
        loading={loading || loadingSaving}
        success={success}
        error={error}
        disabled={!isEditing}
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

      <Button onClick={(e) => handleClickButtonEdit(e)}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </>
  );
};

export default ClientCard;
