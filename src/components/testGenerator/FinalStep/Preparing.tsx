import { Button, Grid, MenuItem, Box } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { Input } from "../../ui/Input/Input";
interface inputModel {
  numberOfQuestions: number;
}

interface preparingItemModel {
  value: string | number;
  title: string | number;
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
    message: "حداکثر تعداد سوالات 30 میباشد",
    value: 30,
  },
  min: {
    message: "حداقل تعداد سوالات 3 مباشد ",
    value: 3,
  },
};
// ];

export const Preparing = () => {
  const [episode, setEpisode] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<inputModel>({
    defaultValues: {
      numberOfQuestions: 3,
    },
  });

  const handleChange = (event: SelectChangeEvent<typeof episode>) => {
    const {
      target: { value },
    } = event;
    setEpisode(typeof value === "string" ? value.split(",") : value);
  };

  const onSubmit = (data: any) => {
    console.log(data);

    console.log(episode);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SelectBox
            handleChange={handleChange}
            value={episode}
            inputLabel="درس"
            // error={!!episode.length}
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
            name="numberOfQuestions"
            control={control}
            rules={inputRules}
            render={({ field }) => (
              <Input
                {...field}
                error={!!errors.numberOfQuestions}
                helperText={
                  errors.numberOfQuestions
                    ? errors.numberOfQuestions?.message
                    : ""
                }
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
