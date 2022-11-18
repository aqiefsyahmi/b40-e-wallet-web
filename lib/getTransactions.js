import instance from "../pages/api/instance";

export const getTransactionCafeByUsername = async username => {
  const res = await instance.get(`/api/transactions/cafe/${username}`);
  const data = await res.data;
  return data;
};

export const getTransactionStudentByMatric = async matricNo => {
  const res = await instance.get(`/api/transactions/students/${matricNo}`);
  const data = await res.data;
  return data;
};

export const getTransactions = async () => {
  const response = await instance
    .get("/api/transactions")
    .then(res => res.data)
    .catch(err => console.error(err));

  return response;
};

export const getTransactionsByRangeDate = async (id, from, to) => {
  console.log(from, to);
  const res = await instance.get(
    `/api/transactions/cafe/range/${id}/${from}/${to}`
  );

  return await res.data;
};
