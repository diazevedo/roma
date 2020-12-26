export const prepareData = (clientData) => {
  const { addresses = {} } = clientData;

  const address = addresses.length > 0 ? addresses[0] : {};

  return {
    id: clientData.id || "",
    first_name: clientData.first_name || "",
    surname: clientData.surname || "",
    phone: clientData.phone || "",
    street: address.street || "",
    number: address.number || "",
    complement: address.complement || "",
    address_id: address.id || "",
  };
};
