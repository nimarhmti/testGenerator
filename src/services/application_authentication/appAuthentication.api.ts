import { api } from "../../config/axios";
import type { authUserDataModel } from "./appAuthentication.interface";
export const userAuthentication = async (payload: authUserDataModel) => {
  const response = await api.post("/register", payload);
  return response;
};
