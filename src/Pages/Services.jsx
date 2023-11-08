import { useEffect, useState } from "react";
import Service from "../Components/Service";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/tour.json')
        .then(res=> res.json())
        
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <h2 className="my-5 text-center font-extrabold text-[#190482] text-3xl">Services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto px-20">
                {services.slice(0, 4).map((service, index) => (
                    <motion.div
                        key={service._id}
                        initial={{ x: index % 2 === 0 ? '-100%' : '100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                    >
                        <Service service={service} />
                    </motion.div>
                ))}
            </div>
           <div className="w-[max-content] mx-auto mt-4">
           <Link to='/service'><button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">See All</button></Link>
           </div>
        </div>
    );
};

export default Services;