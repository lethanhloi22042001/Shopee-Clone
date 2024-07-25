 import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost/laravel8/",
    // withCredentials: true
});
instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return  data
    },
    
);

export default instance;