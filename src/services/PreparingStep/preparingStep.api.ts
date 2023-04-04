import { keys } from "../../config/Enum";
import { api } from "../../config/axios";
import { submitOrderModel } from "./PreparingStep.interfacei";

const serviceName = "/api";
export const getLectures = async (id: number | string) => {
  const response = await api.get(`${serviceName}/get_lecture`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const submitOrder = async (payload: submitOrderModel) => {
  const response = await api.post(`${serviceName}/order `, payload);
  localStorage.setItem(keys.ExamKey, response.data);
  return response.data;
};

export const getQuiz = async (id: number | string | null) => {
  const response = await api.get(`${serviceName}/get_Quiz`, {
    params: {
      id,
    },
  });
  return response.data;
};
