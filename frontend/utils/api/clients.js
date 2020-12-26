import axios from "axios";

export const updateClient = ({ id, first_name, surname, phone }) => {
  return axios.put(`${process.env.NEXT_PUBLIC_API_URL}/clients/${id}`, {
    first_name,
    surname,
    phone,
  });
};
