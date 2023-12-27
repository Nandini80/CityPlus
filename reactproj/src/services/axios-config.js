import axios from "axios";

let baseURL = "http://localhost:2000";

const publicReq  = axios.create({
    baseURL,
});

const privateReq = axios.create({
    baseURL,
});

// const imageUpload = axios.create({
//     baseURL,
// });

//imageUpload.defaults.headers.common["Content-type"] = "multipart/form-data"; 

//interceptors are like middleware
privateReq.interceptors.request.use((config)=>{
    const token  = localStorage.getItem("token");
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export {privateReq};
export default publicReq;