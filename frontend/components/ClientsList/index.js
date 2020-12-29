import {
  Button,
  List,
  Dimmer,
  Loader,
  Image,
  Segment,
} from "semantic-ui-react";

import Link from "next/link";

const ClientList = ({ data }) => {
  console.log({ data });
  if (data.length) {
    return (
      <List divided selection verticalAlign="middle">
        {data.map((client) => (
          <List.Item
            key={client.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <List.Content style={{ flex: 1 }}>
              <List.Header style={{ marginBottom: "10px" }}>
                {client.first_name} {client.surname}
              </List.Header>
              {client.address
                ? `${client.address.number}, ${client.address.street}`
                : "nao tem"}

              <span style={{ display: "block", marginTop: "10px" }}>
                {client.phone}
              </span>
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
