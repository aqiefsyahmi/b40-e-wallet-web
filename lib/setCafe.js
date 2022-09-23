import instance from "../pages/api/instance";

export const setCafe = async (username, password, cafeOwner, cafeName) => {
  const response = await instance
    .post("/api/cafe", {
      username: username,
      password: password,
      owner_name: cafeOwner,
      cafe_name: cafeName,
    })
    .then((res) => res.status)
    .catch((err) => console.error(err));

  return response;
};
