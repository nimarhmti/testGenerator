import { Button, Grid, MenuItem } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
interface InitializeForm {
  grade: string;
  typeOfExam: string;
  scoreAmount: string;
}

export const Initialize = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InitializeForm>({
    defaultValues: {
      grade: "",
      typeOfExam: "",
      scoreAmount: "",
    },
  });

  const onSubmit = (data: InitializeForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Controller
            name="grade"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="مقطع"
                error={!!errors.grade}
              >
                <MenuItem value="01f">ابتدایی</MenuItem>
                <MenuItem value="02f">متوسطه اول</MenuItem>
                <MenuItem value="03f">متوسه دوم</MenuItem>
              </SelectBox>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="typeOfExam"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="جمع نمرات"
                error={!!errors.scoreAmount}
              >
                <MenuItem value="01s">5</MenuItem>
                <MenuItem value="02s">10</MenuItem>
                <MenuItem value="03s">15</MenuItem>
                <MenuItem value="04s">20</MenuItem>
              </SelectBox>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="scoreAmount"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                handleChange={onChange}
                value={value}
                inputLabel="نوع آزمون"
                error={!!errors.scoreAmount}
              >
                <MenuItem value="01t">مستمر</MenuItem>
                <MenuItem value="02t"> میان ترم</MenuItem>
                <MenuItem value="03t">پایانی </MenuItem>
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
