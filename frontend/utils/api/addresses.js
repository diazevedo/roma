import axios from "axios";

export const updateAddress = ({
  address_id,
  street,
  number,
  complement,
  token,
}) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/addresses/${address_id}`,
    {
      street: street,
      number: number,
      complement: complement,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createAddress = ({ street, number, complement, token }) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/addresses`,
    {
      street: street,
      number: number,
      complement: complement,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
