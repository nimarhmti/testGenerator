import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { PricingCards } from "../../components/pricingTable/PricingCards";
import "./Pricing.css";
interface pricingContentModel {
  cardTitle: string;
  prici: number;
}
export const Pricing = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // columnGap: "200px",
        gap: "20px",
      }}
    >
      <Typography variant="h3" component="h2">
        suiiuii
      </Typography>
      <PricingCards />
    </Container>
  );
};
