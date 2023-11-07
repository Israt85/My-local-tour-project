import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyService = () => {

    const {user} = useContext(AuthContext)
    const [myService, setMyService] = useState([])
    const url = `http://localhost:5000/service?email=${user?.email}`;
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
            <h2>My Service :{myService.length} </h2>
            
        </div>
    );
};

export default MyService;