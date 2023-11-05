import banner from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'
const Banner = () => {
    return (
        <div className="hero h-screen bg-cover bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" pt-20 w-2/3">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;