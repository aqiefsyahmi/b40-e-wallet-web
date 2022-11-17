import moment from "moment";

export const formatDate = date => {
  // console.log(moment(date));
  return moment(date).format("DD/MM/YYYY");
};

export const formatTime = time => {
  return moment(time, "hh:mma").format("hh:mma");
};
