import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { api } from "../../config/axios";
import { ContainerWrapper } from "../ui/wrappers/ContainerWrapper";
import { Form } from "./Form";

// const BASE = process.env.BASE_API;

export const RegisterForm = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await api.post("", {
  //       name: "",
  //       email: "",
  //       pass: "",
  //     });
  //   };
  //   fetchData().catch((err) => console.log(err.message));
  // }, []);

  return (
    <Box
      sx={{
        width: "729px",
        height: "420px",
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
        paddingTop={3}
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
