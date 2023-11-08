import { Link } from "react-router-dom";
import { LuMapPin} from "react-icons/lu";

const AllServe = ({allserve}) => {
    const {service_price, _id, service_provider_name, service_name , service_description, service_area, service_image, service_provider_image} = allserve

    return (
        <div>
            <div className=" border p-6 rounded-md shadow-md bg-[#8E8FFA] text-gray-50">
                <img src={service_image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
               <div className="flex justify-between items-center"> <span className="block mt-4 text-xs font-medium tracki uppercase text-[#190482]">{service_name}</span>
                <p className=" text-xl flex items-center font-extrabold text-blue-600">
                    <LuMapPin></LuMapPin>
                    <p>{service_area}</p>
            </p></div>
                <div className="flex items-center gap-2 mt-6 mb-2">
                    <div><img className="w-10 h-10 rounded-full" src={service_provider_image} alt="" /></div>
                    
                    <h2 className="text-xl font-semibold tracki">{service_provider_name}</h2>
                </div>
                {
                    service_description?.length >100? <p>{service_description.slice(0,100)}</p> : <p>{service_description}</p>
                }
                <p className="text-xl font-bold text-[#190482]">
                price : ${service_price}
            </p>
           
            <div className="mt-2">
            <Link to={`/details/${_id}`} ><button className="btn bg-indigo-500">View Details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default AllServe;