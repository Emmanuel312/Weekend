import React from "react";
import { Container } from "./styles";
import { Header } from "../../components/moleculers";
import PropertyCard from "../../components/organisms/PropertyCard";
import { ScrollView } from "react-native";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </ScrollView>
    </Container>
  );
};

export default Main;
