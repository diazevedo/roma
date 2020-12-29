import { gql } from "@apollo/client";

export const GET_ALL_CLIENTS = gql`
  {
    clients {
      id
      first_name
      surname
      phone
      address {
        id
        street
        number
        complement
      }
    }
  }
`;

export const GET_CLIENT = gql`
  query($id: String!) {
    clients(where: { id: $id }) {
      id
      first_name
      surname
      phone
      address {
        id
        street
        number
        complement
      }
    }
  }
`;
