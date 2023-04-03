import { api } from "../../config/axios";
import type { authUserDataModel } from "./appAuthentication.interface";
const serviceName = "/api";
export const userAuthentication = async (payload: authUserDataModel) => {
  const response = await api.post(`${serviceName}/register`, payload);
  return response.data;
};

export const userLogIn = async (payload: authUserDataModel) => {
  const response = await api.post(`${serviceName}/login`, payload, {
    withCredentials: true,
  });
  console.log(response);
  return response.data;
};

export const userLogout = async () => {
  const response = await api.post(`${serviceName}/logout`, null);
  return response.data;
};
