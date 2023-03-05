import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../ui/Input/Input";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { Box } from "@mui/system";
interface selectedSubjectFrom {
  subject: string;
  difficulty: string;
  time: string;
}

const inputRules = {
  required: {
    message: "لطفا فیلد را پر کنید",
    value: true,
  },
  max: {
    message: "میزان زمان وارد شده باید کمتر از 120 دقیقه باشد",
    value: 120,
  },
  min: {
    message: "میزان زمان وارد شده باید بیشتر از 10 دقیقه باشد",
    value: 10,
  },
};
export const SelectSubject = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<selectedSubjectFrom>({
    defaultValues: {
      subject: "",
      difficulty: "",
      time: "",
    },
  });

  const onSubmit = (data: selectedSubjectFrom) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Controller
            name="subject"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="درس"
                error={!!errors.subject}
              >
                <MenuItem value="01f">ریاضی</MenuItem>
                <MenuItem value="02f">علوم</MenuItem>
                <MenuItem value="03f">هندسه </MenuItem>
              </SelectBox>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="difficulty"
            control={control}
            rules={{
              required: { value: true, message: "این فیلد را پرکنید" },
            }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="میزان سختی"
                error={!!errors.difficulty}
              >
                <MenuItem value="01s">آسان</MenuItem>
                <MenuItem value="02s">متوسط</MenuItem>
                <MenuItem value="03s">سخت</MenuItem>
              </SelectBox>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="time"
            control={control}
            rules={inputRules}
            render={({ field }) => (
              <Input
                {...field}
                label="زمان"
                fullWidth
                error={!!errors.time}
                helperText={errors.time ? errors.time.message : ""}
              />
            )}
          />
        </Grid>
      </Grid>
      <Button variant="contained" type="submit">
        اتمام
      </Button>
    </form>
  );
};
