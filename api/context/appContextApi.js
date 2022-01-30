import { axiosInstance } from "../AxiosInstance";

export const getAppContextApi = () => {
  return axiosInstance().get("/api/app-context");
};
