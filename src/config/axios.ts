import axios from "axios";

const BASE_URL = "Http//:localhost8000:api";

export const api = axios.create({
  baseURL: BASE_URL,
});
