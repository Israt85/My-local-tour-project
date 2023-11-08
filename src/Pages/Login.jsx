import { Link } from 'react-router-dom';
import login from '../assets/Login.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';


const Login = () => {

        const {userSignIn, googleLogin} = useContext(AuthContext)

       const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password);
        userSignIn(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err);
        })
       }
	const handleGoogleLogin = () =>{
		googleLogin()
		.then(result=>{
			console.log(result.user);
		})
		.catch(err=>{
			console.log(err);
		})
	}


    return (
       <div>
		<Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

	<div className=" flex items-center justify-center gap-10 w-full h-screen">

			
<div className="flex mt-10 flex-col max-w-md p-6 rounded-md sm:p-10 bg-gradient-to-r from-indigo-500 to bg-[#A0BFE0] text-gray-100">
<div className="mb-8 text-center">
<h1 className="my-3 text-4xl font-bold">Sign in</h1>
<p className="text-sm text-gray-400">Sign in to access your account</p>
</div>
<form onSubmit={handleLogin} className="space-y-12">
<div className="space-y-4">
<div>
	<label className="block mb-2 text-sm">Email address</label>
	<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
</div>
<div>
	<div className="flex justify-between mb-2">
		<label  className="text-sm">Password</label>
		<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
	</div>
	<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
</div>
</div>
<div className="space-y-2">
<div>
	<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
	
</div>
<div>
<button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
	<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
</svg>
<p>Login with Google</p>
</button>
</div>
<p className="px-6 font-semibold text-sm text-center text-gray-700">Don't have an account yet?
	<Link className='text-purple-700' to="/register"> Sign up</Link>.
</p>
</div>
</form>
</div>

<div>
<img className='w-64 h-72' src={login} alt="" />
</div>
</div>
	</div>
    );
};

export default Login;