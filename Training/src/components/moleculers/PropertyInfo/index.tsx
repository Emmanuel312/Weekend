import React from "react";

import { Container } from "./styles";
import { PriceText, PropertyDescriptionText } from "../../atoms";

const PropertyInfo: React.FC = () => {
  return (
    <Container>
      <PriceText text="$2000"></PriceText>
      <PropertyDescriptionText text="635 jacobs Stream " />
    </Container>
  );
};

export default PropertyInfo;
