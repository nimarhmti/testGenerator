import { api } from "../../config/axios";
import type { authUserDataModel } from "./appAuthentication.interface";
const serviceName = "/api";
export const userAuthentication = async (payload: authUserDataModel) => {
  const response = await api.post(`${serviceName}/register`, payload);
  return response.data;
};

export const userLogIn = async (payload: authUserDataModel) => {
  const response = await api.post(`${serviceName}/login`);
  return response.data;
};
