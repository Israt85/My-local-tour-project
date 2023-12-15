import { useEffect, useState } from 'react';
import tourist from '../assets/sam-knight-N981UfUhF7U-unsplash.jpg'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Testimonials = () => {
	const [swiperRef, setSwiperRef] = useState(null)
	
	const [feedback,setFeedback]= useState([])
	useEffect(()=>{
		axios.get('https://my-local-tour-project-server.vercel.app/feedback')
		.then(res=>{
			console.log(res.data)
			setFeedback(res.data)
		})
	},[])
    return (
        <div>
			<div>
            <div className=' flex mx-20 flex-row gap-4 justify-center'>
            <div>
            <img className='w-40 h-40 rounded-full' src={tourist} alt="" />
            </div>
            <div className='w-full '>
            <h2 className='text-[#190482] text-2xl font-bold'>TOP TESTIMONIALS</h2>
            <p className='italic'>"I recently experienced a guided tour in my local area through this offline service platform, and I must say it was a delightful and memorable experience. The tour was well-organized and led by a knowledgeable local guide. They provided us with unique insights, hidden gems, and fascinating stories about our community that I had never known before. The best part was the personal touch – it felt like I was exploring my own city with a friend."</p>
            </div>
        </div>
        <section className="my-2 text-gray-100">
	<div className="container flex flex-col items-center mx-auto md:px-12">
		<h1 className="p-4 text-4xl font-semibold leadi shadow text-[#00A9FF] text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto">

	<Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

		{
			feedback?.map(feed =><SwiperSlide key={feed._id}><div  className="flex flex-col w-full mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
				<p className="relative h-96 px-6 py-1 text-lg italic text-center text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>{feed?.feedback}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-500 text-gray-900">
				<img src={feed?.photo} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500" />
				<p className="text-xl font-semibold leadi">{feed?.location}</p>
				<p className="text-sm uppercase">{feed.name}</p>
			</div>
		</div></SwiperSlide> )
		}
</Swiper>
		<div className='w-[max-content] mx-auto'>
		<Link to='/feedback'><button className='btn btn-primary'>Give FeedBack</button></Link>
		</div>
	</div>
</section>
        
</div>
		</div>
    );
};

export default Testimonials;