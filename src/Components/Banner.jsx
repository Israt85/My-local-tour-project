import { Link } from 'react-router-dom';
import banner from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className=''>
          <motion.div initial={{ y: -50 }} animate={{ y: 50 }}>
          <div className="hero h-96 bg-cover bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-[#4A55A2] pt-20 w-2/3">
            <h1 className="mb-5 text-5xl font-bold">Local Stories, <span className='text-[#45CFDD]'>Global Adventures</span></h1>
            <p className="mb-5 text-gray-200 font-bold">Embark on a journey of discovery and immerse yourself in the local treasures of our vibrant hometown. With our expert guides, you will experience hidden gems, uncover authentic cultural experiences.</p>
          <Link to='/service'><button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">Get Started</button></Link>
          </div>
        </div>
      </div>
</motion.div>

        </div>
    );
};

export default Banner;