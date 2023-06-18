import instance from "../pages/api/instance";

export const suspendStudent = async (id, active) => {
  const response = await instance
    .put(`/api/students/${id}/suspend`, {
      active: active,
    })
    .then((res) => res.status)
    .catch((err) => console.error(err));

  return response;
};
