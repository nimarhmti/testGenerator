import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, LinearProgress } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../ui/Input/Input";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { Box } from "@mui/system";
import { useGetTopic } from "../../../services/SelectSubjectStep/SelectSubject.query";
import { useAtom } from "jotai";
import { InitializeState } from "../firstStep/State/InitializeState";
import { getTopicModel } from "../../../services/SelectSubjectStep/SelectSubject.interface";
import { selectSubjectState } from "./SelectSubjectState/SelectSubjectState";
interface selectedSubjectFrom {
  subject: string;
  difficulty: string;
}
interface props {
  handleNext: () => void;
  handleBack: () => void;
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

export const SelectSubject = ({ handleBack, handleNext }: props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<selectedSubjectFrom>({
    defaultValues: {
      subject: "",
      difficulty: "",
    },
  });
  //prev step filed :step[0]
  const [initialField] = useAtom(InitializeState);
  //current step filed: step[1]
  const [selectSubjectField, setSelectSubjectField] =
    useAtom(selectSubjectState);
  const { data: topics, isLoading } = useGetTopic(initialField.sectionId);
  const onSubmit = (data: selectedSubjectFrom) => {
    if (errors) {
      //thats mean there is no any error
      setSelectSubjectField({ topic: data.subject, level: data.difficulty });
      handleNext();
    } else return;
  };

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                    {topics.map((item: getTopicModel) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </SelectBox>
                )}
              />
            </Grid>
            <Grid item xs={6}>
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
                      <MenuItem value={item.title} key={item.value}>
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
            <Button variant="contained" onClick={handleBack}>
              بازگشت
            </Button>
            <Button variant="contained" color="success" type="submit">
              ادامه
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};
