import { useContext } from 'react';
import register from '../assets/regist.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {
     const {userSignup, userProfile} = useContext(AuthContext)
     const location = useLocation()
     const navigate = useNavigate()

      const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const obj ={
            name,photo,email,password,
        }
        console.log(obj);
        userSignup(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : "/")
            userProfile(name, photo)
            .then(result =>{
                console.log(result.user);
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
        
      }



    return (
        <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>Registration Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <div className="flex items-center justify-center gap-10 w-full h-screen mt-6">
            <div className="flex mt-10 flex-col max-w-md p-6 rounded-md sm:p-10 bg-gradient-to-r from-indigo-500 to bg-[#A0BFE0] text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
	</div>
	<form onSubmit={handleRegister} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label  className="block mb-2 text-sm">Your Name</label>
				<input type="text" name="name" id="name" placeholder="User Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<label  className="block mb-2 text-sm">Photo url</label>
				<input type="url" name="photo" id="photo" placeholder="photo url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<label className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="your@email.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label  className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Up</button>
                
			</div>
			<p className="px-6 text-sm font-semibold text-center text-gray-700">Already have an account?
				<Link className='text-purple-700 font-bold' to="/login"> Sign in</Link>.
			</p>
		</div>
	</form>
</div>

<div>
    <img className='w-96 h-96' src={register} alt="" />
</div>
        </div>
        </div>
    );
};

export default Register;