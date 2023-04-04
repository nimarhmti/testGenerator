import { atom } from "jotai";

export interface initialState {
  topic: number | string;
  level: string;
}

export const selectSubjectState = atom<initialState>({
  topic: "",
  level: "",
});
