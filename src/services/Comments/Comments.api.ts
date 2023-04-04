import React from "react";
import { api } from "../../config/axios";
const serviceName = "/api";
export const postComments = async (payload: any) => {
  const response = await api.post(`${serviceName}/send_comment`, payload);
  return response.data;
};
