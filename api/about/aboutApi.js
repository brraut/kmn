import { axiosInstance } from "../AxiosInstance";

export const getAboutApi = () => {
  return axiosInstance().get("/api/about");
};
