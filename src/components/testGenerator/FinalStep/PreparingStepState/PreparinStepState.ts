import { atom } from "jotai";

export interface initialState {
  lecture: string[];
  time: number;
}

export const preParingStepField = atom<initialState>({
  lecture: [],
  time: 20,
});
