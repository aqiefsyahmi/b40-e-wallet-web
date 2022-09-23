import instance from "../pages/api/instance";

export const getTransactions = async () => {
  const response = await instance
    .get("/api/transactions")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return response;
};
