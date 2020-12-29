import axios from "axios";

export const updateClient = ({ id, first_name, surname, phone, token }) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/clients/${id}`,
    {
      first_name,
      surname,
      phone,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createClient = ({
  first_name,
  surname,
  phone,
  address,
  token,
}) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/clients`,
    {
      first_name,
      surname,
      phone,
      address,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
