import instance from "../pages/api/instance";

export const getSumamary = async () => {
  const students = await instance.get("/api/students").then(res => res.data);

  const cafe = await instance.get("/api/cafe").then(res => res.data);

  const transactions = await instance
    .get("/api/transactions")
    .then(res => res.data);

  return Promise.all([students, cafe, transactions]).then(res => {
    return {
      students: res[0].length,
      cafe: res[1].length,
      transactions: res[2].length,
    };
  });
};
