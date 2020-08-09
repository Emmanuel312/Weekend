import React from "react";
import { SearchButton, Title } from "../../atoms";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title text="Property List" />
      <SearchButton />
    </Container>
  );
};

export default Header;
