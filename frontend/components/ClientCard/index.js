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

  if (error) return <h1>Erro ao carregar os dados do cliente</h1>;
  console.log({ data, id: router.query.id });
  if (data && data.clients && data.clients.length) {
    const { clients } = data;
    return <h1>{clients[0].first_name}</h1>;
  }

  if (loading) {
    return <h1>carregando dados do cliente</h1>;
  }
};

export default ClientCard;
