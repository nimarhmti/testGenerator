import { SvgIconProps } from "@mui/material";
import type { FunctionComponent, SVGProps } from "react";

export interface linksModel {
  icon?: React.ReactElement<SvgIconProps>;
  title: string;
  to: string;
  id: string;
}

export const Links: linksModel[] = [
  { title: "ثبت نام ", to: "/register", id: "Register" },
  { title: "ورود", to: "/login", id: "LogIn" },
  { title: "آزمون ساز", to: "/quizBuilder", id: "QuizBuilder" },
  { title: "تعرفه ها", to: "/pricing", id: "Pricing" },
  { title: "پشتیبانی", to: "/support", id: "Support" },
  { title: "نمونه ها", to: "/templates", id: "Templates" },
  { title: "آزمون ساز", to: "/", id: "testMaker" },
];
