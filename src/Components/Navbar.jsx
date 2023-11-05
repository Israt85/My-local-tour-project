import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/G logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)

    const handleLogout = () =>{
        userLogOut()
        .then(result =>{
            console.log(result.user);
            alert('logout')
        })
        .catch(err =>{
            console.log(err);
        })
    }

     const links = <>
     <button><NavLink to="/">Home</NavLink></button>
     <button><NavLink to="/services" >Services</NavLink></button>
     <button><NavLink to="/dashboard">Dashboard</NavLink></button>
     
     
     </>

    return (
        <div>
          <header className="p-4 bg-[#A0BFE0] dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex items-center gap-32">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <img className='h-10 w-16' src={logo} alt="" />
                <h2 className="text-[#4A55A2] font-extrabold text-2xl">GuidedGems</h2>
				
			</a>
			<button className="items-stretch hidden space-x-3 lg:flex">
				{links}
			</button>
		</div>
		<div className="gap-4  flex-shrink-0 hidden lg:flex">
            <div className='flex justify-center flex-col items-center'>
            {
                user && <img className='w-16 h-16 rounded-full' src={user.photoURL
                }/>
            }
            {
                user && <p>{user.displayName
                }</p>
            }
            
            </div>
			{ user?  <button className="px-8 py-3 font-semibold bg-[#4A55A2] rounded dark:bg-violet-400 dark:text-gray-900" onClick={handleLogout}>LogOut</button> : <Link to='/login'><button className="px-8 py-3 font-semibold bg-[#4A55A2] rounded dark:bg-violet-400 dark:text-gray-900">Log in</button></Link> 
           }
		</div>
	</div>
</header>
        </div>
    );
};

export default Navbar;