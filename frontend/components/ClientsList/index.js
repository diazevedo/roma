import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";

const QUERY = gql`
  {
    clients {
      id
      first_name
      phone
    }
  }
`;

const ClientList = ({ search }) => {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading clients";
  if (loading) return <h1>Carregando</h1>;
  if (data.clients && data.clients.length) {
    const searchQuery = data.clients.filter((query) =>
      query.first_name.toLowerCase().includes(search)
    );

    return (
      <>
        {searchQuery.map((client) => (
          <div key={client.id}>
            <h2>{client.first_name}</h2>
            <Link
              as={`/clients/${client.id}`}
              href={`/clients?id=${client.id}`}
            >
              <a className="btn btn-primary">View</a>
            </Link>
          </div>
        ))}
      </>
    );
  }

  return <h4>No clients to show</h4>;
};

export default ClientList;
