import { Button, Grid, Typography } from "@mui/material";
import { Box, display, width } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";
interface registerModel {
  userName: string;
  password: string;
  confirmPassword?: string;
}
// interface signUpModel {
//   userName: string;
//   password: string;
//   confirmPassword?: string;
// }
const centeringStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};
export const Form = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerModel>({
    defaultValues: {
      password: "",
      userName: "",
    },
  });
  const redirectHandler = () => {
    setIsLogin(!isLogin);
    setIsSignUp(!isSignUp);
  };
  const onSubmit = (data: any) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} flexDirection="column">
        <Grid item xs={12} sx={{ ...centeringStyle, flexDirection: "column" }}>
          <Typography variant="h5" fontWeight={700} color="#F08C00">
            ورود به سایت آزمون ساز
          </Typography>
          <Typography variant="caption" color="#495057" fontWeight="400">
            برای دسترسی بیشتر به منابع لطفا ثبت نام کنید
          </Typography>
        </Grid>
        <Grid item xs={12} sx={centeringStyle}>
          <Controller
            name="userName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                label="نام کاربری"
                fullWidth
                error={!!errors.userName}
                helperText={errors.userName ? errors.userName.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sx={centeringStyle}>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                label="رمز"
                fullWidth
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />
        </Grid>
        {isSignUp ? (
          <Grid item xs={12} sx={centeringStyle}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="تکرار رمز"
                  fullWidth
                  error={!!errors.confirmPassword}
                  helperText={
                    errors.confirmPassword ? errors.confirmPassword.message : ""
                  }
                />
              )}
            />
          </Grid>
        ) : null}

        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color={isLogin ? "primary" : "success"}
              sx={{ width: "70%" }}
            >
              {isLogin ? "ورود" : "ثبت نام"}
            </Button>

            <Typography
              variant="caption"
              color="#495057"
              fontWeight="400"
              mt={1}
              onClick={redirectHandler}
              sx={{ cursor: "pointer" }}
            >
              {isLogin ? " ورود به صفحه ثبت نام" : "برای ورود کلیک کنید"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
