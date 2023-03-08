import { Box } from "@mui/material";
import React from "react";
import { RegisterForm } from "../../components/Register/Register";

export const Register = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // backgroundColor: "#b3cdd1",
        // backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RegisterForm />
    </Box>
  );
};
