import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.221.180.235:3000",
});

instance.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem("user");
    if (user) {
      config.headers["Authorization"] = `Bearer ${user}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
