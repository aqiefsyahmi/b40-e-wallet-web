import instance from "../pages/api/instance";

export const getSumamary = async () => {
  const students = instance.get("/api/students/total");

  const cafe = instance.get("/api/cafe/total");

  const transactions = instance.get("/api/transactions/total");

  return Promise.all([students, cafe, transactions]).then(res => {
    return {
      students: res[0].data?.total_students,
      cafe: res[1].data?.total_cafe,
      transactions: res[2].data?.total_transactions,
    };
  });
};
