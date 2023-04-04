import {
  Button,
  Grid,
  MenuItem,
  Box,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectBox } from "../../ui/SelectBox/SelectBox";
import { Input } from "../../ui/Input/Input";
import {
  useGetLecture,
  useSubmitOrder,
} from "../../../services/PreparingStep/PreparingStep.query";
import { selectSubjectState } from "../secondStep/SelectSubjectState/SelectSubjectState";
import { preParingStepField } from "./PreparingStepState/PreparinStepState";
import { InitializeState } from "../firstStep/State/InitializeState";
import AlertDialog from "../../ui/AlertDialog/Alertdialog";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
const keyName = "درس";
export const Preparing = ({ handleBack, handleNext, activeStep }: props) => {
  const [episode, setEpisode] = useState<string[]>([]);
  //dialogAlert State
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //submit order apiCall
  const { mutate: submitOrder } = useSubmitOrder();
  //prev Step filed :initialize Step
  const [InitializeStateField] = useAtom(InitializeState);
  //prev Step field:selectSubject Step
  const [selectSubjectField] = useAtom(selectSubjectState);
  //current step field :preparing step
  const [preParingField, setPreParingField] = useAtom(preParingStepField);
  //get lectures apiCall
  const { data: Lectures, isLoading } = useGetLecture(selectSubjectField.topic);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<inputModel>({
    defaultValues: {
      timing: 20,
    },
  });

  const handleChange = (event: SelectChangeEvent<typeof episode>) => {
    const {
      target: { value },
    } = event;
    setEpisode(typeof value === "string" ? value.split(",") : value);
  };
  const mapLecture = (amount: number) => {
    const result = [];
    for (let i = 1; i <= amount; i++) {
      result.push({
        lecture: String(i),
        id: String(Math.floor(Math.random() * 100000000)),
        name: keyName + " " + i,
      });
    }
    return result;
  };
  const closeModalHandler = () => {
    setIsOpen(false);
    handleNext();
  };
  const onSubmit = (data: any) => {
    if (errors) {
      submitOrder(
        {
          time: data.timing,
          type: InitializeStateField.typeOfExam,
          max_scoure: InitializeStateField.amountOfScore,
          level: selectSubjectField.level,
          topic_id: selectSubjectField.topic,
          lectures: episode,
        },
        {
          onSuccess() {
            setIsOpen(true);
          },
          onError() {},
        }
      );
    } else return;
  };

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <AlertDialog isOpen={isOpen} onClose={closeModalHandler}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography variant="h6" fontWeight={700}>
                سفارش با موفقیت ثبت شد
              </Typography>
              <CheckCircleOutlineIcon color="success" />
            </Box>
          </AlertDialog>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SelectBox
                  handleChange={handleChange}
                  value={episode}
                  inputLabel="درس"
                  multiple
                >
                  {mapLecture(Lectures).map(
                    (item: { lecture: string; id: string; name: string }) => {
                      return (
                        <MenuItem value={item.lecture} key={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    }
                  )}
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
        </>
      )}
    </>
  );
};
