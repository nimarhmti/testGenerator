import { Button, Grid, MenuItem, Box, LinearProgress } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { useGetSection } from "../../../services/initializeStep/initializeStep.query";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { InitializeState } from "./State/InitializeState";

interface InitializeForm {
  sections: string | number;
  examScore: string | number;
  typeOfExam: string;
}
interface sectionsModel {
  name: string;
  id: string;
}
interface maxScoreModel {
  id: string;
  value: number;
}

interface TypeOfExam {
  id: string;
  level: string;
}
interface props {
  handleNext: () => void;
  // handleBack: () => void;
  activeStep: number;
}

const amountScore: maxScoreModel[] = [
  { id: "s1", value: 5 },
  { id: "s2", value: 10 },
  { id: "s3", value: 15 },
  { id: "s4", value: 20 },
];

const typeOfExamItems: TypeOfExam[] = [
  { id: "L1", level: "میان ترم" },
  { id: "L2", level: "مستمر" },
  { id: "L3", level: "پایان" },
];

export const Initialize = ({ handleNext, activeStep }: props) => {
  const { data: sectionItem, isLoading } = useGetSection();
  const [initialField, setInitialField] = useAtom(InitializeState);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InitializeForm>({
    defaultValues: {
      sections: "",
      examScore: "",
      typeOfExam: "",
    },
  });

  const onSubmit = (data: InitializeForm) => {
    if (errors) {
      setInitialField({
        sectionId: data.sections,
        amountOfScore: data.examScore,
        typeOfExam: data.typeOfExam,
      });
      handleNext();
    }
    if (!errors) return;
  };
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Controller
                name="sections"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <SelectBox
                    handleChange={onChange}
                    value={value}
                    inputLabel="مقطع"
                    error={!!errors.sections}
                  >
                    {sectionItem.map((item: sectionsModel) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </SelectBox>
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="examScore"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <SelectBox
                    handleChange={onChange}
                    value={value}
                    inputLabel="جمع نمرات"
                    error={!!errors.examScore}
                  >
                    {amountScore.map((item: maxScoreModel) => (
                      <MenuItem key={item.id} value={item.value}>
                        {item.value}
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
                    inputLabel="نوع آزمون"
                    error={!!errors.typeOfExam}
                  >
                    {typeOfExamItems.map((item: TypeOfExam) => (
                      <MenuItem value={item.level} key={item.id}>
                        {item.level}
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
            <Button variant="contained" color="success" type="submit" disabled>
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
