import { axiosInstance } from "../AxiosInstance";

export const getServiceApi = () => {
  return axiosInstance().get("/api/services");
};

export const getSingleServcieApi = (slug) => {
  return axiosInstance().get(`/api/services/${slug}`);
};
