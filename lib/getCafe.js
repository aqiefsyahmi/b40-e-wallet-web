import instance from "../pages/api/instance";

export const getCafe = async () => {
  const response = instance
    .get("/api/cafe")
    .then(res => res.data)
    .catch(err => console.error(err));

  return response;
};
