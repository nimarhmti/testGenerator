import { atom } from "jotai";

export interface initialState {
  sectionId: number | string;
  amountOfScore: number | string;
  typeOfExam: string;
}

export const InitializeState = atom<initialState>({
  sectionId: 0,
  amountOfScore: 5,
  typeOfExam: "",
});
