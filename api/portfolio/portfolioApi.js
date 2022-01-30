import { axiosInstance } from "../AxiosInstance";

export const getPortfolioApi = () => {
  return axiosInstance().get("/api/portfolio");
};

export const getSinglePortfolioApi = (slug) => {
  return axiosInstance().get(`api/portfolio/${slug}`);
};
