import React from "react";
import { Container } from "./styles";
import { PropertyInfo } from "../../moleculers";
import { PropertyPhoto } from "../../atoms";

const PropertyCard: React.FC = () => {
  return (
    <Container>
      <PropertyPhoto />
      <PropertyInfo />
    </Container>
  );
};

export default PropertyCard;
