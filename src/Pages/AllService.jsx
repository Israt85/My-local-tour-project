import axios from "axios";
import { useEffect, useState } from "react";
import AllServe from "../Components/AllServe";

const AllService = () => {
     const [allService, setAllService] = useState([])
     useEffect(()=>{
        axios.get('http://localhost:5000/service')
        .then(res =>{
            console.log(res.data);
            setAllService(res.data)
        })
     },[])

    return (
        <div>
            <div className="grid grid-cols-1 mx-10 gap-10">
                {
                    allService.map(allserve => <AllServe key={allserve._id} allserve={allserve} ></AllServe> )
                }
            </div>
        </div>
    );
};

export default AllService;