import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";

const SearchButton: React.FC = () => {
  return (
    <Container>
      <Feather name="search" size={15} color="#ccc" />
    </Container>
  );
};

export default SearchButton;
