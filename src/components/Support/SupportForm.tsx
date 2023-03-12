import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";
import { FromWrapper } from "../ui/wrappers/FromWrapper";

export const SupportForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FromWrapper title="ثبت نظر">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            نام
          </Typography>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            نام خانوادگی
          </Typography>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            آدرس
          </Typography>
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            ایمیل
          </Typography>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            شماره تماس
          </Typography>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ mr: 1, mb: 1 }}>
            متن پیام
          </Typography>
          <Controller
            name="text"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} multiline rows={3} />}
          />
        </Grid>
      </Grid>
      <Button sx={{ mt: 1 }} variant="contained" color="success">
        ثبت
      </Button>
    </FromWrapper>
  );
};
