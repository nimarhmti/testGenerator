import { async } from "q";
import { api } from "../../config/axios";
import type { authUserDataModel } from "./appAuthentication.interface";
export const userAuthentication = async (payload: authUserDataModel) => {
  const response = await api.post("", payload);
  return response;
};
