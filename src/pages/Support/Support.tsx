import { Box, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { SupportForm } from "../../components/Support/SupportForm";
import { ContainerWrapper } from "../../components/ui/wrappers/ContainerWrapper";

export const Support = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#1976D2",
          height: "300px",
          color: "#fff",
        }}
      >
        <ContainerWrapper>
          <Typography variant="h2" fontWeight={700} pt={10} mr={7}>
            ارتباط با ما
          </Typography>
          <Typography variant="body1" mr={7}>
            جهت ارتباط با ما از طریق ایمیل، تلفن و یا با ثبت فرم در ارتباط باشید
          </Typography>
        </ContainerWrapper>
      </Box>
      <ContainerWrapper>
        <Box>
          <SupportForm />
        </Box>
        <Box padding={4}>
          <Typography variant="body1" mb={1}>
            جهت ارتباط با فرم افزار می توانید با شماره های تلفن در ساعات کاری
            تماس حاصل فرمایید. با فرم افزار به صورت آنلاین می توانید گفتگو کنید
            و سوالات خود را از کارشناسان ما بپرسید.
          </Typography>
          <Typography variant="body1" mb={1}>
            در صورت نیاز به امکانات جدید در فرم ساز، با ثبت فرم "پیشنهاد امکانات
            جدید" در بخش پشتبانی و ثبت موارد مورد نیاز، اطلاعات شما توسط
            کارشناسان بررسی و پاسخ دهی می نمایند.
          </Typography>
          <Typography variant="body1" mb={4}>
            فرم ساز به صورت دوره ای آپدیت شده و امکانات و ابزارهای جدید به سیستم
            اضافه می شود.
          </Typography>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};
