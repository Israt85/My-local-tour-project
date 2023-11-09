import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

     const {user} = useContext(AuthContext)
	 const notify = () => toast("Successfully added the service!!");

    const handleAddService = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value
        const service = form.service.value
        const description= form.description.value
        const price = form.price.value
        const address= form.address.value
		const name = form.name.defaultValue;
		const email = form.email.defaultValue
		const img = user?.photoURL
        const obj ={
			service_price: price, service_provider_name: name, service_name:service , service_description: description, service_area: address, service_image:photo, service_provider_image: img,email
        }  
        console.log(obj);  
		axios.post('https://my-local-tour-project-server.vercel.app/service', obj) 
		.then(res =>{
			console.log(res.data);
		})   

    }
    return (
        <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>Add Service</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="p-6 bg-gray-800  text-gray-50">
               
	<form onSubmit={handleAddService} className=" my-10 mx-auto">
    
		<fieldset className=" gap-6 h-[600px] py-10 px-6 rounded-md shadow-sm  bg-gradient-to-r from-indigo-200 to-sky-500">
        <h2 className="text-2xl text-center">Add Services Here</h2>
			<div className="grid grid-cols-2 gap-10 py-10">
				<div className=" ">
					<label  className="text-sm">photo URL</label>
					<input  type="text" name="photo" placeholder="photo url..." className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className=" ">
					<label  className="text-sm">Service name</label>
					<input  type="text" name="service" placeholder="Service name" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className=" ">
					<label  className="text-sm">Your Name</label>
					<input  type="text" disabled name="name" defaultValue={user?.displayName
} className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className=" ">
					<label  className="text-sm">Your Email</label>
					<input id="email" type="email" disabled defaultValue={user?.email}className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="">
					<label className="text-sm">Address</label>
					<input type="text" name="address" placeholder="Area" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className=" ">
					<label  className="text-sm">Price</label>
					<input id="city" type="text" name="price" placeholder="$$" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-2">
					<label  className="text-sm">Description</label>
					<input type="text" name="description" placeholder="Give the description" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				
			</div>
            <div className="flex flex-col">
                <button onClick={notify} className="btn bg-gradient-to-r from-sky-500 to-indigo-500">Add Service</button>
				<ToastContainer />
            </div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddService;