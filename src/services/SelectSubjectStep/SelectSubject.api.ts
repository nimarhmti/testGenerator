import React from "react";
import { api } from "../../config/axios";
const serviceName = "/api";
export const getTopic = async (id: number | string) => {
  const response = await api.get(`${serviceName}/get_topics`, {
    params: {
      id,
    },
  });
  return response.data;
};
