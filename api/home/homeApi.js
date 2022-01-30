import { axiosInstance } from "../AxiosInstance";

export const homePageApi = () => {
  return axiosInstance().get("/api/home");
};
