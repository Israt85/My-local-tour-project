import Banner from "../Components/Banner";
import Destination from "../Components/Destination";
import Services from "./Services";

const Home = () => {
    return (
        <div className="bg-[#C2D9FF] ">
            <Banner></Banner>
           <Services></Services>
           <Destination></Destination>
        </div>
    );
};

export default Home;