import styled from "styled-components";

import Layout from "../components/Layout/index";

export default function Main() {
  return (
    <Layout>
      <Title>My page</Title>
    </Layout>
  );
}

const Title = styled.h1``;
