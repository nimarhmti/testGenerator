import { Button, Grid, MenuItem, Box } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { Input } from "../../ui/Input/Input";
interface inputModel {
  timing: number;
}

interface preparingItemModel {
  value: string | number;
  title: string | number;
}
interface props {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
}
const episodeList: preparingItemModel[] = [
  { value: "sssss", title: "درس 1" },
  { value: "eeee", title: "درس 2" },
  { value: "ffff", title: "درس 3" },
  { value: "rrrr", title: "درس 4" },
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
    message: "میزان زمان وارد شده باید بیشتر از 20 دقیقه باشد",
    value: 20,
  },
};

export const Preparing = ({ handleBack, handleNext, activeStep }: props) => {
  const [episode, setEpisode] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<inputModel>({
    defaultValues: {
      timing: 3,
    },
  });

  const handleChange = (event: SelectChangeEvent<typeof episode>) => {
    const {
      target: { value },
    } = event;
    setEpisode(typeof value === "string" ? value.split(",") : value);
  };

  const onSubmit = (data: any) => {
    console.log({ ...data, episode });
    handleNext();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SelectBox
            handleChange={handleChange}
            value={episode}
            inputLabel="درس"
            multiple
          >
            {episodeList.map((item: preparingItemModel) => {
              return (
                <MenuItem value={item.value} key={item.value}>
                  {item.title}
                </MenuItem>
              );
            })}
          </SelectBox>
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="timing"
            control={control}
            rules={inputRules}
            render={({ field }) => (
              <Input
                {...field}
                error={!!errors.timing}
                label="زمان"
                helperText={errors.timing ? errors.timing?.message : ""}
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
        <Button variant="contained" onClick={handleBack}>
          قبلی
        </Button>
        <Button variant="contained" type="submit" color="success">
          اتمام
        </Button>
      </Box>
    </form>
  );
};
