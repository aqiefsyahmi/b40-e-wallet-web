import instance from "../pages/api/instance";

export const getStudents = async () => {
  const response = instance
    .get("/api/cafeOwners")
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return response;
};
