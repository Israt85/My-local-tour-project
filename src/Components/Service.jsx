

const Service = ({service}) => {
    const {service_price, service_provider_name, service_name , service_description, service_image, service_provider_image} = service
    return (
        <div>
            <div className=" p-6 h-full rounded-md shadow-md bg-gray-200">
                <img src={service_image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <span className="block mt-4 text-xs font-medium tracki uppercase text-[#190482]">{service_name}</span>
                <div className="flex items-center gap-2 mt-6 mb-2">
                    <div><img className="w-10 h-10 rounded-full" src={service_provider_image} alt="" /></div>
                    
                    <h2 className="text-xl font-semibold tracki">{service_provider_name}</h2>
                </div>
                {
                    service_description.length >100? <p>{service_description.slice(0,100)}</p> : <p>{service_description}</p>
                }
                <p className="text-xl font-bold text-[#190482]">
                price : ${service_price}
            </p>
            <div className="mt-2">
            <button className="btn btn-outline border-indigo-400">View Details</button>
            </div>
            </div>
            
        </div>
    );
};

export default Service;