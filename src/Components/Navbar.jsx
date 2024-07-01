import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/G logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogout = () => {
        userLogOut()
            .then(result => {
                console.log(result.user);
                alert('logout')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const links = <>
        <button className='btn'><NavLink to="/">Home</NavLink></button>
        <button className='btn'><NavLink to="/service" >Services</NavLink></button>
        <details className="dropdown">
            <summary className=" btn">Dashboard</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {
                     <>
                        <li><Link to='/myservice'>My Service</Link></li>
                        <li><Link to="/addservice">Add-Service</Link></li>
                        <li><Link to='/myschedule'> My-schedules</Link></li></>
                }

            </ul>
        </details>


    </>

    return (
        <div className=''>
            <header className="p-4 bg-white dark:bg-gray-800 dark:text-gray-100">

            
                <div className=" container flex justify-between h-16 mx-auto">
                <div className="dropdown">
      <label tabIndex={0} className=" btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <button className='btn'><NavLink to="/">Home</NavLink></button>
      <button className='btn'><NavLink to="/service" >Services</NavLink></button>
      <details className="dropdown">
            <summary className=" btn">Dashboard</summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
             
                        <li><Link to='/myservice'>My Service</Link></li>
                        <li><Link to="/addservice">Add-Service</Link></li>
                        <li><Link to='/myschedule'> My-schedules</Link></li>
                

            </ul>
        </details>
      </ul>
    </div>
                    <div className="flex items-center gap-32">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                            <img className='h-10 w-16' src={logo} alt="" />
                            <h2 className="text-[#4A55A2] font-extrabold text-2xl">GuidedGems</h2>

                        </a>
                        <button className="items-stretch hidden space-x-3 lg:flex">
                            {links}
                        </button>
                    </div>
                    <div className="gap-4 flex">
                        <div className='flex justify-center flex-col items-center'>
                            {
                                user && <img className='w-16 h-16 rounded-full' src={user?.photoURL
                                } />
                            }
                            {
                                user && <p>{user?.displayName
                                }</p>
                            }

                        </div>
                        {user ? <button className="btn btn-outline bg-gradient-to-r from-sky-500 to-indigo-500" onClick={handleLogout}>LogOut</button> : <Link to='/login'><button className=" my-3 btn bg-gradient-to-r from-sky-500 to-indigo-500">Log in</button></Link>
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;