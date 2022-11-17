import instance from "../pages/api/instance";

export const getCafe = async () => {
  const response = await instance.get("/api/cafe");

  return await response.data;
};
