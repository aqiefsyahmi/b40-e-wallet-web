import instance from "../pages/api/instance";

export const getStudents = async () => {
  const response = await instance.get("/api/students");

  return await response.data;
};

export const getStudentByMatric = async matric => {
  const res = await instance.get(`/api/students/${matric}`);

  return await res.data[0];
};
