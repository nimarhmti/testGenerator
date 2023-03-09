import { Box } from "@mui/material";
import React from "react";
import { RegisterForm } from "../../components/Register/Register";

export const Register = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RegisterForm />
    </Box>
  );
};
