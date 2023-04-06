import { Box, Button, Chip, Typography, LinearProgress } from "@mui/material";
import React from "react";
import { FromWrapper } from "../../ui/wrappers/FromWrapper";
import { OrderTable } from "../Table/Table";
import { keys } from "../../../config/Enum";
import { useGetQuiz } from "../../../services/PreparingStep/PreparingStep.query";
interface Props {
  handleReset: () => void;
}
export const GetExam = ({ handleReset }: Props) => {
  const id = localStorage.getItem(keys.ExamKey);

  const { data: examDocs, isLoading } = useGetQuiz(id);
  const getExamHandler = () => {
    console.log(examDocs);
  };
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <FromWrapper title="دریافت سوالات">
          <Typography sx={{ mt: 2, mb: 1 }}>
            <Chip label="برای دریافت سوالات کلیک کنید..." color="success" />
            <Button
              variant="outlined"
              color="success"
              sx={{ marginRight: 1, width: "10px" }}
              onClick={getExamHandler}
            >
              دیافت
            </Button>
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 1 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} variant="contained">
              ثبت سفارش جدید
            </Button>
          </Box>

          <OrderTable />
        </FromWrapper>
      )}
    </>
  );
};
