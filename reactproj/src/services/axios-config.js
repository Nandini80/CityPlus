import axios from "axios";

const publicReq  = axios.create();

const privateReq = axios.create();

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
