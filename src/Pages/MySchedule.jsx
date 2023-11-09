import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Booking from "../Components/Booking";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
// import useAxiosSecure from "../useAxiosSecure";

const MySchedule = () => {
    const {user,loading} = useContext(AuthContext)

    const [myBookings, setMyBookings] = useState([])
    // const axiosSecure = useAxiosSecure()
    // const url = `/booking?email=${user?.email}`
    useEffect(()=>{
         axios.get(`http://localhost:5000/booking?email=${user?.email}`,{
            withCredentials: true
         })
         .then(res=>{
            console.log(res.data);
            setMyBookings(res.data)
         })
        // axiosSecure.get(url)
      
    },[])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Schedule</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <p className="text-indigo-600 text-xl font-semibold text-center mt-2">Booking Section</p>
            {
                loading? <div className="w-full h-96 mx-96 my-32"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div> :
                <div className=" w-[max-content] mx-auto my-10">
            {
                myBookings.map(booking => <Booking key={booking._id} booking={booking} ></Booking> )
            }
            </div>
            }
        </div>
    );
};

export default MySchedule;