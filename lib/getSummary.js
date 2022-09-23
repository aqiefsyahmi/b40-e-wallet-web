import instance from "../pages/api/instance";

export const getSumamary = async () => {
  const students = await instance
    .get("/api/students")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const cafe = await instance
    .get("/api/cafe")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  const transactions = await instance
    .get("/api/transactions")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return {
    students: students.length,
    cafe: cafe.length,
    transactions: transactions.length,
  };
};
