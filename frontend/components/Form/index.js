import React from "react";
import { Button, Form, Input, Label } from "semantic-ui-react";

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

const FormWrapper = ({ onChange, submit }) => (
  <Form style={style.form} onSubmit={() => submit()}>
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
