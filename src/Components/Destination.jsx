import dubai from '../assets/dubai.jpg'
import paris from '../assets/paris.jpg'
import london from '../assets/london.jpeg'
import maldives from '../assets/maldives.jpg'


const Destination = () => {
    return (
        <div className="py-10">
            <h2 className="text-3xl py-2 border-b-2 border-blue-950 mx-96 text-center text-[#190482] font-bold ">Top <span className="text-sky-700">Destination</span></h2>
            <p className="w-2/3 text-center mx-auto">Are you ready to embark on your next extraordinary adventure? Look no further! We're delighted to present a selection of our top-rated destinations. Our private tours are crafted with a touch of genuine local essence, allowing you to immerse yourself in the culture, history, and traditions of each place. </p>


            <div className='grid grid-cols-4 px-10'>
                <div className='relative'>
                    <img className='w-52 h-52 ' src={dubai} alt="" />
                    <div className='absolute w-52 flex justify-center items-center bg-black text-white bg-opacity-50 top-0 left-0 right-0 bottom-0 hover:bg-opacity-0'>
                        <p className='text-center text-lg'>Dubai, United Arab Emirates</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-52 h-52 ' src={paris} alt="" />
                    <div className='absolute w-52 flex justify-center items-center bg-black text-white bg-opacity-50 top-0 left-0 right-0 bottom-0 hover:bg-opacity-0'>
                        <p className='text-center text-lg'>Paris,France</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-52 h-52 ' src={maldives} alt="" />
                    <div className='absolute w-52 flex justify-center items-center bg-black text-white bg-opacity-50 top-0 left-0 right-0 bottom-0 hover:bg-opacity-0'>
                        <p className='text-center text-lg'>Maldives</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-52 h-52 ' src={london} alt="" />
                    <div className='absolute w-52 flex justify-center items-center bg-black text-white bg-opacity-50 top-0 left-0 right-0 bottom-0 hover:bg-opacity-0'>
                        <p className='text-center text-lg'>London,United Kingdom</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;