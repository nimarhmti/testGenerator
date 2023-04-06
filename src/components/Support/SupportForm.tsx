import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";
import { FromWrapper } from "../ui/wrappers/FromWrapper";
import { usePostComments } from "../../services/Comments/Comments.query";
import AlertDialog from "../ui/AlertDialog/Alertdialog";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
interface inputModel {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  comment: string;
}

export const SupportForm = () => {
  const { mutate: sendComment } = usePostComments();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputModel>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      comment: "",
    },
  });

  const closeModalHandler = () => {
    setIsOpen(false);
    reset();
  };
  const onSubmit = (data: inputModel) => {
    const { firstName, lastName, email, address, phoneNumber, comment } = data;

    if (errors) {
      sendComment(
        {
          fname: firstName,
          lname: lastName,
          address,
          email,
          comment,
          number: phoneNumber,
        },
        {
          onSuccess() {
            setIsOpen(true);
          },
          onError() {
            return;
          },
        }
      );
    }
  };

  return (
    <>
      <AlertDialog title="توجه" isOpen={isOpen} onClose={closeModalHandler}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography>انتقادات شما با موفقیت ثبت شد</Typography>
          <CheckCircleOutlineIcon color="success" />
        </Box>
      </AlertDialog>
      <FromWrapper title="ثبت نظر">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                name="comment"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} multiline rows={3} />}
              />
            </Grid>
          </Grid>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            color="success"
            type="submit"
          >
            ثبت
          </Button>
        </form>
      </FromWrapper>
    </>
  );
};
