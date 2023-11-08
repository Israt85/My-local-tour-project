import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyServe from "../Components/MyServe";


const MyService = () => {

    const {user} = useContext(AuthContext)
    const [myService, setMyService] = useState([])
    const url = `https://my-local-tour-project-server.vercel.app/service?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyService(data)
        })
    },[url])
    return (
        <div>
            <h2 className="text-center text-indigo-600 font-semibold text-xl mt-4">My Total Service :{myService.length} </h2>
            <div>
                {
                    myService?.map(myServe=><MyServe key={myServe._id} myServe={myServe}></MyServe>)
                }
            </div>
        </div>
    );
};

export default MyService;