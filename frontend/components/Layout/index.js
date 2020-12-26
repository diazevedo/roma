import React from "react";
import Link from "next/link";
import { Menu, Container } from "semantic-ui-react";

import AppContext from "../../context/AppContext";

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

  const { isAuthenticated } = React.useContext(AppContext);

  const handleClick = (event) =>
    setActiveItem(event.target.getAttribute("custom_name"));

  return (
    <Container style={styles.container}>
      {isAuthenticated && (
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
                />
              </Link>

              <Link href="/logout">
                <Menu.Item
                  name="logout"
                  custom_name="logout"
                  onClick={(e) => handleClick(e)}
                  active={activeItem === "logout"}
                >
                  Log out
                </Menu.Item>
              </Link>
            </Menu>
          </nav>
        </S.Header>
      )}

      <S.Main>{children}</S.Main>
    </Container>
  );
};

export default Layout;
