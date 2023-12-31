import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { LuMapPin} from "react-icons/lu";
import {BiSolidBadgeDollar  } from "react-icons/bi";

const MyServe = ({ myServe }) => {
    const { service_price, _id, service_provider_name, service_name, service_description, service_area, service_image, service_provider_image } = myServe
    const [myNewServe, setMyNewServe] = useState([myServe])


    const handleDelete = _id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://my-local-tour-project-server.vercel.app/service/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                                console.log("Before filter - myNewServe:", myNewServe);
                                const remaining = myNewServe?.filter(serve => serve._id !== _id);
                                setMyNewServe(remaining)
                                console.log(remaining);
                            }
                        })


                }
            });
       
    };


    return (
        <div>
            <section className=" ">
                <div className="container bg-sky-100 my-10 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">{service_name}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{service_description}
                        </p> <div className="flex items-center gap-2">
                        <p className=" text-xl flex items-center font-extrabold text-blue-600">
                    <LuMapPin></LuMapPin>
                    <p>{service_area}</p>
            </p>

            <p  className="flex text-xl items-center p-1 space-x-1.5">
                            <BiSolidBadgeDollar></BiSolidBadgeDollar>
                            <p>{service_price}</p>
                        </p>
                        </div>

                        
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to={`/update/${_id}`}> <button rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="px-8 py-3 text-lg font-semibold border rounded border-indigo-400" >Delete</button>
                        </div>
                    </div>
                    <div className="flex items-center w-96 justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={service_image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyServe;