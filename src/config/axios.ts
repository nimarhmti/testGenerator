import axios from "axios";

const BASE_URL = "http://localhost:8000";
const key =
  "XSRF-TOKEN=eyJpdiI6Ik8waVYyRnlTcTQzL2F2N1RqZHVMcHc9PSIsInZhbHVlIjoiL2Rhd3VadFEyNGJYc2xWMlFpREsxUlgwUzREbzY4TjdXa1hjdFBmT3NUWVYyeExyc254VnVTbGRLNm1VTHpGelg1aG1yaFhmVWVydmMyKzFobGhYY2ZjbW9ldEdwQVFaZlRxL0R5eTljdmlSbHIyTTZvZE14M094OEFYMFJGV2kiLCJtYWMiOiJhODVkNDdlNTE5YTk1ZGY3MmQyODQ5YmQyY2M2NTlhNjc3YTU5MjU4ZjMxMGVmZjRhNWU5ZmFiMzMwMGZjMmI3IiwidGFnIjoiIn0%3D; testgenetrator_back_session=eVmCZ4NB9LnTOGZpfCmmdpkkzJhqR6Yl4CE3WjtC";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Cookie: `Cookie1=${key}`,
    // "Content-Type": "application/json",
  },
});

export { api };
