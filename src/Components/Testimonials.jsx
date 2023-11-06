import tourist from '../assets/sam-knight-N981UfUhF7U-unsplash.jpg'

const Testimonials = () => {
    return (
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
        
</div>
    );
};

export default Testimonials;