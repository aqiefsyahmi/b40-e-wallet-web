import instance from "../pages/api/instance";

export const claim = async (from, to) => {
  return await instance.put(`/api/transactions/claim/${from}/${to}`);
};
