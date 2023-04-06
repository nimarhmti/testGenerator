import { useQuery, useMutation } from "react-query";
import {
  getLectures,
  getOrders,
  getQuiz,
  submitOrder,
} from "./preparingStep.api";
import { submitOrderModel } from "./PreparingStep.interfacei";
import { queryClient } from "../../config/queryClient";

export const useGetLecture = (id: number | string) =>
  useQuery({
    queryKey: "lectures",
    queryFn: () => getLectures(id),
    keepPreviousData: true,
  });

export const useSubmitOrder = () =>
  useMutation((data: submitOrderModel) => submitOrder(data), {
    onSuccess() {
      queryClient.invalidateQueries("orders");
    },
  });

export const useGetQuiz = (id: number | string | null) =>
  useQuery({
    queryKey: "Questions",
    queryFn: () => getQuiz(id),
  });

export const useGetOrders = () =>
  useQuery({
    queryKey: "orders",
    queryFn: () => getOrders(),
  });
