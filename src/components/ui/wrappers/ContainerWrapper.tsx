import { Container } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";

export const ContainerWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};
