import styled from "styled-components";
import { Form as FormSemantic } from "semantic-ui-react";

export const CustomForm = styled(FormSemantic)`
  &.ui.loading.form {
    cursor: progress;
    pointer-events: initial;
  }

  &.ui.loading.form:before {
    background: transparent;
    opacity: 0.7;
  }
`;

export const FieldsetCustom = styled.fieldset`
  &:disabled .field > .input > input {
    background-color: #fff;
    opacity: 0.9;
  }
`;
