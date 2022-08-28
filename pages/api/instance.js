import axios from "axios";
import { useLocalStorage } from "../../hooks";

const { getItem } = useLocalStorage();

const instance = axios.create({
  baseURL: "https://e-voucher-api.herokuapp.com/" /*||"http://localhost:3000"*/,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptors for API calls
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
