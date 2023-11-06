import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import Destination from "../Components/Destination";
import Testimonials from "../Components/Testimonials";
import Services from "./Services";

const Home = () => {
    return (
        <div className="bg-[#C2D9FF] ">
            <Banner></Banner>
           <Services></Services>
           <Destination></Destination>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           
        </div>
    );
};

export default Home;