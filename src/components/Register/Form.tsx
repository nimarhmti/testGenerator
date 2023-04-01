import { Button, Grid, makeStyles, Typography } from "@mui/material";
import { Box, display, width } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";
import { useAtom } from "jotai";
import {
  useUserAuthentication,
  useUserLogIn,
} from "../../services/application_authentication/appAuthentication.query";

import { isAuthentication } from "../../store";
import { AlertInfo, AlertMessage } from "../ui/Alert/Alert";

interface registerInputModel {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

const centeringStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};
const emailRules = {
  required: {
    message: "لطفا فیلد را پر کنید",
    value: true,
  },
  min: {
    message: "ایملی با طول بیشتر وارد کنید",
    value: 4,
  },
  parent: {
    message: "ایمیل را به درستی وارد کنید",
    value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
  },
};
const passRules = {
  required: {
    message: "لطفا فیلد را پر کنید",
    value: true,
  },
  min: {
    message: "لطفا رمزی با طول بیشتر وارد کنید",
    value: 4,
  },
};

export const Form = () => {
  const [isSignUpPage, setIsSignUpPage] = useState<boolean>(false);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthentication);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({
    message: "",
    result: false,
  });
  const { mutate: userSignIn } = useUserAuthentication();
  const { mutate: userLogin } = useUserLogIn();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registerInputModel>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const redirectHandler = () => {
    setIsLoginPage(!isLoginPage);
    setIsSignUpPage(!isSignUpPage);
  };
  const onSubmit = (data: registerInputModel) => {
    if (isSignUpPage) {
      userSignIn(data, {
        onSuccess() {
          setIsAuthenticated(true);
          setAlertInfo({ message: "ثبت نام با موفقیت نجام شد", result: true });
          setOpenAlert(true);
          navigate("/quizBuilder");
          reset();
        },
        onError() {
          setAlertInfo({ message: "بروز خطا در هنگام ثبت نام", result: false });
          setOpenAlert(true);
        },
      });
    } else {
      userLogin(
        { email: data.email, password: data.password },
        {
          onSuccess() {
            setIsAuthenticated(true);
            setAlertInfo({ message: "ورود با موفقیت نجام شد", result: true });
            setOpenAlert(true);
            navigate("/quizBuilder");
            reset();
          },
          onError() {
            setAlertInfo({
              message: "بروز خطا در هنگام ورود ",
              result: false,
            });
            setOpenAlert(true);
          },
        }
      );
    }
  };
  return (
    <>
      <AlertMessage
        message={alertInfo.message}
        result={alertInfo.result}
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} flexDirection="column">
          <Grid
            item
            xs={12}
            sx={{ ...centeringStyle, flexDirection: "column" }}
          >
            <Typography variant="h5" fontWeight={700} color="#F08C00">
              ورود به سایت آزمون ساز
            </Typography>
            <Typography variant="caption" color="#495057" fontWeight="400">
              برای دسترسی بیشتر به منابع لطفا ثبت نام کنید
            </Typography>
          </Grid>
          {isSignUpPage ? (
            <Grid item xs={12} sx={centeringStyle}>
              <Controller
                name="name"
                control={control}
                rules={emailRules}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="نام کاربری"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                )}
              />
            </Grid>
          ) : null}

          <Grid item xs={12} sx={centeringStyle}>
            <Controller
              name="email"
              control={control}
              rules={emailRules}
              render={({ field }) => (
                <Input
                  {...field}
                  label="ایمیل"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={centeringStyle}>
            <Controller
              name="password"
              control={control}
              rules={passRules}
              render={({ field }) => (
                <Input
                  type="password"
                  {...field}
                  label="رمز"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              )}
            />
          </Grid>
          {isSignUpPage ? (
            <Grid item xs={12} sx={centeringStyle}>
              <Controller
                name="password_confirmation"
                control={control}
                rules={passRules}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="تکرار رمز"
                    fullWidth
                    error={!!errors.password_confirmation}
                    helperText={
                      errors.password_confirmation
                        ? errors.password_confirmation.message
                        : ""
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
                color={isLoginPage ? "primary" : "success"}
                sx={{ width: "70%" }}
              >
                {isLoginPage ? "ورود" : "ثبت نام"}
              </Button>

              <Typography
                variant="caption"
                color="#495057"
                fontWeight="400"
                mt={1}
                onClick={redirectHandler}
                sx={{ cursor: "pointer" }}
              >
                {isLoginPage ? " ورود به صفحه ثبت نام" : "برای ورود کلیک کنید"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
