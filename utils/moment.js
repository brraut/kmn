import moment from "moment";

export const formatDate = (date, format = "LL") => {
  return moment(date).format(format);
};
