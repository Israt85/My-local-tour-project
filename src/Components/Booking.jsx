import {BiSolidBadgeDollar  } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
const Booking = ({booking}) => {

    const { service_price, _id, service_provider_name, service_name, service_description, service_area, service_image, service_provider_image } = booking
    return (
        <div>
            
            <div className="flex flex-col my-4 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={service_provider_image} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{service_provider_name}</a>
                    
                    </div>
                </div>
                <div>
                    <img src={service_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{service_name}</h2>
                    <p className="text-sm text-gray-400">{service_description}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex space-x-2 text-sm text-gray-400">
                        <p  className="flex text-xl items-center p-1 space-x-1.5">
                            <BiSolidBadgeDollar></BiSolidBadgeDollar>
                            <p>{service_price}</p>
                        </p>
                        <p className="flex text-xl items-center p-1 space-x-1.5">
                          <LuMapPin></LuMapPin>
                            <p>{service_area}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;