import axios from "axios";
import { useLocalStorage } from "../../hooks";

const { getItem, store } = useLocalStorage();


const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_KEY
  // || "http://localhost:3000"
  , headers: {
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

// refresh token implementation
const getRefreshToken = () => {
  instance.post('/token', { refreshToken: getItem("refreshToken") })
    .then(token => store('accessToken', token.data.accessToken))
    .catch(err => console.error('error refresh', err));
}

instance.interceptors.response.use(
  response => {
    return response;
  },
  async (error) => {
    if (error.response.status == 403) {
      getRefreshToken();

      // return prev request
      return instance(error.config)
    }
  }
);

export default instance;
