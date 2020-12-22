import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import {
  Button,
  List,
  Dimmer,
  Loader,
  Image,
  Segment,
} from "semantic-ui-react";

import Link from "next/link";

const QUERY = gql`
  {
    clients {
      id
      first_name
      surname
      phone
      addresses {
        id
        street
        number
      }
    }
  }
`;

const ClientList = ({ search }) => {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading clients";
  if (loading)
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>

        <Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
        />
        <Image
          size="small"
          style={{ marginTop: "10px" }}
          src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
        />
        <Image
          size="small"
          style={{ marginTop: "10px" }}
          src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
        />
      </Segment>
    );

  const searchQuery = data.clients.filter((query) =>
    query.phone.toLowerCase().includes(search)
  );

  if (searchQuery.length) {
    return (
      <List divided selection verticalAlign="middle">
        {searchQuery.map((client) => (
          <List.Item
            key={client.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <List.Content style={{ flex: 1 }}>
              <List.Header style={{ marginBottom: "10px" }}>
                {client.first_name} {client.surname}
              </List.Header>
              {client.addresses.length > 0
                ? `${client.addresses[0].number}, ${client.addresses[0].street}`
                : "nao tem"}
            </List.Content>
            <List.Content style={{ marginTop: "10px" }}>
              <Button>
                <Link href="/client/[id]" as={`/client/${client.id}`}>
                  <a>Detalhes</a>
                </Link>
              </Button>
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  } else {
    return <h4>No clients to show</h4>;
  }
};

export default ClientList;
