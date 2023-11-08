import tourist from '../assets/sam-knight-N981UfUhF7U-unsplash.jpg'

const Testimonials = () => {
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
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 h-96 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>I've had the opportunity to use this platform for several other services, I've been impressed with the quality of service and the warm, welcoming nature of the providers. It's been a great way to connect with local experts and explore my community.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
				<p className="text-xl font-semibold leadi">East London</p>
				<p className="text-sm uppercase">Benjamin Martinez</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 h-96 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>I highly recommend this offline service platform for anyone looking to discover the hidden treasures in their local area or engage with skilled service providers. It's a fantastic way to support local businesses and create memorable experiences
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
				<p className="text-xl font-semibold leadi">London</p>
				<p className="text-sm uppercase">Emily Turner</p>
			</div>
		</div>

		
	</div>
</section>
        
</div>
		</div>
    );
};

export default Testimonials;