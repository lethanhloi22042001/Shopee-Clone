 import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost/laravel8/public",
    // withCredentials: true
});
instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data
    },
    
);

export default instance;