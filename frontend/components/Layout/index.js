import React from "react";
import Link from "next/link";
import { Menu, Container } from "semantic-ui-react";

import * as S from "./styles";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    padding: "20px",
  },
};

const Layout = ({ children }) => {
  const [activeItem, setActiveItem] = React.useState();

  const handleClick = (event) =>
    setActiveItem(event.target.getAttribute("custom_name"));

  return (
    <Container style={styles.container}>
      <S.Header>
        <nav>
          <Menu>
            <Menu.Item header>Roma</Menu.Item>
            <Link href="/">
              <Menu.Item
                name="home"
                custom_name="home"
                active={activeItem === "home"}
                onClick={(e) => handleClick(e)}
              ></Menu.Item>
            </Link>
            <Link href="/signin">
              <Menu.Item
                name="signin"
                custom_name="signin"
                onClick={(e) => handleClick(e)}
                active={activeItem === "signin"}
              >
                Sign In
              </Menu.Item>
            </Link>
          </Menu>
        </nav>
      </S.Header>
      <S.Main>{children}</S.Main>
    </Container>
  );
};

export default Layout;
