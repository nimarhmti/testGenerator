import { useQuery, useMutation } from "react-query";
import { getLectures, getQuiz, submitOrder } from "./preparingStep.api";
import { submitOrderModel } from "./PreparingStep.interfacei";

export const useGetLecture = (id: number | string) =>
  useQuery({
    queryKey: "lectures",
    queryFn: () => getLectures(id),
    keepPreviousData: true,
  });

export const useSubmitOrder = () =>
  useMutation((data: submitOrderModel) => submitOrder(data));

export const useGetQuiz = (id: number | string | null) =>
  useQuery({
    queryKey: "Questions",
    queryFn: () => getQuiz(id),
  });
