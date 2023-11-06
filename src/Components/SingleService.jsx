import { useLoaderData } from "react-router-dom";


const SingleService = () => {
    const loadedData = useLoaderData()
    const { service_price, _id, service_provider_name, service_name, service_description, service_area, service_image, service_provider_image } = loadedData
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

	<form  action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				
				<input type="email" name="email" id="email" defaultValue={service_name} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Purchase</button>
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