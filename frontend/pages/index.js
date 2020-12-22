import React from "react";
import styled from "styled-components";

import ClientList from "../components/ClientsList";

export default function Main() {
  const [query, updateQuery] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
      />
      <ClientList search={query} />
    </div>
  );
}

const Title = styled.h1``;
