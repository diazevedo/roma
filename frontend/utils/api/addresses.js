import axios from "axios";

export const updateAddress = ({ address_id, street, number, complement }) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/addresses/${address_id}`,
    {
      street: street,
      number: number,
      complement: complement,
    }
  );
};
