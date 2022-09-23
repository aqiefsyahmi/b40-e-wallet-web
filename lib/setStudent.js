import instance from "../pages/api/instance";

export const setStudent = async (name, matric, ic) => {
  const response = await instance
    .post("/api/students", {
      name: name,
      matric_no: matric,
      ic_no: ic,
    })
    .then((res) => res.status)
    .catch((err) => console.error(err));

  return response;
};
