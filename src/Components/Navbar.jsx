import { NavLink } from 'react-router-dom';
import logo from '../assets/G logo.jpg'



const Navbar = () => {
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
		<div className="items-center  flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold bg-[#4A55A2] rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;