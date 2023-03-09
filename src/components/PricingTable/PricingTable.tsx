import {
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { ContainerWrapper } from "../ui/wrappers/ContainerWrapper";
import "./PricingTable.css";
interface pricingCardModel {
  duration: string;
  discount: string;
  id: number;
}

const pricingCard: pricingCardModel[] = [
  { duration: "با خرید اشتراک ۳ ماهه", discount: "٪۱۶", id: 1 },
  { duration: "با خرید اشتراک ۶ ماهه", discount: "۲ ماه ", id: 2 },
  { duration: "با خرید اشتراک یک ساله", discount: "٪۱۶", id: 3 },
];

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "70px",
  padding: "0 80px 0 80px",
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.primary,
  // height: 200,
  padding: 20,
  lineHeight: "60px",
}));
export const PricingTable = () => {
  const paymentHandler = (id: number) => {
    return;
  };
  return (
    <Box
      borderRadius="0% 100% 43% 57% / 48% 0% 100% 52% "
      height="100vh"
      bgcolor="#fff"
    >
      <ContainerWrapper>
        <Box height="50%" sx={boxStyle}>
          <Box sx={{ textAlign: "end" }}>
            <Typography
              variant="h2"
              fontWeight="700"
              marginBottom="8px"
              color="#1976D2"
            >
              ساخت فرم آنلاین
            </Typography>
            <Typography variant="body1" fontWeight="600" textAlign="start">
              <Chip label="آزمون ساز رایگان بدون محدودیت زمانی استفاده نمایید" />
            </Typography>
          </Box>
          <img src="./img/BeFunky-collage.jpg" style={{ width: "400px" }} />
        </Box>
        <Box textAlign="center" mt={4}>
          <Typography fontSize="18px" fontWeight={500}>
            مورد اعتماد بیش از 88 هزار همراه و برندهای معتبر
          </Typography>
          <Typography fontSize="20px" color="#FF9968" fontWeight={600} mt={1}>
            با خرید اشتراک 1 ساله، هزینه 2 ماه را تخفیف بگیرید
          </Typography>
        </Box>
        <Box height="50%" sx={boxStyle}>
          <Grid container spacing={2}>
            {pricingCard.map((item: pricingCardModel) => (
              <Grid item xs={4}>
                <Item>
                  <Typography variant="h5" fontWeight={700}>
                    {item.duration}
                  </Typography>
                  <Typography variant="h3" fontWeight={800} color="#1976D2">
                    {item.discount}
                  </Typography>
                  <Typography variant="h6" color="#249689" fontWeight={600}>
                    کمتر پرداخت کنید
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => paymentHandler(item.id)}
                  >
                    خرید
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};
