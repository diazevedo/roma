/* /pages/restaurants.js */
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

const GET_CLIENT_ADDRESSES = gql`
  query($id: String!) {
    clients(where: { id: $id }) {
      id
      first_name
      addresses {
        id
        street
      }
    }
  }
`;

const ClientCard = ({ id }) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_CLIENT_ADDRESSES, {
    variables: { id: router.query.id },
  });

  if (error) return "Error Loading Dishes";

  if (loading) return <h1>Loading ...</h1>;

  if (data.clients && data.clients.length) {
    const { clients } = data;
    return <h1>{clients[0].first_name}</h1>;
  }
};

export default ClientCard;
