import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import Destination from "../Components/Destination";
import Testimonials from "../Components/Testimonials";
import Services from "./Services";

const Home = () => {
    return (
        <div className="bg-white ">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
           <Services></Services>
           <Destination></Destination>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           
        </div>
    );
};

export default Home;