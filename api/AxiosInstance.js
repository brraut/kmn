import axios from "axios";

export const axiosInstance = () => {
  // const baseUrl = process.env.REACT_APP_URL;
  const baseUrl = process.env.BACKEND_URL;

  const token = localStorage.getItem("token");
  let headers = {
    Accept: "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};
