import React from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";

const style = {
  form: {
    width: "80%",
    maxWidth: "400px",
    margin: "0 auto",
  },
  label: {
    marginBottom: "10px",
  },
};

const FormWrapper = ({ onChange, submit, loading = false, error = false }) => (
  <Form
    style={style.form}
    onSubmit={() => submit()}
    loading={loading}
    error={error}
  >
    <Message
      error
      header="Wrong details"
      content="Sorry, the provided details do not match."
    />

    <Form.Field>
      <label style={style.label}>Email</label>
      <Input
        placeholder="user@company.com"
        name="identifier"
        onChange={(e) => onChange(e)}
      />
    </Form.Field>
    <Form.Field>
      <label style={style.label}>Password</label>
      <Input
        type="password"
        fluid
        name="password"
        placeholder="*******"
        onChange={(e) => onChange(e)}
      />
    </Form.Field>
    <Button fluid type="submit">
      Login
    </Button>
  </Form>
);

export default FormWrapper;
