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

interface ItemModel {
  value: string | number;
  title: string;
}

const difficultyListItem: ItemModel[] = [
  { value: "d1", title: "آسان" },
  { value: "d2", title: "متوسط" },
  { value: "d3", title: "سخت" },
];
const subjectListItem: ItemModel[] = [
  { value: "s1", title: "ریاضی" },
  { value: "s2", title: "علوم" },
  { value: "s3", title: "دینی" },
];

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
    console.log(errors);
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
                inputLabel="موضوع"
                error={!!errors.subject}
              >
                {subjectListItem.map((item: ItemModel) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
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
                {difficultyListItem.map((item: ItemModel) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
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
      <Box
        sx={{
          marginTop: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" type="submit">
          قبلی
        </Button>
        <Button variant="contained" type="submit">
          بعدی
        </Button>
      </Box>
    </form>
  );
};
