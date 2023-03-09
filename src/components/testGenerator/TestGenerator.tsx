import { Box, Chip, MenuItem, TextField } from "@mui/material";
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
const steps = ["مرحله یک", "مرحله دوم", "مرحله سوم"];
export const TestGenerator = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

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
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
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
  };

  return (
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
          <FromWrapper title="جدول سفارشات">
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Chip label="برای دریافت سوالات کلیک کنید..." color="success" />
              <Button
                variant="outlined"
                color="success"
                sx={{ marginRight: 1, width: "10px" }}
              >
                دیافت
              </Button>
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 1 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset} variant="contained">
                ثبت سفارش
              </Button>
            </Box>

            <OrderTable />
          </FromWrapper>
        ) : (
          <React.Fragment>
            <FromWrapper title="مرحله اول">
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
  );
};
