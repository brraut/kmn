import { axiosInstance } from "../AxiosInstance";

export const getBlogsApi = () => {
  return axiosInstance().get("api/blogs");
};

export const getSingleBlogApi = (slug) => {
  return axiosInstance().get(`api/blogs/${slug}`);
};
