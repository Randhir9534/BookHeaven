import axios from "axios"
import base_url from "./api"
let axiosInstanse=axios.create({
    baseURL:base_url
});

export default axiosInstanse