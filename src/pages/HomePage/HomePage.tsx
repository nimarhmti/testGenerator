import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";
import { ContainerWrapper } from "../../components/ui/wrappers/ContainerWrapper";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      borderRadius="0% 100% 43% 57% / 48% 0% 100% 52% "
      height="100vh"
      bgcolor="#fff"
    >
      <ContainerWrapper>
        <Grid
          container
          direction="column"
          alignItems="center"
          padding={2.5}
          spacing={5}
          marginTop={1.6}
        >
          <Grid item xs={6}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: "500" }}
              color="#f08c00"
            >
              نرم افزار آزمون ساز آنلاین
            </Typography>
            <Typography
              component="p"
              fontSize="1.3rem"
              textAlign="center"
              sx={{ fontWeight: "bolder" }}
              marginTop="1rem"
              color="#1098ad"
            >
              طراحی آنلاین آزمون های تستی و تشریحی
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* <Box width="1100px" height="484px" bgcolor="red">
              dhvbjhb
            </Box> */}
            <Grid
              container
              width="988px"
              height="484px"
              alignItems="center"
              spacing={7}
            >
              <Grid item xs={6} spacing={7}>
                <Typography
                  variant="h4"
                  component="h3"
                  textAlign="start"
                  fontWeight={500}
                  marginBottom={2.5}
                >
                  معرفی نرم افزار آزمون ساز
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  textAlign="start"
                  marginBottom={3}
                  lineHeight="1.6"
                >
                  در شرایط کنونی که علم و فناوری جای کاغذ سنتی را گرفته و وجود
                  آلودگی هوا و بیماری های مزمن همه گیر شده، مدارس و آموزشگاه‌ها
                  به جای گرفتن آزمون های کاغذی، روش آزمون آنلاین را جایگزین
                  می‌کنند
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  textAlign="start"
                  lineHeight="1.6"
                >
                  آزمون ساز فرم افزار تمامی امکانات لازم جهت برگزاری یک آزمون
                  آنلاین را در اختیار معلمان، خانواده ها و اساتید دانشگاه و
                  موسسات جهت ارزیابی دانش پژوهان قرار داده است
                </Typography>
                <Box
                  display="flex"
                  marginTop={3}
                  alignItems="center"
                  gap="10px"
                >
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => navigate("/login")}
                  >
                    ورود
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#0c8599",
                    }}
                    onClick={() => navigate("/quizBuilder")}
                  >
                    ساخت آزمون
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                    background: "#e0e0e0",
                    boxShadow: "8px 8px 38px #cccccc, -8px -8px 38px #f4f4f4",
                  }}
                  src="./img/3.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
};
