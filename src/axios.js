import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost/laravel8/public",
  // withCredentials: true
});
api.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default api;
