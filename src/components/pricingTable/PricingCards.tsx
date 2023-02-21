import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const CardStyle = {
  width: "370px",
  height: "523px",
  borderRadius: "50px",
  background: "#e0e0e0",
  boxShadow: " 20px 20px 60px #bebebe -20px -20px 60px #ffffff",
};
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const PricingCards = () => {
  return (
    // <Grid container spacing={2} alignItems="center">
    //   <Grid xs={4}>
    //     <Box sx={CardStyle}>
    //       <Box padding={2} textAlign="center" bgcolor="blue" overflow="hidden">
    //         <Typography variant="h4">شخصی</Typography>
    //         <Typography>12</Typography>
    //         <Typography>ماهانه</Typography>
    //       </Box>
    //       <Box></Box>
    //     </Box>
    //   </Grid>
    //   <Grid xs={4}>
    //     <Box bgcolor="red">fb</Box>
    //     <Box bgcolor="red">fb</Box>
    //     <Box bgcolor="red">fb</Box>
    //     <Box bgcolor="red">fb</Box>
    //   </Grid>
    //   <Grid xs={4}>
    //     <Box bgcolor="yellow">fb</Box>
    //   </Grid>
    // </Grid>
    <div
      style={{ height: "500px", borderRadius: "10px", backgroundColor: "red" }}
    >
      <div style={{ height: "20%", overflow: "auto", background: "blue" }}>
        dsvsnvn
      </div>
    </div>
  );
};
