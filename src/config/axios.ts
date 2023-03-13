import axios from "axios";

const BASE_URL = "/register";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
