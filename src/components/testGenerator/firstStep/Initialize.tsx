import { Button, Grid, MenuItem, Box } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
interface InitializeForm {
  grade: string;
  typeOfExam: string;
  scoreAmount: string;
}
interface ItemModel {
  value: string | number;
  title: string;
}
const gradeItems: ItemModel[] = [
  { value: "g1", title: "ابتدایی" },
  { value: "g2", title: "متوسطه اول" },
  { value: "g3", title: "متوسطه دوم" },
];
const typeOfExamItems: ItemModel[] = [
  { value: "t1", title: "مستمر" },
  { value: "t2", title: "میان ترم" },
  { value: "t3", title: "پایان ترم" },
];
const scoreAmountItems: ItemModel[] = [
  { value: "s5", title: "5" },
  { value: "s10", title: "10" },
  { value: "s15", title: "15" },
  { value: "s20", title: "20" },
];

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
                {gradeItems.map((item: ItemModel) => (
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
                {scoreAmountItems.map((item: ItemModel) => (
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
                {typeOfExamItems.map((item: ItemModel) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
              </SelectBox>
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
