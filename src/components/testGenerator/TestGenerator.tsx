import { Box, Chip, MenuItem, TextField, Modal } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ContainerWrapper } from "../ui/wrappers/ContainerWrapper";
import { FromWrapper } from "../ui/wrappers/FromWrapper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "../ui/Input/Input";
import { SelectBox } from "../ui/SelectBox/SelectBox";
import { Initialize } from "./firstStep/Initialize";
import { SelectSubject } from "./secondStep/SelectSubject";
import { Preparing } from "./FinalStep/Preparing";
import { OrderTable } from "./Table/Table";
import { useAtom } from "jotai";
import { isAuthentication } from "../../store";
import AlertDialog from "./Dialog";
import { GetExam } from "./getExam/GetExam";
import { keys } from "../../config/Enum";
const steps = ["مرحله یک", "مرحله دوم", "مرحله آخر"];
export const TestGenerator = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [titleStep, setTitleStep] = React.useState<string>("مرحله اول");
  const [isLogIn, setIsLogIn] = useAtom(isAuthentication);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
    localStorage.removeItem(keys.ExamKey);
  };

  return (
    <>
      <AlertDialog
        open={open}
        dialogCloseHandler={handleClose}
        dialogOpenHandler={handleOpen}
      />
      <Box sx={{ padding: 3 }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <GetExam handleReset={handleReset} />
          ) : (
            <React.Fragment>
              <FromWrapper title={steps[activeStep]}>
                {activeStep === 0 ? (
                  <Initialize handleNext={handleNext} activeStep={activeStep} />
                ) : null}
                {activeStep === 1 ? (
                  <SelectSubject
                    handleNext={handleNext}
                    handleBack={handleBack}
                  />
                ) : null}
                {activeStep === 2 ? (
                  <Preparing
                    handleNext={handleNext}
                    handleBack={handleBack}
                    activeStep={activeStep}
                  />
                ) : null}
              </FromWrapper>
              <FromWrapper title="جدول سفارشات">
                <OrderTable />
              </FromWrapper>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </>
  );
};
