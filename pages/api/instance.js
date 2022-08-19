import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-voucher-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
