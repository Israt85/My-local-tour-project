import axios from "axios";
import { useEffect, useState } from "react";
import Service from "../Components/Service";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/services')
        .then(res=>{
            console.log(res.data);
            setServices(res.data)
        })
    },[])
    return (
        <div>
            <h2 className="my-5 text-center font-extrabold text-[#190482] text-xl">This is our popular services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto px-20">
                {
                    services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;