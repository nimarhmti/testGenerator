import { api } from "../../config/axios";
import type { authUserDataModel, MODEL } from "./appAuthentication.interface";
export const userAuthentication = async (payload: authUserDataModel) => {
  const response = await api.post("/api/register", payload);
  return response;
};
