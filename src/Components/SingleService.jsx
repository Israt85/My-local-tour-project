import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";


const SingleService = () => {
    const loadedData = useLoaderData()
    const {user} = useContext(AuthContext)
    const { service_price, _id, service_provider_name, service_name, service_description, service_area, service_image, service_provider_image } = loadedData

    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        
        // Safely access form elements and their values
        const photo = form.photo?.value || loadedData.service_image;
        const service = form.service?.value || loadedData.service_name;
        const description = form.description?.value || loadedData.service_description;
        const price = form.price?.value || loadedData.service_price;
        const address = form.address?.value;
        const name = form.name?.value || ''; // Ensure to provide a default value for name
        const email = form.email?.value || user?.email || ''; // Provide a default value for email
        const img = user?.photoURL;
        const date = form.date?.value;
    
        const obj = {
            service_price: price,
            service_provider_name: name,
            service_name: service,
            service_description: description,
            service_area: address,
            service_image: photo,
            service_provider_image: img,
            email,
            date,
        };
    
        axios.post('http://localhost:5000/booking', obj)
            .then((res) => {
                console.log(res.data);
            });
    };
    

    return (
        <div>
            <section className=" bg-sky-300 text-gray-100">
                <div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <div>
                            <img src={service_image} alt="" className="object-contain h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128" />
                            <div className="flex items-center gap-2 mt-6 mb-2">
                                <div><img className="w-20 h-20 rounded-full" src={service_provider_image} alt="" /></div>

                                <div>
                                    <h2 className="text-xl font-semibold tracki">{service_provider_name}</h2>
                                    <h2 className="text-xl tracki">Location: {service_area}</h2>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-xl font-bold sm:text-3xl">{service_name}
                        </h1>
                        <p className="mt-6 text-lg">{service_description}
                        </p>
                        <p>Price : ${service_price}</p>
                        <div className="mt-4">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">

	<form  onSubmit={handlePurchase} className="space-y-12">
		<div className="space-y-4">
			<div>
				
				<input type="text" name="service" defaultValue={service_name}  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="url" name="photo" defaultValue={service_image} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={user?.email} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="date" name="date" id="date"className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="text" name="address" id="address" defaultValue={service_name} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="text" name="price" id="email" defaultValue={service_price}disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			{/* <div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div> */}
			
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Purchase</button>
			</div>
		</div>
	</form>
</div>




                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleService;