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
const getRefreshToken = async () => {
  try {
    const response = instance.post('/token', { refreshToken: getItem("refreshToken") })
    store('accessToken', response.data.accessToken)

  } catch (error) {
    console.warn('error refresh', error)
  }
}

instance.interceptors.response.use(
  response => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status == 403) {
      await getRefreshToken();

      // return prev request
      return instance(originalRequest)
    }
    return Promise.reject(error)
  }
);

export default instance;
