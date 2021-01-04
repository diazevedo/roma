export const prepareData = (clientData) => {
  const { address = {} } = clientData;

  const clienteAddress = address ? address : {};

  const prepared = {
    id: clientData.id || "",
    first_name: clientData.first_name || "",
    surname: clientData.surname || "",
    phone: clientData.phone || "",
    street: clienteAddress.street || "",
    number: clienteAddress.number || "",
    complement: clienteAddress.complement || "",
    address_id: clienteAddress.id || "",
  };

  return prepared;
};
