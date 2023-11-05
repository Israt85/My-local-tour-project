import banner from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'
const Banner = () => {
    return (
        <div className="hero h-screen bg-cover bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-[#4A55A2] pt-20 w-2/3">
            <h1 className="mb-5 text-5xl font-bold">Local Stories, <span className='text-[#45CFDD]'>Global Adventures</span></h1>
            <p className="mb-5 font-bold">Embark on a journey of discovery and immerse yourself in the local treasures of our vibrant hometown. With our expert guides, you will experience hidden gems, uncover authentic cultural experiences.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;