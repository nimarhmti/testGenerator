import React from "react";
import { api } from "../../config/axios";
const serviceName = "/api";
export const getSection = async () => {
  const response = await api.get(`${serviceName}/get_sections `);
  return response.data;
};
