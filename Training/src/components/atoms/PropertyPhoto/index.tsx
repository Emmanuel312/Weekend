import React from "react";
import { Container } from "./styles";

const PropertyPhoto: React.FC = () => {
  return (
    <Container
      source={{
        uri:
          "https://cdn.vox-cdn.com/thumbor/wnSMTEJ9rkQJhNizLE_wSnvUPD4=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/67171421/Misty_Taupe_BB.0.jpg",
      }}
    />
  );
};

export default PropertyPhoto;
