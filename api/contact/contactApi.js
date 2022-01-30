import { axiosInstance } from "../AxiosInstance";

export const getContactApi = () => {
  return axiosInstance().get("/api/contact");
};

export const postContactApi = (data) => {
  return axiosInstance().post("/api/contact", data);
};

export const postNewsletterApi = (data) => {
  return axiosInstance().post("/api/newsletter", data);
};
