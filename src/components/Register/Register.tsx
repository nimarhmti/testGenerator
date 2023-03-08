import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { ContainerWrapper } from "../ui/wrappers/ContainerWrapper";
import { Form } from "./Form";

export const RegisterForm = () => {
  return (
    <Box
      sx={{
        width: "729px",
        height: "414px",
        borderRadius: "29px",
        boxShadow: "15px 15px 30px #d3d3d3,-15px -15px 30px #ededed",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        width="45%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Form />
      </Box>
      <Box width="55%" height="100%">
        <img
          src="./img/1.png"
          alt="photo"
          height="420px"
          style={{ objectFit: "cover", marginLeft: "50px" }}
        />
      </Box>
    </Box>
  );
};