import instance from "../pages/api/instance";

export const logout = async refreshToken => {
  return await instance.delete("/logout", {
    data: {
      refreshToken: refreshToken,
    },
  });
};
