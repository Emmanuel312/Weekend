import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
}

const PriceText: React.FC<Props> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default PriceText;
