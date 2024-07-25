import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost/laravel8/public/api",
});

api.interceptors.response.use(
  (response) => {
      const { data } = response;
      return  data
  },
  
);
