import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
}

const PropertyDescriptionText: React.FC<Props> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default PropertyDescriptionText;
