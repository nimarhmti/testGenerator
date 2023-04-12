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

export const useGetQuiz = (id: number | string | null, isCall: boolean) =>
  useQuery({
    queryKey: "Questions",
    queryFn: () => getQuiz(id),
    enabled: isCall,
    keepPreviousData: false,
    retry: 2,
    staleTime: 1000,
    cacheTime: 1000,
  });

export const useGetOrders = () =>
  useQuery({
    queryKey: "orders",
    queryFn: () => getOrders(),
  });
