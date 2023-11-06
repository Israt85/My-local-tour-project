import axios from "axios";
import { useEffect, useState } from "react";

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
            <h2>Services :{services.length} </h2>
        </div>
    );
};

export default Services;