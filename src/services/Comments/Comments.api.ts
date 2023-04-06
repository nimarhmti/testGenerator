import React from "react";
import { api } from "../../config/axios";
import { postCommentsModel } from "./Comments.interface";
const serviceName = "/api";
export const postComments = async (payload: postCommentsModel) => {
  const response = await api.post(`${serviceName}/send_comment`, payload);
  return response.data;
};
