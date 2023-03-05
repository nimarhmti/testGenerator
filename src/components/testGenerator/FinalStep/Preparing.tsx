import { Button, Grid, MenuItem } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
interface inputeModel {
  issue: string;
  numberOfQuestions: number;
}
export const Preparing = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<inputeModel>({
    defaultValues: {
      issue: "",
      numberOfQuestions: 3,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="issue"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="درس"
                error={!!errors.issue}
              >
                <MenuItem value="01f">ریاضی</MenuItem>
                <MenuItem value="02f">علوم</MenuItem>
                <MenuItem value="03f">هندسه </MenuItem>
              </SelectBox>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="numberOfQuestions"
            control={control}
            rules={{
              required: { value: true, message: "این فیلد را پرکنید" },
            }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={[value]}
                inputLabel="میزان سختی"
                error={!!errors.numberOfQuestions}
                multiple
              >
                <MenuItem value="01s">آسان</MenuItem>
                <MenuItem value="02s">متوسط</MenuItem>
                <MenuItem value="03s">سخت</MenuItem>
              </SelectBox>
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
