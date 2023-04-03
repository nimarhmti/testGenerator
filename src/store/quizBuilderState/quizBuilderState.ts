import React from "react";
import { atom } from "jotai";
import { orders } from "../../services/application_authentication/appAuthentication.interface";

export interface quizBuilderField {
  sectionId: number;
  examScore: number;
  typeOfExam: string;
  topicId: string;
  level: string;
  lectures: string[];
  time: number;
}
const initialState: quizBuilderField = {
  sectionId: 0,
  examScore: 0,
  typeOfExam: "",
  topicId: "",
  level: "",
  lectures: [],
  time: 20,
};
export const examOrders = atom<quizBuilderField>(initialState);
