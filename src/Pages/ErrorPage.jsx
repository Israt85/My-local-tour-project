import { Link } from 'react-router-dom';
import error from '../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='w-full min-h-screen'>
            <img className='w-1/2 mx-auto my-10' src={error} alt="" />
            <h2 className='text-center text-red-600 text-3xl font-bold'>Something went wrong</h2>
           <div className='w-[max-content] mx-auto my-4'>
           <Link to="/"><button className='btn'>Go Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;