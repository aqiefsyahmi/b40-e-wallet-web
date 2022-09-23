import instance from "../pages/api/instance";

export const setWallet = async (id, amount) => {
  const response = await instance
    .put(`/api/students/${id}/wallet`, {
      amount: amount,
    })
    .then((res) => res.status)
    .catch((err) => console.error(err));

  return response;
};
