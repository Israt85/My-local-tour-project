import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL : 'https://my-local-tour-project-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
useEffect(()=>{
    axiosSecure.interceptors.response.use(res =>{

        return res;
    },error =>{
      console.log('error under',error.response);
    })
},[])

    return axiosSecure;
   
};

export default useAxiosSecure;